__d("WAWebChatMsgSymbol.react", [
    "WAWebFrontendMsgGetters",
    "WAWebMessagePluginRenderPreviewIcon",
    "WAWebMsgGetters",
    "WAWebSystemMessagePluginRenderPreviewIcon",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(13);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getType,
                o("WAWebMsgGetters").getSubtype,
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useOptionalMsgValues(e_msg.id, a);
        const l = i != null ? i[0] : e_msg.type;
        const u = i != null ? i[1] : e_msg.subtype;
        const c = i != null ? i[2] : e_msg.mediaData;
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                width: 20,
                height: 20,
                testid: "message-fail"
            });
            t[1] = d;
        } else {
            d = t[1];
        }
        let m = d;
        if (e.overrideIcon != null) {
            m = e.overrideIcon;
        } else {
            let p;
            if (t[2] !== e_msg) {
                p = o("WAWebSystemMessagePluginRenderPreviewIcon").renderPreviewIcon({
                    msg: e_msg
                });
                t[2] = e_msg;
                t[3] = p;
            } else {
                p = t[3];
            }
            const _ = p;
            if (_ != null) {
                m = _;
            } else {
                const parsedVcards = c?.parsedVcards;
                let g;
                if (t[4] !== e_msg || t[5] !== e.viewOnceStatic || t[6] !== u || t[7] !== parsedVcards || t[8] !== l) {
                    g = o("WAWebMessagePluginRenderPreviewIcon").renderPreviewIcon(l, u, {
                        msg: e_msg,
                        options: {
                            parsedVcards,
                            viewOnceStatic: e.viewOnceStatic
                        }
                    });
                    t[4] = e_msg;
                    t[5] = e.viewOnceStatic;
                    t[6] = u;
                    t[7] = parsedVcards;
                    t[8] = l;
                    t[9] = g;
                } else {
                    g = t[9];
                }
                const h = g;
                if (h != null) {
                    m = h;
                }
            }
        }
        let y;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 xhslqc4 x16dsc37 x1qx5ct2 x1p8j9ns"
            };
            t[10] = y;
        } else {
            y = t[10];
        }
        let C;
        if (t[11] !== m) {
            C = <div {...babelHelpers.extends({}, y, {
                "data-testid": "chat-msg-symbol",
                children: m
            })}/>;
            t[11] = m;
            t[12] = C;
        } else {
            C = t[12];
        }
        return C;
    }
    l.default = u;
}, 98);