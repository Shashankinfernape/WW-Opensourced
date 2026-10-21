__d("WAWebLruMediaStorageUtils", [
    "invariant",
    "WAWebIdb",
    "WAWebStorage",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l, s) {
    const e = "lru-media-storage-idb";
    let u = null;
    function c() {
        const t = new (r("WAWebIdb"))(e);
        u = new (o("WAWebStorage")).Storage(t);
    }
    function d() {
        if (u == null) {
            s(0, 56300);
        }
        return u;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (u == null) {
                throw r("err")("[lru-media-storage-idb] Storage should be created first before being destroyed");
            }
            try {
                yield u.purge();
            } finally{
                u = null;
            }
        });
        return p.apply(this, arguments);
    }
    c();
    l.getStorage = d;
    l.destroyStorage = m;
}, 98);