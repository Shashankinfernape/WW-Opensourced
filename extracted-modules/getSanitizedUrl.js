__d("getSanitizedUrl", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "stp",
        "cstp",
        "ctp",
        "se",
        "cb2",
        "cb"
    ];
    function l(t) {
        try {
            const n = new URL(t);
            const r = new URLSearchParams;
            for (const o of e){
                const a = n.searchParams.get(o);
                if (a != null) {
                    r.set(o, a);
                }
            }
            const i = r.toString();
            return n.origin + n.pathname + (i ? `?${i}` : "");
        } catch (e) {
            return "";
        }
    }
    i.default = l;
}, 66);