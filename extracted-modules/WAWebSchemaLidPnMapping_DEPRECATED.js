__d("WAWebSchemaLidPnMapping_DEPRECATED", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a, removeColumn: i } = t;
        e.add("lid-pn-mapping").version(o("WAWebModelStorageVersions").lidPnMappingCreateTable(), [
            a("id"),
            n("phoneNumber"),
            r("phoneNumber"),
            n("createdAtTimestamp"),
            n("displayName")
        ]).version(o("WAWebModelStorageVersions").lidPnMappingRemoveDisplayName(), [
            i("displayName")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);