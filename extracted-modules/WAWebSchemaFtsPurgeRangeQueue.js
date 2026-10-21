__d("WAWebSchemaFtsPurgeRangeQueue", [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn, addCompositePrimaryKey } = e;
    const c = "fts-purge-range-queue";
    function d() {
        o("WAWebFtsStorageUtils").getStorage().add(c).version(o("WAWebFtsStorageVersions").purgeRangeQueueCreateTable(), [
            addCompositePrimaryKey([
                "chatId",
                "tsOfLastMessage",
                "startRowId",
                "endRowId"
            ]),
            addColumn("offset")
        ]).view(function(e) {
            return e;
        });
    }
    function m() {
        return o("WAWebFtsStorageUtils").getStorage().table(c);
    }
    l.addTable = d;
    l.getTable = m;
}, 98);