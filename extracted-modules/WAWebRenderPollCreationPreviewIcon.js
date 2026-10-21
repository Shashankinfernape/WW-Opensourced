__d("WAWebRenderPollCreationPreviewIcon", [
    "WAWebPollCreationUtils",
    "WDSIconIcTrophyFilled.react",
    "WDSIconWdsIcPoll.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_msg = e.msg;
        if (e_msg.pollType === o("WAWebPollCreationUtils").PollType.QUIZ) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = s.jsx(r("WDSIconIcTrophyFilled.react"), {
                    height: 20
                });
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s.jsx(r("WDSIconWdsIcPoll.react"), {
                width: 20,
                testid: "poll-refreshed-thin",
                height: 20
            });
            t[1] = i;
        } else {
            i = t[1];
        }
        return i;
    }
    l.default = u;
}, 98);