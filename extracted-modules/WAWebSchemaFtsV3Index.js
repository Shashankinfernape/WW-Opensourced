__d("WAWebSchemaFtsV3Index", [
    "WAFtsV3IndexEntry",
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addArrayIndex, addAutoIncrementingPrimaryKey, addColumn, addIndex } = e;
    const m = "fts-v3-index";
    function p() {
        o("WAWebFtsStorageUtils").getStorage().add(m).version(o("WAWebFtsStorageVersions").ftsV3IndexCreateTable(), [
            addAutoIncrementingPrimaryKey("ftsRowId"),
            addColumn("id"),
            addIndex("id"),
            addColumn("chatId"),
            addIndex("chatId"),
            addColumn("timestamp"),
            addColumn("prefixes"),
            addArrayIndex("prefixes")
        ]).view(function(e) {
            if (e) {
                return o("WAFtsV3IndexEntry").buildDBEntry(e.ftsRowId, e.id, e.chatId, e.timestamp, e.prefixes);
            }
            return null;
        });
    }
    function _() {
        return o("WAWebFtsStorageUtils").getStorage().table(m);
    }
    l.addTable = p;
    l.getTable = _;
}, 98);