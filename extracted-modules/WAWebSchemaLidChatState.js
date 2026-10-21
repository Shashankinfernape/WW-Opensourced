__d("WAWebSchemaLidChatState", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("lid-chat-state").version(o("WAWebModelStorageVersions").lidChatStateCreateTable(), [
            r("id"),
            n("shareOwnPn"),
            n("requestedPnTimestamp")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);