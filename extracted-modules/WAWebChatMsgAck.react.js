__d("WAWebChatMsgAck.react", [
    "WAWebAck",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WDSIconIcSchedule.react",
    "WDSIconWdsIcDelivered.react",
    "WDSIconWdsIcRead.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    const d = {
        ack: {
            display: "x78zum5",
            flex: "x1okw0bk",
            color: "xhslqc4",
            width: "x1xp8n7a",
            alignSelf: "xamitd3",
            justifyContent: "xl56j7k",
            $$css: true
        },
        ackBlue: {
            color: "x1rv0e52",
            $$css: true
        },
        marginEnd2: {
            marginInlineEnd: "x16q7b9a",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(10);
        const { associatedMessages, msg } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getAck,
                o("WAWebMsgGetters").getType
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(msg.id, l);
        const c = s[0];
        const m = s[1];
        const p = c ?? o("WAWebAck").ACK.CLOCK;
        const _ = o("WAWebMessageAssociationUIUtils").getLowestAckState(p, m, associatedMessages);
        let f;
        let g;
        if (_ < o("WAWebAck").ACK.SENT) {
            let h;
            if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
                h = u.jsx(r("WDSIconIcSchedule.react"), {
                    height: 16,
                    testid: "ic-schedule",
                    width: 16
                });
                n[1] = h;
            } else {
                h = n[1];
            }
            f = h;
        } else if (_ === o("WAWebAck").ACK.SENT) {
            let y;
            if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                y = u.jsx(r("WDSIconWdsIcDelivered.react"), {
                    height: 18,
                    testid: "wds-ic-delivered",
                    width: 18
                });
                n[2] = y;
            } else {
                y = n[2];
            }
            f = y;
        } else if (_ === o("WAWebAck").ACK.RECEIVED) {
            let C;
            if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
                C = u.jsx(r("WDSIconWdsIcRead.react"), {
                    height: 18,
                    testid: "wds-ic-read",
                    width: 18
                });
                n[3] = C;
            } else {
                C = n[3];
            }
            f = C;
        } else {
            let b;
            if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
                b = u.jsx(r("WDSIconWdsIcRead.react"), {
                    height: 18,
                    testid: "wds-ic-read",
                    width: 18
                });
                n[4] = b;
            } else {
                b = n[4];
            }
            f = b;
            g = d.ackBlue;
        }
        let v;
        if (n[5] !== g) {
            v = (e || (e = r("stylex"))).props(d.ack, g, d.marginEnd2);
            n[5] = g;
            n[6] = v;
        } else {
            v = n[6];
        }
        let S;
        if (n[7] !== f || n[8] !== v) {
            S = <div {...babelHelpers.extends({}, v, {
                children: f
            })}/>;
            n[7] = f;
            n[8] = v;
            n[9] = S;
        } else {
            S = n[9];
        }
        return S;
    }
    l.default = m;
}, 98);