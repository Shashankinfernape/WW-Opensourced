__d("WAWebUseBotMessageWithAnimation", [
    "WAWebBotTypes",
    "WAWebCmd",
    "WAWebMsgGetters",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef, useState } = s;
    const m = 50;
    const p = 100;
    const _ = 5;
    const f = 1;
    function useG(e) {
        const t = o("react-compiler-runtime").c(11);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [];
            t[0] = n;
        } else {
            n = t[0];
        }
        const rRef = useRef(n);
        const a = useState(0);
        const i = a[0];
        const l = a[1];
        let s;
        if (t[1] !== e) {
            s = o("WAWebMsgGetters").getIsMetaBotResponse(e.unsafe()) && e.activeBotMsgStreamingInProgress === true;
            t[1] = e;
            t[2] = s;
        } else {
            s = t[2];
        }
        const g = s;
        let e_body = e.body;
        if (g) {
            let C;
            if (t[3] !== e.body || t[4] !== e.lastBotEditBodyLength) {
                C = e.lastBotEditBodyLength != null ? e.body.slice(0, e.lastBotEditBodyLength) : e.body;
                t[3] = e.body;
                t[4] = e.lastBotEditBodyLength;
                t[5] = C;
            } else {
                C = t[5];
            }
            e_body = C;
        }
        const b = useState(e_body);
        const v = b[0];
        const S = b[1];
        const RRef = useRef(0);
        let L;
        let E;
        if (t[6] !== i || t[7] !== e || t[8] !== g) {
            L = function() {
                if (g) {
                    const n = e.body.slice(e.lastBotEditBodyLength ?? 0).trim().split(" ");
                    if (e.lastBotEditBodyLength != null && RRef.current !== e.lastBotEditBodyLength) {
                        RRef.current = e.lastBotEditBodyLength;
                        rRef.current = rRef.current.concat(n).filter(h);
                    }
                    if (e.lastBotEditBodyLength != null && i < rRef.current.length) {
                        const a = self.setTimeout(function() {
                            S(function(t) {
                                const n = e?.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST;
                                const a = n ? i + 1 : i;
                                const l = n ? rRef.current.length : i + f;
                                const s = rRef.current.slice(a, l).join(" ");
                                return `${t.trim()} ${s.trim()}`;
                            });
                            l(function(t) {
                                if (e?.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST) {
                                    return rRef.current.length - 1;
                                }
                                return t + f;
                            });
                        }, m);
                        if (i % _) {
                            o("WAWebCmd").Cmd.scrollChatHeight(p);
                        }
                        return function() {
                            return self.clearTimeout(a);
                        };
                    } else {
                        if (e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST && e.activeBotMsgStreamingInProgress === true) {
                            e.unsafe().activeBotMsgStreamingInProgress = false;
                        }
                    }
                }
            };
            E = [
                i,
                g,
                e
            ];
            t[6] = i;
            t[7] = e;
            t[8] = g;
            t[9] = L;
            t[10] = E;
        } else {
            L = t[9];
            E = t[10];
        }
        useEffect(L, E);
        return v;
    }
    function h(e) {
        return !r("isStringNullOrEmpty")(e) && e !== " ";
    }
    l.useBotMessageWithAnimation = useG;
}, 98);