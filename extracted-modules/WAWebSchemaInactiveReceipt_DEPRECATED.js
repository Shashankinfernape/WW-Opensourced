__d("WAWebSchemaInactiveReceipt_DEPRECATED", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("inactive-receipt").version(o("WAWebModelStorageVersions").inactiveReceiptCreateTable(), [
            r("msgId"),
            n("chatId"),
            n("participantId")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);