__d("WAWebBizAiRulesGenMutation", [
    "WAWebBizAiRulesGenMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebBizAiRulesGenMutation.graphql");
    const u = {
        isSuccess: false
    };
    function c() {
        return o("WAWebFetchAdAccountToken").fetchToken().then((e)=>{
            if (e.type === "success") {
                return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").commitMutation(s, {}, {
                        environmentType: "facebook",
                        accessToken: e.token
                    }).then((e)=>{
                        const t = e?.xfb_meta_ai_biz_agent_wa_gen_rules;
                        if (t?.success !== true || t.rules == null) {
                            return u;
                        }
                        return {
                            isSuccess: true,
                            rules: t.rules,
                            reengagement: t.reengagement
                        };
                    }).catch((e)=>u));
            }
            return u;
        });
    }
    l.MUTATION = s;
    l.fetchRules = c;
}, 98);