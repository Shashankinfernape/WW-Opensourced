__d("WAWebSchemaOrphanPaymentNotification", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("orphan-payment-notification").version(o("WAWebModelStorageVersions").orphanPaymentNotificationCreateTable(), [
            r("msgKey"),
            n("receiver"),
            n("currency"),
            n("amount1000"),
            n("type"),
            n("status"),
            n("ts")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("orphan-payment-notification");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);