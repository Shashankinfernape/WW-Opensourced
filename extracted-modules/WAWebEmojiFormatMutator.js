__d("WAWebEmojiFormatMutator", [
    "WAUnicodeUtils",
    "WAWebEmoji",
    "WAWebEmojiMutatorComponent.react",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, [e], o) {
            const { ellipsifiable, emojiXstyle, selectable } = o;
            const u = selectable === undefined ? false : selectable;
            const o_size = o.size;
            return s.jsx(r("WAWebEmojiMutatorComponent.react"), {
                ellipsifiable,
                emoji: e,
                size: o_size,
                selectable: u,
                xstyle: emojiXstyle
            });
        };
        t.match = function(t, n, a) {
            const e = a != null && a !== 0 ? a : t.length;
            const i = o("WAUnicodeUtils").firstNCodepoints(t, e);
            return r("WAWebExtractRangesUsingRegex")(i, o("WAWebEmoji").EmojiUtil.emojiRegex(), 0, c);
        };
        return t;
    })(r("WAWebFormatMutator"));
    u.ellipsifiable = true;
    u.compatibility = true;
    function c(e, t) {
        if (o("WAWebEmoji").EmojiUtil.getGlyphId(e[0])) {
            return e;
        }
        return null;
    }
    l.default = u;
}, 98);