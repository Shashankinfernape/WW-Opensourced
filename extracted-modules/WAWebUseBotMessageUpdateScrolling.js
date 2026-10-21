__d("WAWebUseBotMessageUpdateScrolling", [
    "WAWebBotFrontendUtils",
    "WAWebCmd",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let r;
            n = [
                (r = o("WAWebMsgGetters")).getLastBotEditBodyLength,
                r.getBody,
                r.getRichResponse,
                r.getType
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, n);
        const i = a[0];
        const l = a[1];
        const richResponse = a[2];
        const c = a[3];
        let d;
        if (t[1] !== l || t[2] !== richResponse || t[3] !== c) {
            d = o("WAWebBotFrontendUtils").getBotMsgBodyLengthFor({
                body: l,
                richResponse,
                type: c
            });
            t[1] = l;
            t[2] = richResponse;
            t[3] = c;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = d;
        let p;
        let _;
        if (t[5] !== m || t[6] !== i) {
            p = function() {
                if (!(m == null || i == null)) {
                    if (m !== i) {
                        o("WAWebCmd").Cmd.scrollChatToBottom();
                    }
                }
            };
            _ = [
                i,
                m
            ];
            t[5] = m;
            t[6] = i;
            t[7] = p;
            t[8] = _;
        } else {
            p = t[7];
            _ = t[8];
        }
        useEffect(p, _);
    }
    l.useBotMessageUpdateScrolling = u;
}, 98);