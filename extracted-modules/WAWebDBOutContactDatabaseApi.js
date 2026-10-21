__d("WAWebDBOutContactDatabaseApi", [
    "WAWebSchemaOutContact",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebSchemaOutContact").getOutContactTable().all();
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaOutContact").getOutContactTable().bulkCreateOrReplace(e);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaOutContact").getOutContactTable().bulkRemove(e);
        });
        return m.apply(this, arguments);
    }
    l.getAllOutContacts = e;
    l.putOutContactBatch = u;
    l.removeOutContactBatch = d;
}, 98);