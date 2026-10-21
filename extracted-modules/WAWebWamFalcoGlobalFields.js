__d("WAWebWamFalcoGlobalFields", [
    "WAWebFalcoCanonicalFieldMapping"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = {};
        for(const t in o("WAWebFalcoCanonicalFieldMapping").canonicalFieldMapping){
            const n = o("WAWebFalcoCanonicalFieldMapping").canonicalFieldMapping[t];
            const r = n();
            if (r != null) {
                e[t] = r;
            }
        }
        return e;
    }
    l.getCanonicalFieldsForFalco = e;
}, 98);