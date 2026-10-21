__d("WAWebWorkerStorageUtils", [
    "invariant",
    "Promise",
    "WAWebIdb",
    "WAWebStorage",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = "worker-storage";
    let c = null;
    function d() {
        const e = new (r("WAWebIdb"))(u);
        c = new (o("WAWebStorage")).Storage(e);
    }
    function m() {
        if (c == null) {
            s(0, 56324);
        }
        return c;
    }
    function p() {
        if (c == null) {
            return (e || (e = n("Promise"))).reject(r("err")("[worker-storage] Storage should be created first before being destroyed"));
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
    l.getStorage = m;
    l.destroyStorage = p;
}, 98);