__d("WAWebCTWABizAccessTokenNonceManager", [
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAPromiseTimeout",
    "WAResolvable",
    "WASmaxBizAccessTokenRequestSilentNonceRPC",
    "WAWebCTWAGatingUtils",
    "WAWebQplFlowWrapper",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("qpl")._(1029383287, "3456");
    const d = 250;
    const m = 1000;
    let p = null;
    function _(e) {
        if (p != null && e !== true) {
            return p.promise;
        }
        const t = o("WAWebCTWAGatingUtils").adAccountTokenNoncePushWaitTimeoutSeconds();
        const n = o("WAWebCTWAGatingUtils").adAccountTokenNonceMaxRetries();
        o("WAWebQplFlowWrapper").QPL.markerStart(c);
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
            int: {
                fetch_nonce_max_retries: n,
                fetch_nonce_timeout: t
            }
        });
        let r = n;
        const a = function(a) {
            o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
                int: {
                    fetch_nonce_retry: n - r
                }
            });
            return o("WAPromiseTimeout").promiseTimeout(f(), t * 1000).then((e)=>{
                a(e);
            }).catch((e)=>{
                const t = r > 0;
                r--;
                if (!t) {
                    if (e instanceof o("WACustomError").TimeoutError) {
                        o("WAWebQplFlowWrapper").QPL.markerEnd(c, 105);
                        p = null;
                    }
                    throw e;
                }
            });
        };
        const i = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            code: a,
            name: "fetchAdAccountNonce",
            timer: {
                algo: {
                    first: d,
                    type: "exponential"
                },
                max: m
            }
        });
        i.start();
        return i.promise();
    }
    function f() {
        o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_start");
        const e = p = new (o("WAResolvable")).Resolvable;
        return o("WASmaxBizAccessTokenRequestSilentNonceRPC").sendRequestSilentNonceRPC({}).then((t)=>{
            switch(t.name){
                case "RequestSilentNonceResponseError":
                    o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_end");
                    o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3);
                    p = null;
                    return {
                        type: "error"
                    };
                case "RequestSilentNonceResponseRecoveryRequired":
                    o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
                        bool: {
                            fetch_nonce_recovery_needed: true
                        }
                    });
                    o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_end");
                    o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3);
                    p = null;
                    return {
                        emailMask: t.value.resultEmail,
                        type: "recovery-required"
                    };
                default:
                    t.name;
                    o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_end");
                    o("WAWebQplFlowWrapper").QPL.markerPoint(c, "push_nonce_start");
                    return e.promise;
            }
        }).catch((e)=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_end");
            o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3);
            p = null;
            throw e;
        });
    }
    function g() {
        if (p != null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ad-email] awaitPushNonce overwriting cachedNonce"
            ])));
        }
        const t = p = new (o("WAResolvable")).Resolvable;
        return o("WAPromiseTimeout").promiseTimeout(t.promise, v() * 1000).then((e)=>{
            if (p === t) {
                p = null;
            }
            return e;
        }).catch((e)=>{
            if (e instanceof o("WACustomError").TimeoutError) {
                if (p === t) {
                    p = null;
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ad-email] silent nonce push timeout"
                ])));
                return {
                    type: "error"
                };
            }
            throw e;
        });
    }
    function h(e) {
        if (p == null) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Received a biz token nonce without asking for it"
            ])));
            p = null;
            o("WAWebQplFlowWrapper").QPL.markerStart(c);
            o("WAWebQplFlowWrapper").QPL.markerPoint(c, "push_nonce_end");
            o("WAWebQplFlowWrapper").QPL.markerEnd(c, 216);
        } else {
            p.resolve({
                nonce: e,
                type: "success"
            });
            o("WAWebQplFlowWrapper").QPL.markerPoint(c, "push_nonce_end");
            o("WAWebQplFlowWrapper").QPL.markerEnd(c, 2);
        }
    }
    function y(e) {
        if (p == null) {
            p = new (o("WAResolvable")).Resolvable;
        }
        p.resolve({
            nonce: e,
            type: "success"
        });
    }
    function C() {
        p = null;
    }
    function b(e) {
        return e;
    }
    function v() {
        return o("WAWebCTWAGatingUtils").adAccountTokenNoncePushWaitTimeoutSeconds() * (o("WAWebCTWAGatingUtils").adAccountTokenNonceMaxRetries() + 1);
    }
    l.fetchNonce = _;
    l.awaitPushNonce = g;
    l.setNonceFromPushNotification = h;
    l.setNonceFromRecoveryCode = y;
    l.markNonceAsUsed = C;
    l.castToNonce = b;
    l.getMaximumNonceFetchTimeoutSeconds = v;
}, 98);