__d("WAWebEmojiMutatorComponent.react", [
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebMessageLargeEmoji.react",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(13);
        const { ellipsifiable, emoji, selectable, size, xstyle } = e;
        o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled");
        o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
        let c;
        if (t[0] !== emoji) {
            c = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations(o("WAWebEmoji").EmojiUtil.normalizeEmoji(emoji) ?? emoji);
            t[0] = emoji;
            t[1] = c;
        } else {
            c = t[1];
        }
        const m = c;
        if (size === "xlarge") {
            let p;
            if (t[2] !== m || t[3] !== ellipsifiable || t[4] !== selectable || t[5] !== xstyle) {
                p = s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
                    ellipsifiable,
                    emoji: m,
                    xstyle,
                    size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE,
                    element: "span",
                    selectable
                });
                t[2] = m;
                t[3] = ellipsifiable;
                t[4] = selectable;
                t[5] = xstyle;
                t[6] = p;
            } else {
                p = t[6];
            }
            return p;
        }
        let _;
        if (t[7] !== m || t[8] !== ellipsifiable || t[9] !== selectable || t[10] !== size || t[11] !== xstyle) {
            _ = s.jsx(r("WAWebEmoji.react"), {
                emoji: m,
                xstyle,
                ellipsifiable,
                selectable,
                size
            });
            t[7] = m;
            t[8] = ellipsifiable;
            t[9] = selectable;
            t[10] = size;
            t[11] = xstyle;
            t[12] = _;
        } else {
            _ = t[12];
        }
        return _;
    }
    l.default = u;
}, 98);