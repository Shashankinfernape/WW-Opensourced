__d("WAWebDBCustomerDataDatabaseApi", [
    "WAWebSchemaCustomerData",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaCustomerData").getCustomerDataTable().createOrReplace(e);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaCustomerData").getCustomerDataTable().equals([
                "chatJid"
            ], e);
            if (t.length > 0) {
                return t[0];
            }
            return null;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaCustomerData").getCustomerDataTable().bulkGet(e);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaCustomerData").getCustomerDataTable().bulkRemoveByIndex([
                "chatJid"
            ], [
                e
            ]);
        });
        return _.apply(this, arguments);
    }
    l.addOrEditCustomerData = e;
    l.getCustomerDataByChatJid = u;
    l.getCustomerDataByChatJids = d;
    l.removeCustomerDataByChatJid = p;
}, 98);