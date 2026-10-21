__d("WAWebPinInChatSchema", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("pinned-messages").version(o("WAWebModelStorageVersions").pinInChatCreateTable(), [
            a("parentMsgKey"),
            n("chatId"),
            n("msgKey"),
            n("senderTimestampMs"),
            n("ack"),
            n("t"),
            n("pinType"),
            n("pinExpiryDuration"),
            n("sender"),
            r("msgKey"),
            r("chatId")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("pinned-messages");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);