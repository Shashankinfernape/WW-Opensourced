__d("WAWebFetchBizAiWebSmartComposerAiListsGate", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql",
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
    const g = e !== undefined ? e : e = n("WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql");
    const h = "biz_ai_web_smart_composer_ai_lists_gate";
    const y = "biz_ai_web_editing_coaching_gate";
    const C = 360 * 60;
    const b = 10000;
    const v = 2;
    function S(e) {
        o("WAWebBackendApi").frontendFireAndForget("loadedBizAiWebSmartComposerAiListsGate", {
            enabled: e
        });
    }
    function R(e) {
        o("WAWebBackendApi").frontendFireAndForget("loadedBizAiWebEditingCoachingGate", {
            enabled: e
        });
    }
    function L(e) {
        const t = r("WAWebUserPrefsStore").getUser(e);
        if (t == null || typeof t !== "object") {
            return null;
        }
        const { enabled, ts } = t;
        if (typeof enabled !== "boolean" || typeof ts !== "number") {
            return null;
        }
        const i = !o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(C, o("WATimeUtils").castToUnixTime(ts)));
        if (i) {
            return null;
        }
        return enabled;
    }
    function E(e, t) {
        r("WAWebUserPrefsStore").setUser(e, {
            enabled: t,
            ts: o("WATimeUtils").unixTime()
        });
    }
    function k() {
        return v * (o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() * 1000 + b);
    }
    function I(e) {
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return (f || (f = n("Promise"))).resolve();
        }
        const t = e === "debug" ? null : L(h);
        const a = e === "debug" ? null : L(y);
        if (e !== "debug" && (t != null && S(t), a != null && R(a), t != null && a != null)) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] Web experiment gate caches hit"
            ])));
            return (f || (f = n("Promise"))).resolve();
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[BizAI] fetchBizAiWebSmartComposerAiListsGate reason=",
            ""
        ])), e);
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAPromiseTimeout").promiseTimeout(T(), k())).then((e)=>x(e, t, a)).catch((e)=>{
            x(e instanceof o("WACustomError").TimeoutError ? {
                type: "timeout"
            } : {
                type: "network-failed"
            }, t, a);
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
                    return babelHelpers.extends({}, e, {
                        type: "enabled"
                    });
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
                    return D(e.token).then((e)=>{
                        if (e.type === "ok") {
                            return babelHelpers.extends({}, e, {
                                type: "enabled"
                            });
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
    function D(token) {
        return o("WAWebRelayClient").fetchQuery(g, {}, {
            accessToken: token,
            environmentType: "facebook"
        }).then((e)=>({
                editingCoachingEnabled: e?.xfb_meta_ai_biz_agent_wa_web_ai_editing_coaching_gate?.value === true,
                enabled: e?.xfb_meta_ai_biz_agent_wa_web_smart_composer_ai_lists_gate?.value === true,
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
    function x(e, t, n) {
        e: {
            const r = e;
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "enabled" && "editingCoachingEnabled" in r && "enabled" in r) {
                const { editingCoachingEnabled, enabled } = r;
                E(h, enabled);
                E(y, editingCoachingEnabled);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] Web experiment gates loaded"
                ])));
                S(enabled);
                R(editingCoachingEnabled);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "timeout") {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] Smart Composer and AI Lists gate fetch timed out"
                ]))).sendLogs("maiba-web-smart-composer-ai-lists-gate-fetch-timeout");
                S(t ?? false);
                R(n ?? false);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "auth-failed") {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] Smart Composer and AI Lists gate fetch failed (auth)"
                ]))).sendLogs("maiba-web-smart-composer-ai-lists-gate-fetch-failed-auth");
                S(t ?? false);
                R(n ?? false);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "network-failed") {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] Smart Composer and AI Lists gate fetch failed"
                ]))).sendLogs("maiba-web-smart-composer-ai-lists-gate-fetch-failed-network");
                S(t ?? false);
                R(n ?? false);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "token-failed") {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] Smart Composer and AI Lists gate token fetch failed"
                ]))).sendLogs("maiba-web-smart-composer-ai-lists-gate-token-fetch-failed");
                S(t ?? false);
                R(n ?? false);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        }
    }
    l.fetchBizAiWebSmartComposerAiListsGate = I;
}, 98);