__d("WAWebSchemaOrphanReceipt", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("orphan-receipt").version(o("WAWebModelStorageVersions").orphanReceiptCreateTable(), [
            r("msgKey"),
            n("delivery"),
            n("read"),
            n("played")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("orphan-receipt");
    }
    l.addTable = e;
    l.getOrphanReceiptTable = s;
}, 98);