__d("BootloaderResource", [
    "ExecutionEnvironment",
    "gkx",
    "suspendOrThrowIfUsedInSSR"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {};
    const c = {};
    function d(e) {
        e.load();
    }
    function m(t) {
        const n = t.getModuleIfRequireable();
        const o = t.getModuleId();
        if (r("gkx")("18743") && c[o] != null) {
            throw c[o];
        }
        if (n == null) {
            if (!(e || (e = r("ExecutionEnvironment"))).isInBrowser && !t.isAvailableInSSR_DO_NOT_USE()) {
                (s || (s = r("suspendOrThrowIfUsedInSSR")))("Loading of bootloaded and T3 components is disabled during SSR");
            }
            if (!u[o]) {
                const a = u[o] = t.load();
                a.catch((e)=>{
                    c[o] = e;
                }).finally(()=>{
                    delete u[o];
                });
            }
            throw u[o];
        }
        return n;
    }
    l.preload = d;
    l.read = m;
}, 98);