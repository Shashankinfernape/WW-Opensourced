__d("WAWebSchemaFtsV1Index", [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addArrayIndex, addColumn, addUserDefinedPrimaryKey } = e;
    const d = "fts-v1-index";
    function m() {
        o("WAWebFtsStorageUtils").getStorage().add(d).version(o("WAWebFtsStorageVersions").ftsV1IndexCreateTable(), [
            addUserDefinedPrimaryKey("token"),
            addColumn("ids"),
            addArrayIndex("ids"),
            addColumn("prefixes"),
            addArrayIndex("prefixes")
        ]).delete(o("WAWebFtsStorageVersions").ftsV1DeleteAndDeprecate());
    }
    l.deprecateTable = m;
}, 98);