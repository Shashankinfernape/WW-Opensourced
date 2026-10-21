__d("WAWebSchemaDataSharing3pdLid", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addAutoIncrementingPrimaryKey: n, addColumn: r, addIndex: a } = t;
        e.add("data-sharing-3pd-lid").version(o("WAWebModelStorageVersions").dataSharing3pdLidCreateTable(), [
            n("id"),
            r("lidRawString"),
            a("lidRawString"),
            r("dataSharing3pdEnabled")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);