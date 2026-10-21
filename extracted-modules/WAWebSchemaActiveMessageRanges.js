__d("WAWebSchemaActiveMessageRanges", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = Object.freeze({
        Unknown: "unknown",
        Archive: "archive",
        MarkChatAsRead: "markChatAsRead",
        ClearChatKeepStarredKeepMedia: "clearChat_0_0",
        ClearChatKeepStarredDeleteMedia: "clearChat_0_1",
        ClearChatDeleteStarredKeepMedia: "clearChat_1_0",
        ClearChatDeleteStarredDeleteMedia: "clearChat_1_1",
        DeleteChatDeleteMedia: "deleteChat_1",
        DeleteChatKeepMedia: "deleteChat_0"
    });
    function s() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addIndex: a } = t;
        e.add("active-message-ranges").version(o("WAWebModelStorageVersions").activeMessageRangesCreateTable(), [
            r([
                "chatId",
                "action"
            ]),
            a("chatId"),
            n("actionValue"),
            n("remainingMessages")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table("active-message-ranges");
    }
    l.ActiveRangeAction = e;
    l.addTable = s;
    l.getActiveMessageRangesTable = u;
}, 98);