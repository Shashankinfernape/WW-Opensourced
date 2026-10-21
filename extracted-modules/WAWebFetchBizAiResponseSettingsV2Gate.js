__d("WAWebFetchBizAiResponseSettingsV2Gate", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizAiAgentGating",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiResponseSettingsV2GateMutation.graphql",
    "WAWebGraphQLServerError",
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
    let g;
    let h;
    const y = e !== undefined ? e : e = n("WAWebFetchBizAiResponseSettingsV2GateMutation.graphql");
    const C = "biz_ai_response_settings_v2_gate";
    const b = 360 * 60;
    const v = 10000;
    const S = 2;
    function R(e) {
        o("WAWebBackendApi").frontendFireAndForget("loadedBizAiResponseSettingsV2Gate", {
            enabled: e
        });
    }
    function L() {
        const e = r("WAWebUserPrefsStore").getUser(C);
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { enabled, ts } = e;
        if (typeof enabled !== "boolean" || typeof ts !== "number") {
            return null;
        }
        const a = !o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(b, o("WATimeUtils").castToUnixTime(ts)));
        if (a) {
            return null;
        }
        return enabled;
    }
    function E(e) {
        r("WAWebUserPrefsStore").setUser(C, {
            enabled: e,
            ts: o("WATimeUtils").unixTime()
        });
    }
    function k() {
        return S * (o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() * 1000 + v);
    }
    function I(e) {
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return (h || (h = n("Promise"))).resolve();
        }
        const t = o("WAWebBizAiAgentGating").getResponseSettingsV2TriState();
        if (t === "NONE") {
            R(false);
            return (h || (h = n("Promise"))).resolve();
        }
        if (t === "ROLLOUT") {
            R(true);
            return (h || (h = n("Promise"))).resolve();
        }
        if (e !== "debug") {
            const a = L();
            if (a != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate cache hit enabled=",
                    ""
                ])), a);
                R(a);
                return (h || (h = n("Promise"))).resolve();
            }
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[BizAI] fetchBizAiResponseSettingsV2Gate reason=",
            ""
        ])), e);
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAPromiseTimeout").promiseTimeout(T(), k())).then($).catch((e)=>{
            $(e instanceof o("WACustomError").TimeoutError ? {
                type: "timeout"
            } : {
                type: "unknown-failed"
            });
        });
    }
    function T() {
        return o("WAWebFetchAdAccountToken").fetchToken().then((e)=>{
            if (e.type !== "success") {
                return {
                    type: "token-failed"
                };
            }
            return D(e.token).then((e)=>{
                if (e.type === "ok") {
                    return {
                        enabled: e.enabled,
                        type: "enabled"
                    };
                }
                if (e.type === "error") {
                    return {
                        reason: e.reason,
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
                    return D(e.token).then((e)=>{
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
                            reason: e.reason,
                            type: "network-failed"
                        };
                    });
                });
            });
        });
    }
    function D(token) {
        return o("WAWebRelayClient").commitMutation(y, {}, {
            accessToken: token,
            environmentType: "facebook"
        }).then((e)=>{
            const t = e?.xfb_meta_ai_biz_agent_wa_fetch_qe_bool;
            if (t?.success !== true) {
                return {
                    reason: `success=${String(t?.success)}`,
                    type: "error"
                };
            }
            return {
                enabled: t.value === true,
                type: "ok"
            };
        }).catch((e)=>{
            if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
                return {
                    type: "auth"
                };
            }
            return {
                reason: x(e),
                type: "error"
            };
        });
    }
    function x(e) {
        if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
            const a = (e.source?.errors ?? []).map(({ code })=>code).join(",");
            return `codes=${a} http=${String(e.source?.httpStatus)}`;
        }
        if (e instanceof Error) {
            return e.name;
        }
        return typeof e;
    }
    function $(e) {
        e: {
            const t = e;
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "enabled" && "enabled" in t) {
                const n = t.enabled;
                E(n);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate enabled=",
                    ""
                ])), n);
                R(n);
                break e;
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "timeout") {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch timed out"
                ]))).sendLogs("maiba-response-settings-v2-gate-fetch-timeout");
                R(false);
                break e;
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "auth-failed") {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch failed (auth)"
                ]))).sendLogs("maiba-response-settings-v2-gate-fetch-failed-auth");
                R(false);
                break e;
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "network-failed" && "reason" in t) {
                const r = t.reason;
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch failure reason=",
                    ""
                ])), r);
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch failed"
                ]))).sendLogs("maiba-response-settings-v2-gate-fetch-failed-network");
                R(false);
                break e;
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "token-failed") {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate token fetch failed"
                ]))).sendLogs("maiba-response-settings-v2-gate-token-fetch-failed");
                R(false);
                break e;
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.type === "unknown-failed") {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch failed (unknown)"
                ]))).sendLogs("maiba-response-settings-v2-gate-fetch-failed-unknown");
                R(false);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
    }
    l.fetchBizAiResponseSettingsV2Gate = I;
}, 98);