__d("CometSSRPreloadImageCollection", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        "'": "&#39;",
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    };
    function l(t) {
        return t.replace(/[\"&\'<>]/g, (t)=>e[t]);
    }
    const s = new Set;
    const u = new Set;
    function c(e) {
        s.add(e);
    }
    function d() {
        s.clear();
    }
    function m() {
        if (!s || s.size === 0) {
            return "";
        }
        const e = [];
        s?.forEach(function(t) {
            if (!u.has(t)) {
                e.push(`<link rel="preload" as="image" href="${l(t)}" />`);
                u.add(t);
            }
        });
        return e.join("\n");
    }
    i.addImage = c;
    i.clearImageCollection = d;
    i.imagesToHTMLLinkString = m;
}, 66);