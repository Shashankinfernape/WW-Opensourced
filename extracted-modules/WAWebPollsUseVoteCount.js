__d("WAWebPollsUseVoteCount", [
    "WAWebAddonHydrationUtils",
    "WAWebMsgType",
    "WAWebPollsPollVoteCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        if (t[0] !== e) {
            n = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                e
            ]);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const i = n[0];
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                "add",
                "remove",
                "reset"
            ];
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== i) {
            u = function() {
                return i.getVoteCount();
            };
            t[3] = i;
            t[4] = u;
        } else {
            u = t[4];
        }
        const c = r("useWAWebEventTargetValue")(i, l, u);
        let d;
        let m;
        if (t[5] !== e) {
            d = function() {
                o("WAWebAddonHydrationUtils").hydrateAddons({
                    ids: [
                        e
                    ],
                    hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE
                });
            };
            m = [
                e
            ];
            t[5] = e;
            t[6] = d;
            t[7] = m;
        } else {
            d = t[6];
            m = t[7];
        }
        useEffect(d, m);
        return c;
    }
    l.useVoteCount = u;
}, 98);