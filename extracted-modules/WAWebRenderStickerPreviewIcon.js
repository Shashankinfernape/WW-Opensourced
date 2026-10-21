__d("WAWebRenderStickerPreviewIcon", [
    "WAWebABProps",
    "WDSIconWdsIcSticker.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        if (o("WAWebABProps").getABPropConfigValue("enable_chat_list_sticker_emojis")) {
            const a = e.msg.emojis?.[0];
            if (a != null && a !== "") {
                let i;
                if (t[0] !== a) {
                    i = <span data-testid="status-sticker">{a}</span>;
                    t[0] = a;
                    t[1] = i;
                } else {
                    i = t[1];
                }
                return i;
            }
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = s.jsx(r("WDSIconWdsIcSticker.react"), {
                height: 20,
                width: 16,
                testid: "status-sticker"
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = u;
}, 98);