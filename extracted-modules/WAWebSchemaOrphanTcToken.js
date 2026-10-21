__d("WAWebSchemaOrphanTcToken", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addEncryptedColumn: r, addUserDefinedPrimaryKey: a } = t;
        e.add("orphan-tc-token").version(o("WAWebModelStorageVersions").orphanTcTokenCreateTable(), [
            a("chatId"),
            r("tcToken", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            n("tcTokenTimestamp")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("orphan-tc-token");
    }
    l.addTable = e;
    l.getOrphanTcTokenTable = s;
}, 98);