__d("WAWebFtsStorageUtils", [
    "invariant",
    "Promise",
    "WAWebFtsStorageConsts",
    "WAWebIdb",
    "WAWebStorage",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u = null;
    function c() {
        const e = new (r("WAWebIdb"))(o("WAWebFtsStorageConsts").DATABASE_NAME);
        u = new (o("WAWebStorage")).Storage(e);
    }
    function d() {
        if (u == null) {
            s(0, 56265);
        }
        return u;
    }
    function m() {
        if (u == null) {
            return (e || (e = n("Promise"))).reject(r("err")("[fts-storage] Storage should be created first before being destroyed"));
        }
        return u.purge().then(()=>{
            u = null;
        }).catch((e)=>{
            u = null;
            throw e;
        });
    }
    l.createStorage = c;
    l.getStorage = d;
    l.destroyStorage = m;
}, 98);