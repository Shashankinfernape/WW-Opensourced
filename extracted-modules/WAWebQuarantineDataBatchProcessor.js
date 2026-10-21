__d("WAWebQuarantineDataBatchProcessor", [
    "WALogger",
    "WAWebQuarantineDataStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { fetchBatch, jobName, processBatch } = t;
            const s = t.batchSize ?? 200;
            const u = t.maxCount ?? 1000;
            const d = [];
            const m = new Set;
            const p = new Set;
            for(var _ = u, f = 0; _ > 0;){
                const g = s + p.size;
                const h = yield fetchBatch(g);
                if (h.length === 0) {
                    break;
                }
                const y = h.filter((e)=>!p.has(e.msgId));
                if (y.length === 0) {
                    break;
                }
                const C = y.slice(0, _);
                const b = yield processBatch(C);
                b.failedIds.forEach((e)=>m.add(e));
                c(b, p);
                if (b.processedIds.length > 0) {
                    yield o("WAWebQuarantineDataStore").bulkDeleteQuarantineData(b.processedIds);
                    d.push(...b.processedIds);
                }
                _ -= C.length;
                f++;
            }
            if (f > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Completed ",
                    " batches - total processed ",
                    ", total failed ",
                    ""
                ])), jobName, f, d.length, m.size);
            }
            return d.length;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        [].concat(e.failedIds, e.retainedIds ?? []).forEach((e)=>t.add(e));
    }
    l.processQuarantineDataInBatches = s;
}, 98);