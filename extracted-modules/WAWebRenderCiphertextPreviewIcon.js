__d("WAWebRenderCiphertextPreviewIcon", [
    "WAWebMsgGetters",
    "WDSIconIcSchedule.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getIsBotFutureproofPlaceholder,
                o("WAWebMsgGetters").getIsViewOncePlaceholder
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msg.id, a);
        const l = i[0];
        const u = i[1];
        if (l) {
            let c;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                c = s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                    testid: "unknown",
                    width: 20,
                    height: 20,
                    "aria-hidden": true
                });
                t[1] = c;
            } else {
                c = t[1];
            }
            return c;
        } else if (u) {
            let d;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                d = s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                    width: 20,
                    height: 20,
                    "aria-hidden": true,
                    testid: "wds-ic-view-once"
                });
                t[2] = d;
            } else {
                d = t[2];
            }
            return d;
        }
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s.jsx(r("WDSIconIcSchedule.react"), {
                width: 20,
                height: 20,
                "aria-hidden": true,
                testid: "ic-schedule"
            });
            t[3] = m;
        } else {
            m = t[3];
        }
        return m;
    }
    l.default = u;
}, 98);