__d("WAWebDBBulkPersistContact", [
    "WABatcher",
    "WAWebLidAwareContactsDB",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WABatcher").batch({
        delayMs: 3000
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield c(e);
            return e.map((e)=>{});
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function s(t, n) {
        return e(babelHelpers.extends({}, n, {
            id: t.toJid()
        }));
    }
    function u(e) {
        return Array.from(e.reduce((e, t)=>{
            e.set(t.id, babelHelpers.extends({}, e.get(t.id) ?? {}, t));
            return e;
        }, new Map).values());
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = u(e);
            yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(t, "DBBulkPersistContact.bulkPersistContactChanges");
        });
        return d.apply(this, arguments);
    }
    l.persistContactUpdateBatched = s;
}, 98);