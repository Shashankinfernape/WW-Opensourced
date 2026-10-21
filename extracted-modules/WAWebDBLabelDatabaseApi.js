__d("WAWebDBLabelDatabaseApi", [
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaLabel").getLabelTable().all();
            if (e.length === 0) {
                return 1;
            }
            const t = Math.max(...e.map(({ id })=>parseInt(id, 10)));
            if (!Number.isInteger(t)) {
                throw r("err")(`getNextLabelId: Invalid label id ${t}`);
            }
            return t + 1;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaLabel").getLabelTable().createOrMerge(e.id, e);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaLabel").getLabelTable().remove(e);
        });
        return m.apply(this, arguments);
    }
    l.getNextLabelId = e;
    l.addOrEditLabel = u;
    l.removeLabel = d;
}, 98);