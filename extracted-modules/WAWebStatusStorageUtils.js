__d("WAWebStatusStorageUtils", [
    "invariant",
    "WAWebIdb",
    "WAWebStorage"
], function(t, n, r, o, a, i, l, s) {
    const e = "status-storage";
    let u = null;
    function c() {
        const t = new (r("WAWebIdb"))(e);
        u = new (o("WAWebStorage")).Storage(t);
    }
    function d() {
        if (u == null) {
            s(0, 92225);
        }
        return u;
    }
    l.createStorage = c;
    l.getStorage = d;
}, 98);