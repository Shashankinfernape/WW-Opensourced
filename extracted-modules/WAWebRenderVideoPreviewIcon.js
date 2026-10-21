__d("WAWebRenderVideoPreviewIcon", [
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WDSIconIcGifBox.react",
    "WDSIconIcVideocam.react",
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
                o("WAWebMsgGetters").getIsViewOnce,
                o("WAWebMsgGetters").getIsGif
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
        const c = l[2];
        if (u) {
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
        } else if (c) {
            let m;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                m = s.jsx(r("WDSIconIcGifBox.react"), {
                    height: 20,
                    testid: "gif-preview-icon"
                });
                t[4] = m;
            } else {
                m = t[4];
            }
            return m;
        }
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = s.jsx(r("WDSIconIcVideocam.react"), {
                height: 20,
                testid: "video-call-refreshed"
            });
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    l.default = u;
}, 98);