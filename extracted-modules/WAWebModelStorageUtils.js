__d("WAWebModelStorageUtils", [
    "invariant",
    "Promise",
    "WAWeb-dexie",
    "WAWebDexieCastTypes",
    "WAWebIdb",
    "WAWebStorage",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = "model-storage";
    let c = null;
    function d() {
        if (c == null) {
            s(0, 56367);
        }
        return c;
    }
    function m() {
        return o("WAWebDexieCastTypes").dexieCastToPromise(r("WAWeb-dexie").exists(u));
    }
    function p(e) {
        const t = new (r("WAWebIdb"))(u, {
            packColumns: e.packColumns
        });
        c = new (o("WAWebStorage")).Storage(t, e);
    }
    function _() {
        if (c == null) {
            return (e || (e = n("Promise"))).reject(r("err")("[model-storage] Storage should be created first before being destroyed"));
        }
        return c.purge().then(()=>{
            c = null;
        }).catch((e)=>{
            c = null;
            throw e;
        });
    }
    l.DATABASE_NAME = u;
    l.getStorage = d;
    l.storageExists = m;
    l.createStorage = p;
    l.destroyStorage = _;
}, 98);