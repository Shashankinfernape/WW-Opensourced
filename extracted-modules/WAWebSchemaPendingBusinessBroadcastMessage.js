__d("WAWebSchemaPendingBusinessBroadcastMessage", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l) {
    const e = "pending-business-broadcast-message";
    function s() {
        let t;
        const n = o("WAWebModelStorageUtils").getStorage();
        const r = o("WAWebStorageMutationBuilder").columnBuilder(n.config);
        const { addEncryptedColumn: a, addUserDefinedPrimaryKey: i } = r;
        n.add(e).version(o("WAWebModelStorageVersions").pendingBusinessBroadcastMessageCreateTable(), [
            i("pendingBroadcastMessageId"),
            a("messageBody", (t = o("WAWebStorageSchema")).EncryptedValueType.STRING),
            a("mediaData", t.EncryptedValueType.ARRAY_BUFFER),
            a("mediaMetadata", t.EncryptedValueType.STRING),
            a("ctaButtonJson", t.EncryptedValueType.STRING)
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    function c() {
        return o("WAWebModelStorageUtils").getStorage().doesLocalSchemaIncludeVersion(o("WAWebModelStorageVersions").pendingBusinessBroadcastMessageCreateTable());
    }
    l.addTable = s;
    l.getPendingBusinessBroadcastMessageTable = u;
    l.canUsePendingBroadcastMessageTable = c;
}, 98);