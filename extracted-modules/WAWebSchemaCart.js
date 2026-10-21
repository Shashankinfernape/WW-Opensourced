__d("WAWebSchemaCart", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("cart").version(o("WAWebModelStorageVersions").cartCreateTable(), [
            r("id"),
            n("products"),
            n("message"),
            n("total"),
            n("currency"),
            n("itemCount")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("cart");
    }
    l.addTable = e;
    l.getCartTable = s;
}, 98);