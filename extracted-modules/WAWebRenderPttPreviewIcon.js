__d("WAWebRenderPttPreviewIcon", [
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconWdsIcEphemeral.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const { msg, options } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getAck,
                o("WAWebMsgGetters").getIsViewOnce
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msg.id, i);
        const u = l[0];
        const c = l[1];
        if (c) {
            let d;
            if (t[1] !== msg || t[2] !== options.viewOnceStatic) {
                d = options.viewOnceStatic === true || !o("WAWebViewOnceState").isViewed(msg.safe()) ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                    width: 20,
                    height: 20,
                    testid: "wds-ic-view-once"
                }) : s.jsx(r("WDSIconWdsIcEphemeral.react"), {
                    width: 20,
                    height: 20,
                    testid: "view-once-opened-icon"
                });
                t[1] = msg;
                t[2] = options.viewOnceStatic;
                t[3] = d;
            } else {
                d = t[3];
            }
            return d;
        }
        const m = u === o("WAWebAck").ACK.PLAYED ? "contentDeemphasized" : "accent";
        let p;
        if (t[4] !== m) {
            p = s.jsx(r("WDSIconIcKeyboardVoiceFilled.react"), {
                height: 20,
                width: 20,
                colorName: m,
                testid: "mic"
            });
            t[4] = m;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    l.default = u;
}, 98);