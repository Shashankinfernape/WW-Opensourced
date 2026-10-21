__d("WAWebSchemaMessageInfo", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addIndex: a } = t;
        e.add("message-info").version(o("WAWebModelStorageVersions").messageInfoCreateTable(), [
            r([
                "msgKey",
                "receiverUserJid"
            ]),
            n("delivery"),
            n("read"),
            n("played"),
            n("deviceDelivered"),
            n("deviceNotDelivered"),
            a("msgKey")
        ]).version(o("WAWebModelStorageVersions").messageInfoAddDeliveryPrivacyMode(), [
            n("deliveryPrivacyMode"),
            n("hasAdditionalRetryTargets")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("message-info");
    }
    l.addTable = e;
    l.getMessageInfoTable = s;
}, 98);