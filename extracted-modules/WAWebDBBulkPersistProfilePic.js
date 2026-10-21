__d("WAWebDBBulkPersistProfilePic", [
    "WABatcher",
    "WAWebSchemaProfilePicThumb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WABatcher").batch({
        delayMs: 3000
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield u(e);
            return [];
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function s(t) {
        return e(t);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(e.reduce((acc, item)=>{
                acc.set(item.id, item);
                return acc;
            }, new Map).values());
            yield o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().bulkCreateOrMerge(t);
        });
        return c.apply(this, arguments);
    }
    l.persistProfilePicBatched = s;
    l.bulkPersistProfilePicChanges = u;
}, 98);