__d("WAWebBizAiHandoffRemovalTimingFetchQuery", [
    "WALogger",
    "WAWebBizAiHandoffRemovalTimingFetchQuery.graphql",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebBizAiHandoffRemovalTimingFetchQuery.graphql");
    const c = {
        isSuccess: true
    };
    const d = {
        isSuccess: false
    };
    function m() {
        return o("WAWebFetchAdAccountToken").fetchToken().then((e)=>{
            if (e.type !== "success") {
                return d;
            }
            return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").fetchQuery(u, {}, {
                    environmentType: "facebook",
                    accessToken: e.token
                }).then((e)=>{
                    const n = e?.xfb_meta_ai_biz_agent_wa_handoff_removal_timing?.timing;
                    if (n == null) {
                        return d;
                    }
                    o("WAWebBizAiHandoffRemovalTimingModel").applyHandoffRemovalTiming(o("WAWebBizAiHandoffRemovalTimingModel").toHandoffRemovalTiming(n));
                    return c;
                }));
        }).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "fetchHandoffRemovalTiming failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-handoff-removal-timing-fetch");
            return d;
        });
    }
    l.QUERY = u;
    l.fetchHandoffRemovalTiming = m;
}, 98);