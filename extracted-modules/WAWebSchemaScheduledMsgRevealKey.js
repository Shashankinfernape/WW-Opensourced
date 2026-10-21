__d("WAWebSchemaScheduledMsgRevealKey", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUniqueIndex: a, addUserDefinedPrimaryKey: i } = t;
        e.add("scheduled-msg-reveal-key").version(o("WAWebModelStorageVersions").scheduledMsgRevealKeyCreateTable(), [
            i("msgId"),
            n("chatId"),
            r("chatId"),
            n("revealKeyId"),
            a("revealKeyId"),
            n("revealKey"),
            n("encPayload"),
            n("encIv"),
            n("scheduledTimestampS"),
            n("status"),
            r("status"),
            n("createdAt"),
            n("isOrphan"),
            r("isOrphan"),
            n("senderJid"),
            n("reportingTag"),
            n("reportingToken"),
            n("reportingTokenVersion"),
            n("reportingStanzaId"),
            n("reportingStanzaTs"),
            n("outerMessageSecret"),
            n("isAssociationChild")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("scheduled-msg-reveal-key");
    }
    l.addTable = e;
    l.getScheduledMsgRevealKeyTable = s;
}, 98);