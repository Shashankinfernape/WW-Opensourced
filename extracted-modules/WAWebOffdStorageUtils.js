__d("WAWebOffdStorageUtils", [
    "invariant",
    "Promise",
    "WAWebIdb",
    "WAWebStorage",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = "offd-storage";
    let c = null;
    function d() {
        const e = new (r("WAWebIdb"))(u);
        c = new (o("WAWebStorage")).Storage(e);
    }
    function m() {
        return c != null;
    }
    function p() {
        if (c == null) {
            s(0, 56317);
        }
        return c;
    }
    function _() {
        if (c == null) {
            return (e || (e = n("Promise"))).reject(r("err")("[offd-storage] Storage should be created first before being destroyed"));
        }
        return c.purge().then(()=>{
            c = null;
        }).catch((e)=>{
            c = null;
            throw e;
        });
    }
    l.DATABASE_NAME = u;
    l.createStorage = d;
    l.isStorageCreated = m;
    l.getStorage = p;
    l.destroyStorage = _;
}, 98);