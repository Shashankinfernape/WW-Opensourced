__d("WAWebDeleteAllCacheStorage", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    let e;
    function l() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const window_caches = window.caches;
            if (window_caches != null) {
                const r = yield window_caches.keys();
                yield (e || (e = n("Promise"))).all(r.map((e)=>window_caches.delete(e)));
            }
        });
        return s.apply(this, arguments);
    }
    i.default = l;
}, 66);