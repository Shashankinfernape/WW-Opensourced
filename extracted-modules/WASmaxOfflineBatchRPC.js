__d("WASmaxOfflineBatchRPC", [
    "WAComms",
    "WASmaxJsx",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = u(e);
            yield o("WAComms").castSmaxStanza(t);
        });
        return s.apply(this, arguments);
    }
    function u({ offlineBatchCount }) {
        const n = o("WASmaxJsx").smax("ib", null, o("WASmaxJsx").smax("offline_batch", {
            count: o("WAWap").INT(offlineBatchCount)
        }));
        return n;
    }
    l.sendBatchRPC = e;
    l.makeBatchRequest = u;
}, 98);