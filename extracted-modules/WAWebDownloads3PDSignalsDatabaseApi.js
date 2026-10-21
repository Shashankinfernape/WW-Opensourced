__d("WAWebDownloads3PDSignalsDatabaseApi", [
    "WATimeUtils",
    "WAWebSchemaDownload3PDSignals",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 30;
    const s = 30;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaDownload3PDSignals").getDownload3PDSignalsTable().createOrReplace(e);
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebSchemaDownload3PDSignals").getDownload3PDSignalsTable().all();
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = e;
            const n = o("WATimeUtils").unixTimeMs() - t * o("WATimeUtils").DAY_MILLISECONDS;
            return o("WAWebSchemaDownload3PDSignals").getDownload3PDSignalsTable().greaterThan([
                "timestamp"
            ], n);
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WATimeUtils").unixTimeMs() - s * o("WATimeUtils").DAY_MILLISECONDS;
            const t = yield o("WAWebSchemaDownload3PDSignals").getDownload3PDSignalsTable().lessThan([
                "timestamp"
            ], e);
            if (t.length !== 0) {
                yield o("WAWebSchemaDownload3PDSignals").getDownload3PDSignalsTable().bulkRemove(t.map((e)=>e.id));
            }
        });
        return g.apply(this, arguments);
    }
    l.addOrEdit3PDSignal = u;
    l.getAll3PDSignals = d;
    l.getRecent3PDSignals = p;
    l.cleanup3PDSignalsTable = f;
}, 98);