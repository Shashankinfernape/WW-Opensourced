__d("WAWebEstimateFtsStorageApi", [
    "Promise",
    "WAWebDbUsageApiUtils",
    "WAWebIndexedDB",
    "WAWebScanDbRowApi",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "fts-storage";
    const sampleRows = 15000;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = t === undefined ? {
                sampleRows
            } : t;
            const a_sampleRows = a.sampleRows;
            const l = Date.now();
            const c = a_sampleRows;
            const d = r("nullthrows")(r("WAWebIndexedDB"));
            const m = yield o("WAWebDbUsageApiUtils").getDatabase(d, s);
            const p = m.transaction(m.objectStoreNames, "readonly");
            let _ = 0;
            let f = 0;
            const g = function*(t) {
                const e = p.objectStore(t);
                const n = yield o("WAWebDbUsageApiUtils").promisifyRequest(e.count());
                if (n === 0) {
                    return 1;
                }
                const r = Math.min(c, n);
                f = r;
                let a = 0;
                yield o("WAWebDbUsageApiUtils").objectStoreIterator(e, function(e) {
                    a += o("WAWebScanDbRowApi").estimateSize(e, t);
                    f--;
                    return f > 0;
                });
                const i = Math.round(a * (n / (r - f)));
                _ += i;
            };
            for (const h of p.objectStoreNames){
                yield* g(h);
            }
            const y = Date.now() - l;
            return (e || (e = n("Promise"))).resolve(_);
        });
        return d.apply(this, arguments);
    }
    l.getEstimatedFTSDbSize = c;
}, 98);