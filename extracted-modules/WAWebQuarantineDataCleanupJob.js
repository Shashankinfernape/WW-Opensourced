__d("WAWebQuarantineDataCleanupJob", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebQuarantineDataBatchProcessor",
    "WAWebQuarantineDataStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 60;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "cleanExpiredQuarantineDataJob: Starting cleanup"
            ])));
            const t = Date.now() - c * o("WATimeUtils").DAY_SECONDS * 1000;
            const r = yield o("WAWebQuarantineDataBatchProcessor").processQuarantineDataInBatches({
                fetchBatch: function(n) {
                    return o("WAWebQuarantineDataStore").getQuarantineDataBatchOlderThan(t, n);
                },
                processBatch: function(t) {
                    return (u || (u = n("Promise"))).resolve({
                        processedIds: t.map((e)=>e.msgId),
                        failedIds: []
                    });
                },
                jobName: "cleanExpiredQuarantineDataJob"
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "cleanExpiredQuarantineDataJob: Deleted ",
                " expired records"
            ])), r);
        });
        return m.apply(this, arguments);
    }
    l.cleanExpiredQuarantineDataJob = d;
}, 98);