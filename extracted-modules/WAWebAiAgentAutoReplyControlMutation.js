__d("WAWebAiAgentAutoReplyControlMutation", [
    "Promise",
    "WAWebAiAgentAutoReplyControlMutation.graphql",
    "WAWebBizAiAgentGating",
    "WAWebFetchAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebAiAgentAutoReplyControlMutation.graphql");
    const c = {
        isSuccess: false
    };
    function d(e, t) {
        if (!o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled()) {
            return (s || (s = n("Promise"))).resolve(c);
        }
        const i = o("WAWebLidMigrationUtils").toLid(e)?.user;
        const l = o("WAWebLidMigrationUtils").toPn(e)?.user;
        return m(l, i, t);
    }
    function m(e, t, thread_status) {
        return o("WAWebFetchAdAccountToken").fetchToken().then((a)=>{
            if (a.type === "success") {
                return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").commitMutation(u, {
                        consumer_lid: t ?? "",
                        phone_number: e ?? "",
                        thread_status
                    }, {
                        environmentType: "facebook",
                        accessToken: a.token
                    }).then((e)=>{
                        const t = e?.xfb_whatsapp_smb_maiba_status_update;
                        if (t?.success === true) {
                            const n = t.update_timestamp_ms;
                            const r = n != null && n !== "" ? Number(n) : null;
                            return {
                                isSuccess: true,
                                updateTimestampMs: r != null && Number.isFinite(r) ? r : null
                            };
                        }
                        return c;
                    }).catch((e)=>c));
            }
            return c;
        });
    }
    l.changeAiReplyStatus = d;
}, 98);