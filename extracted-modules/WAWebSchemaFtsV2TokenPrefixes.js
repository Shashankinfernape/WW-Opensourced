__d("WAWebSchemaFtsV2TokenPrefixes", [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "fts-v2-token-prefixes";
    const s = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addArrayIndex, addColumn, addUserDefinedPrimaryKey } = s;
    function m() {
        o("WAWebFtsStorageUtils").getStorage().add(e).version(o("WAWebFtsStorageVersions").ftsV2TokenToPrefixesCreateTable(), [
            addUserDefinedPrimaryKey("token"),
            addColumn("prefixes"),
            addArrayIndex("prefixes")
        ]).delete(o("WAWebFtsStorageVersions").ftsV2DeleteTokenPrefixes());
    }
    l.addTable = m;
}, 98);