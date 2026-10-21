__d("WAWebStatusApiParse", [
    "$InternalEnum",
    "WAWebApiParseUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "status";
    const s = "text";
    const u = "photo";
    const c = n("$InternalEnum").Mirrored([
        "Text",
        "Media"
    ]);
    function d(e) {
        return e.length === 0 || e.length === 1 && e[0] === "";
    }
    function m(t) {
        try {
            const n = new URL(t);
            const r = n.pathname;
            if (!o("WAWebApiParseUtils").isWhatsappHost(n)) {
                return null;
            }
            const a = r.split("/");
            const i = a[0];
            const l = a[1];
            const m = babelHelpers.arrayLikeToArray(a).slice(2);
            if (!d(m) || l !== e) {
                return null;
            }
            const p = n.searchParams || new URLSearchParams(n.search);
            const _ = p.get(s);
            if (_ != null) {
                return {
                    postType: c.Text,
                    url: n.href
                };
            }
            const f = p.get(u);
            if (f != null) {
                return {
                    postType: c.Media,
                    url: n.href
                };
            }
        } catch (e) {}
        return null;
    }
    l.StatusPostType = c;
    l.parseStatusPostFeatureLink = m;
}, 98);