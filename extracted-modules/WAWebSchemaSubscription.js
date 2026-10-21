__d("WAWebSchemaSubscription", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("subscription").version(o("WAWebModelStorageVersions").subscriptionCreateTable(), [
            r("id"),
            n("isDeactivated"),
            n("isAutoRenewing"),
            n("expirationDate"),
            n("creationTime"),
            n("newMessageCappingEnabled"),
            n("tier"),
            n("status"),
            n("source"),
            n("isPlatformChanged"),
            n("startTime")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("subscription");
    }
    l.addTable = e;
    l.getSubscriptionTable = s;
}, 98);