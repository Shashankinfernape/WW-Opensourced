__d("WAWebSchemaMessageHistory", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("message-history").version(o("WAWebModelStorageVersions").messageHistoryCreateTable(), [
            a("msgKey"),
            n("parentMsgKey"),
            r("parentMsgKey")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);