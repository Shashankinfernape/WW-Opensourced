__d("WAWebGetWebpMetadata", [
    "WALogger",
    "WAWebWebp",
    "WAWebWebpMetadata"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const n = new Uint8Array(t);
        const r = o("WAWebWebp").findWebpMetadata(n);
        if (!r) {
            return {};
        }
        const { position: a, size: i } = r;
        const l = new TextDecoder;
        const s = n.slice(a, a + i);
        const u = l.decode(s);
        try {
            const c = JSON.parse(u);
            return c;
        } catch (t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sticker emoji parse failed, returning {}"
            ])));
            return {};
        }
    }
    function u(e) {
        const t = s(e);
        const n = o("WAWebWebpMetadata").toWebpMetadata(t);
        return n;
    }
    l.getWebpMetadata = u;
}, 98);