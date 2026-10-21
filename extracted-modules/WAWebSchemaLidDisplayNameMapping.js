__d("WAWebSchemaLidDisplayNameMapping", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("lid-display-name-mapping").version(o("WAWebModelStorageVersions").lidDisplayNameMappingCreateTable(), [
            r("id"),
            n("displayName")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);