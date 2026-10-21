__d("WAWebSchemaPendingMutations", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e({ action: t, binarySyncAction: n, collection: r, id: o, index: a, operation: i, timestamp: l, version: s }) {
        return {
            id: o,
            collection: r,
            index: a,
            binarySyncAction: n,
            version: s,
            operation: i,
            timestamp: l,
            action: t
        };
    }
    function s() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addAutoIncrementingPrimaryKey: n, addColumn: r, addIndex: a } = t;
        e.add("pending-mutations").version(o("WAWebModelStorageVersions").pendingMutationsCreateTable(), [
            n("id"),
            r("collection"),
            r("index"),
            a("index"),
            r("timestamp"),
            a("collection"),
            r("version"),
            r("operation"),
            r("binarySyncAction")
        ]).version(o("WAWebModelStorageVersions").addActionToPendingMutations(), [
            r("action"),
            a("action")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table("pending-mutations");
    }
    l.convertToPendingMutationFromRow = e;
    l.addTable = s;
    l.getPendingMutationsTable = u;
}, 98);