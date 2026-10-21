__d("WAWebSchemaMemberLabel", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "member-label";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addUserDefinedPrimaryKey: a } = n;
        t.add(e).version(o("WAWebModelStorageVersions").memberLabelCreateTable(), [
            a("chatId"),
            r("memberLabelMap")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    l.addTable = s;
    l.getMemberLabelTable = u;
}, 98);