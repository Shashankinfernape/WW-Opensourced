__d("WAWebFetchBizAiLargeScreensGate", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiLargeScreensGateQuery.graphql",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = e !== undefined ? e : e = n("WAWebFetchBizAiLargeScreensGateQuery.graphql");
    const h = "biz_ai_large_screens_gate";
    const y = 360 * 60;
    const C = 10000;
    function b(e) {
        o("WAWebBackendApi").frontendFireAndForget("loadedBizAiLargeScreensGate", {
            enabled: e
        });
    }
    function v() {
        const e = r("WAWebUserPrefsStore").getUser(h);
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { enabled, ts } = e;
        if (typeof enabled !== "boolean" || typeof ts !== "number") {
            return null;
        }
        const a = !o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(y, o("WATimeUtils").castToUnixTime(ts)));
        if (a) {
            return null;
        }
        return enabled;
    }
    function S(enabled) {
        r("WAWebUserPrefsStore").setUser(h, {
            enabled,
            ts: o("WATimeUtils").unixTime()
        });
    }
    function R() {
        return o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() * 1000 + C;
    }
    function L(e) {
        if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebABProps").getABPropConfigValue("biz_ai_large_screens_gate_fetch_enabled")) {
            return (f || (f = n("Promise"))).resolve();
        }
        if (e !== "debug") {
            const t = v();
            if (t != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate cache hit enabled=",
                    ""
                ])), t);
                b(t);
                return (f || (f = n("Promise"))).resolve();
            }
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[BizAI] fetchBizAiLargeScreensGate reason=",
            ""
        ])), e);
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAPromiseTimeout").promiseTimeout(E(), R())).then(I).catch((e)=>{
            I(e instanceof o("WACustomError").TimeoutError ? {
                type: "timeout"
            } : {
                type: "token-failed"
            });
        });
    }
    function E() {
        return o("WAWebFetchAdAccountToken").fetchToken().then((e)=>{
            if (e.type !== "success") {
                return {
                    type: "token-failed"
                };
            }
            return k(e.token).then((e)=>{
                if (e.type === "ok") {
                    return {
                        enabled: e.enabled,
                        type: "enabled"
                    };
                }
                if (e.type === "error") {
                    return {
                        type: "network-failed"
                    };
                }
                o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                return o("WAWebFetchAdAccountToken").fetchToken(true).then((e)=>{
                    if (e.type !== "success") {
                        return {
                            type: "token-failed"
                        };
                    }
                    return k(e.token).then((e)=>{
                        if (e.type === "ok") {
                            return {
                                enabled: e.enabled,
                                type: "enabled"
                            };
                        }
                        if (e.type === "auth") {
                            o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                            return {
                                type: "auth-failed"
                            };
                        }
                        return {
                            type: "network-failed"
                        };
                    });
                });
            });
        });
    }
    function k(token) {
        return o("WAWebRelayClient").fetchQuery(g, {}, {
            accessToken: token,
            environmentType: "facebook"
        }).then((e)=>({
                enabled: e?.xfb_meta_ai_biz_agent_wa_large_screens_gate?.value === true,
                type: "ok"
            })).catch((e)=>{
            if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
                return {
                    type: "auth"
                };
            }
            return {
                type: "error"
            };
        });
    }
    function I(e) {
        switch(e.type){
            case "enabled":
                S(e.enabled);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate enabled=",
                    ""
                ])), e.enabled);
                b(e.enabled);
                return;
            case "timeout":
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate fetch timed out"
                ]))).sendLogs("maiba-large-screens-gate-fetch-timeout");
                b(false);
                return;
            case "auth-failed":
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate fetch failed (auth)"
                ]))).sendLogs("maiba-large-screens-gate-fetch-failed-auth");
                b(false);
                return;
            case "network-failed":
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate fetch failed"
                ]))).sendLogs("maiba-large-screens-gate-fetch-failed-network");
                b(false);
                return;
            case "token-failed":
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate token fetch failed"
                ]))).sendLogs("maiba-large-screens-gate-token-fetch-failed");
                b(false);
                return;
        }
    }
    l.fetchBizAiLargeScreensGate = L;
}, 98);