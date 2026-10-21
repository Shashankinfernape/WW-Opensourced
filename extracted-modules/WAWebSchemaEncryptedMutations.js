__d("WAWebSchemaEncryptedMutations", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addAutoIncrementingPrimaryKey: n, addColumn: r } = t;
        e.add("encrypted-mutations").version(o("WAWebModelStorageVersions").encryptedMutationsCreateTable(), [
            n("id"),
            r("collectionName"),
            r("keyId"),
            r("indexMac"),
            r("operation"),
            r("indexAndValueCipherText")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);