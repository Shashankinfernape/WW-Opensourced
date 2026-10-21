__d("useWAWebPollAddOptionContributors", [
    "WAWebMsgCollection",
    "WAWebMsgType",
    "react-compiler-runtime",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const r = o("useWAWebAggregatedView").useAggregatedView(o("WAWebMsgCollection").MsgCollection.byParentMessage, e);
        let a;
        if (n[0] !== r || n[1] !== t) {
            const i = new Map;
            r.forEach((e)=>{
                if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED) {
                    i.set(e.id.toString(), e);
                }
            });
            a = new Map;
            t.forEach((e)=>{
                const e_addOptionMsgKey = e.addOptionMsgKey;
                if (e_addOptionMsgKey != null) {
                    const n = i.get(e_addOptionMsgKey);
                    if (n != null) {
                        a.set(e, n);
                    }
                }
            });
            n[0] = r;
            n[1] = t;
            n[2] = a;
        } else {
            a = n[2];
        }
        return a;
    }
    l.default = e;
}, 98);