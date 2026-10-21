__d("WAWebGetEmojiPathExperimental", [
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = `${window.location.origin}`;
    const s = r("gkx")("26258") ? "https://web.whatsapp.com/emoji/v1" : `${e}/emoji/v1`;
    const u = 16;
    const c = 0;
    const d = 2;
    function m(e, t, n) {
        return p(e, n, t, "png");
    }
    function p(e, t, n, r) {
        const o = _(e);
        return g({
            emojiType: n,
            identifier: `${o}.${r}`,
            packaging: "single",
            size: t
        });
    }
    function _(e) {
        return Array.from(e, function(e) {
            return e.codePointAt(0).toString(16).padStart(6, "0");
        }).join("_");
    }
    function f(e, t, n, r) {
        return g({
            emojiType: e,
            identifier: `${t}.${r}`,
            packaging: "sprite",
            size: n
        });
    }
    function g({ emojiType, identifier, packaging, size }) {
        return [
            s,
            u,
            c,
            d,
            packaging,
            emojiType.toLowerCase().slice(0, 1),
            size,
            identifier
        ].join("/");
    }
    l.getGlyphExperimentalPath = m;
    l.getEmojiSpritesExperimentalPath = f;
}, 98);