__d("WAWebSchemaQuarantineData", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addEncryptedColumn: r, addIndex: a, addUserDefinedPrimaryKey: i } = t;
        e.add("quarantine-data").version(o("WAWebModelStorageVersions").quarantineDataCreateTable(), [
            i("msgId"),
            r("originalProtobuf", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            n("createdAt"),
            a("createdAt")
        ]).view(function(e) {
            return e;
        }).useDbMsgEncKeyForEncryptedCol(true);
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("quarantine-data");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);