__d("WAWebSchemaCollectionVersion", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("collection-version").version(o("WAWebModelStorageVersions").collectionVersionCreateTable(), [
            r("collection"),
            n("version"),
            n("state"),
            n("finiteFailureStartTime"),
            n("ltHash"),
            n("isCollectionInMacMismatchFatal")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("collection-version");
    }
    l.addTable = e;
    l.getCollectionVersionTable = s;
}, 98);