__d("WAWebRenderImagePreviewIcon", [
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WDSIconIcImage.react",
    "WDSIconWdsIcEphemeral.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
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
        const l = o("useWAWebMsgValues").useOptionalMsgValues(msg.id, i);
        if (l == null) {
            return null;
        }
        const u = l[1];
        if (u) {
            let c;
            if (t[1] !== msg || t[2] !== options.viewOnceStatic) {
                c = options.viewOnceStatic === true || !o("WAWebViewOnceState").isViewed(msg.safe()) ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                    width: 20,
                    height: 20,
                    "aria-hidden": true,
                    testid: "wds-ic-view-once"
                }) : s.jsx(r("WDSIconWdsIcEphemeral.react"), {
                    width: 20,
                    height: 20,
                    "aria-hidden": true,
                    testid: "view-once-opened-icon"
                });
                t[1] = msg;
                t[2] = options.viewOnceStatic;
                t[3] = c;
            } else {
                c = t[3];
            }
            return c;
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = s.jsx(r("WDSIconIcImage.react"), {
                width: 18,
                height: 20,
                testid: "image-refreshed"
            });
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    l.default = u;
}, 98);