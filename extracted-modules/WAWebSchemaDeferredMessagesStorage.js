__d("WAWebSchemaDeferredMessagesStorage", [
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
    "WAWebWorkerStorageUtils",
    "WAWebWorkerStorageVersions"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn: s, addEncryptedColumn: u, addUserDefinedPrimaryKey: c } = e;
    function d() {
        o("WAWebWorkerStorageUtils").getStorage().add("deferred_messages").version(o("WAWebWorkerStorageVersions").deferredMessagesStorageCreateTable(), [
            c("id"),
            s("type"),
            u("plaintext", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            s("info"),
            s("paymentInfo"),
            s("bizInfo")
        ]).view(function(e) {
            return {
                id: e.id,
                type: e.type,
                plaintext: e.plaintext,
                info: e.info,
                paymentInfo: e.paymentInfo,
                bizInfo: e.bizInfo
            };
        }).useDbMsgEncKeyForEncryptedCol(true);
    }
    function m() {
        return o("WAWebWorkerStorageUtils").getStorage().table("deferred_messages");
    }
    l.addTable = d;
    l.getTable = m;
}, 98);