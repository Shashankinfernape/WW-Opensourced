__d("useWAWebPollEndTime", [
    "WAWebCastToPollCreationMsg",
    "WAWebClock",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useReducer } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getPollEndTime
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, r("WAWebCastToPollCreationMsg"), n);
        const pollEndTime = a[0];
        const l = useReducer(m, 0);
        const s = l[1];
        const isPollEnded = pollEndTime != null && pollEndTime <= o("WAWebClock").Clock.getServerTimeMs();
        let p;
        let _;
        if (t[1] !== isPollEnded || t[2] !== pollEndTime) {
            p = function() {
                if (!(isPollEnded || pollEndTime == null)) {
                    const e = pollEndTime - o("WAWebClock").Clock.getServerTimeMs();
                    if (e <= 0) {
                        s();
                        return;
                    }
                    const t = self.setTimeout(function() {
                        s();
                    }, e);
                    return function() {
                        self.clearTimeout(t);
                    };
                }
            };
            _ = [
                pollEndTime,
                isPollEnded
            ];
            t[1] = isPollEnded;
            t[2] = pollEndTime;
            t[3] = p;
            t[4] = _;
        } else {
            p = t[3];
            _ = t[4];
        }
        useEffect(p, _);
        let f;
        if (t[5] !== isPollEnded || t[6] !== pollEndTime) {
            f = {
                isPollEnded,
                pollEndTime
            };
            t[5] = isPollEnded;
            t[6] = pollEndTime;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    function m(e) {
        return e + 1;
    }
    l.useWAWebPollEndTime = d;
}, 98);