__d("WAWebDBContactManagerMetadataDatabaseApi", [
    "WAJids",
    "WAWebSchemaContactManagerMetadata",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaContactManagerMetadata").getContactManagerMetadataTable().createOrReplace(y(e));
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaContactManagerMetadata").getContactManagerMetadataTable().bulkCreateOrReplace(e.map(y));
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaContactManagerMetadata").getContactManagerMetadataTable().bulkRemove(e.map(h));
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaContactManagerMetadata").getContactManagerMetadataTable().get(h(e));
            if (t == null) {
                return null;
            }
            return y(t);
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return (yield o("WAWebSchemaContactManagerMetadata").getContactManagerMetadataTable().all()).map(y);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        const t = o("WAJids").interpretAndValidateJid(e);
        if (t.jidType !== "lidUser") {
            throw r("err")("Contact Manager metadata requires a LID JID");
        }
        return t.userJid;
    }
    function y(e) {
        return babelHelpers.extends({}, e, {
            id: h(e.id)
        });
    }
    l.addOrEditContactManagerMetadata = e;
    l.bulkAddOrEditContactManagerMetadata = u;
    l.bulkRemoveContactManagerMetadata = d;
    l.getContactManagerMetadata = p;
    l.getAllContactManagerMetadata = f;
    l.parseContactManagerMetadataJid = h;
}, 98);