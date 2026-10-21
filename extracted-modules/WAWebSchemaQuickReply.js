__d("WAWebSchemaQuickReply", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("quick-reply").version(o("WAWebModelStorageVersions").quickReplyCreateTable(), [
            r("id"),
            n("shortcut"),
            n("message"),
            n("count"),
            n("keywords")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("quick-reply");
    }
    l.addTable = e;
    l.getQuickReplyTable = s;
}, 98);