__d("WAWebSchemaPendingBusinessBroadcast", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "pending-business-broadcast";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addUserDefinedPrimaryKey: a } = n;
        t.add(e).version(o("WAWebModelStorageVersions").pendingBusinessBroadcastCreateTable(), [
            a("adGroupId"),
            r("broadcastJid"),
            r("freeReservedMsgs"),
            r("sendTimestamp"),
            r("pendingBroadcastMessageId")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    function c() {
        return o("WAWebModelStorageUtils").getStorage().doesLocalSchemaIncludeVersion(o("WAWebModelStorageVersions").pendingBusinessBroadcastCreateTable());
    }
    l.addTable = s;
    l.getPendingBusinessBroadcastTable = u;
    l.canUsePendingBroadcastTable = c;
}, 98);