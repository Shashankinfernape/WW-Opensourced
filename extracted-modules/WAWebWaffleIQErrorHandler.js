__d("WAWebWaffleIQErrorHandler", [
    "Promise",
    "WAExponentialBackoffIterator",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebSubscriptionAgeGating",
    "WAWebWaffleLifecycleWamLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        generateWAEntACUser: {
            IQErrorConflict: "server_purge",
            IQErrorAlreadyExists: "server_pause"
        },
        generateAccessTokens: {
            IQErrorWFStateMismatch: "server_pause",
            IQErrorConflict: "server_purge",
            IQErrorNotAuthorized: "server_pause",
            IQErrorAlreadyExists: "refresh_token"
        },
        refreshAccessToken: {
            IQErrorNotAuthorized: "refetch_certs"
        },
        ping: {
            IQErrorNotAuthorized: "refresh_token"
        },
        stateExists: {},
        linkAction: {
            IQErrorNotAuthorized: "refresh_token",
            IQErrorWFStateMismatch: "fail"
        }
    };
    const c = 3;
    const minTimeout = 1000;
    const maxTimeout = 30000;
    function p(e = c) {
        const t = {
            minTimeout,
            maxTimeout,
            retries: e,
            jitter: 0.5
        };
        let n = o("WAExponentialBackoffIterator").exponentialBackoffIterator(t);
        return {
            nextBackoffMs: function() {
                const e = n.next();
                if (e.done) {
                    return null;
                }
                return e.value;
            },
            reset: function() {
                n = o("WAExponentialBackoffIterator").exponentialBackoffIterator(t);
            }
        };
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = u[e]?.[t];
            if (a != null) {
                let i;
                (i = o("WAWebWaffleLifecycleWamLogger")).logErrorClassification({
                    errorAction: i.mapIQErrorActionToWam(a),
                    errorCode: i.mapIQErrorNameToWamCode(t),
                    pkiVersion: i.mapPkiVersionToWam(n)
                });
                return y(a);
            }
            return g(t, n);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield e === "IQErrorRequestTimeout" || e === "IQErrorRateOverlimit" ? (s || (s = n("Promise"))).resolve("retry") : e === "IQErrorNotAuthorized" ? (s || (s = n("Promise"))).resolve(o("WAWebAccountLinkingGatingUtils").isGuestMode() ? "fail" : "request_nonce") : e === "IQErrorWFNotAuthorizedInvalidPassword" ? (s || (s = n("Promise"))).resolve("fail") : e === "IQErrorWFNotFound" || e === "IQErrorWFStateMismatch" ? (()=>{
                o("WAWebMetaAiWaffleAuthTokenCache").clearMetaAiWaffleAuthTokenBlobCache();
                return o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking").purgeWaffleData().then(()=>o("WAWebSubscriptionAgeGating").invalidateSubscriptionAgeVerdict()).then(()=>"handled");
            })() : e === "IQErrorWFSuspended" ? o("WAWebAccountLinkingHandler").handlePausedState().then(()=>"handled") : e === "IQErrorPayloadEncDec" ? (s || (s = n("Promise"))).resolve("refetch_certs") : (s || (s = n("Promise"))).resolve("fail");
            o("WAWebWaffleLifecycleWamLogger").logErrorClassification({
                errorAction: o("WAWebWaffleLifecycleWamLogger").mapIQErrorActionToWam(r),
                errorCode: o("WAWebWaffleLifecycleWamLogger").mapIQErrorNameToWamCode(e),
                pkiVersion: o("WAWebWaffleLifecycleWamLogger").mapPkiVersionToWam(t)
            });
            return y(r);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        if (!o("WAWebAccountLinkingGatingUtils").isGuestMode() || o("WAWebAccountLinkingGatingUtils").isWaffleLifecycleEnabled()) {
            return e;
        }
        if (e === "retry" || e === "request_nonce" || e === "pause" || e === "purge" || e === "server_pause" || e === "server_purge") {
            return "fail";
        }
        return e;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebAccountLinkingGatingUtils").isGuestMode()) {
                return false;
            }
            const n = t.nextBackoffMs();
            if (n == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Nonce retry limit reached, stopping retry loop"
                ]))).sendLogs("waffle-nonce-retry-limit", {
                    sampling: 0.01
                });
                return false;
            }
            yield o("WAPromiseDelays").delayMs(n);
            return o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary();
        });
        return b.apply(this, arguments);
    }
    l.createWaffleOperationRetryState = p;
    l.handleCommonWaffleIQError = _;
    l.handleNonceRetry = C;
}, 98);