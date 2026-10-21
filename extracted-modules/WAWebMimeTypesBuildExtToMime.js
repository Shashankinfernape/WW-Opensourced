__d("WAWebMimeTypesBuildExtToMime", [
    "WATypeUtils",
    "WAWebMimeToExt"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        try {
            const t = e != null && e !== "" ? JSON.parse(e) : r("WAWebMimeToExt");
            const n = {};
            s({
                data_: t,
                extToMime: n,
                lastMimeType: "",
                mimeTypeSoFar: ""
            });
            return n;
        } catch (e) {
            return null;
        }
    }
    function s({ data_: t, extToMime: n, lastMimeType: r, mimeTypeSoFar: a }) {
        let i = t;
        if (Array.isArray(i) || o("WATypeUtils").isString(i)) {
            if (o("WATypeUtils").isString(i)) {
                i = [
                    i
                ];
            }
            for (const u of i){
                if (o("WATypeUtils").isString(u)) {
                    n[u] = a + r;
                }
            }
            return;
        }
        if (typeof i === "object") {
            for(const c in i){
                s({
                    data_: i[c],
                    extToMime: n,
                    lastMimeType: c,
                    mimeTypeSoFar: a + r
                });
            }
        }
    }
    l.default = e;
}, 98);