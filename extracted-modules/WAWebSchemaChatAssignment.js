__d("WAWebSchemaChatAssignment", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "chat-assignment";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addUserDefinedPrimaryKey: a } = n;
        t.add(e).version(o("WAWebModelStorageVersions").chatAssignmentCreateTable(), [
            a("id"),
            r("chatId"),
            r("agentId"),
            r("chatOpenedByAgent")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    l.addTable = s;
    l.getChatAssignmentTable = u;
}, 98);