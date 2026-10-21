__d("WAWebSchemaMessageOrphans", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a, removeIndex: i } = t;
        e.add("message-orphans").version(o("WAWebModelStorageVersions").messageOrphansCreateTable(), [
            a("msgKey"),
            n("parentMsgKey"),
            r("parentMsgKey"),
            n("sender"),
            n("parsedMsgPayload"),
            n("senderTimestampMs"),
            r("senderTimestampMs")
        ]).version(o("WAWebModelStorageVersions").messageOrphansAddColumns(), [
            n("t"),
            r("t"),
            n("type"),
            i("senderTimestampMs"),
            n("read"),
            n("reportingTokenInfo")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("message-orphans");
    }
    l.addTable = e;
    l.getMessageOrphanTable = s;
}, 98);