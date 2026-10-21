__d("WAWebSchemaFtsV2Index", [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn, addCompositeIndex, addCompositePrimaryKey, addIndex } = e;
    const m = "fts-v2-index";
    function p() {
        o("WAWebFtsStorageUtils").getStorage().add(m).version(o("WAWebFtsStorageVersions").ftsV2IndexCreateTable(), [
            addCompositePrimaryKey([
                "id",
                "chatId",
                "token"
            ]),
            addIndex("id"),
            addIndex("chatId"),
            addIndex("token"),
            addCompositeIndex([
                "chatId",
                "token"
            ]),
            addColumn("timestamp"),
            addCompositeIndex([
                "id",
                "token"
            ])
        ]).delete(o("WAWebFtsStorageVersions").ftsV2Delete());
    }
    l.addTable = p;
}, 98);