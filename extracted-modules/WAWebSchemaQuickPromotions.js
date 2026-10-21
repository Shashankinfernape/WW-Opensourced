__d("WAWebSchemaQuickPromotions", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("quick-promotions").version(o("WAWebModelStorageVersions").quickPromotionsCreateTable(), [
            a("id"),
            n("surfaceId"),
            r("surfaceId"),
            n("ts"),
            n("data"),
            n("tracking"),
            n("locale")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("quick-promotions");
    }
    l.addTable = e;
    l.getQuickPromotionsTable = s;
}, 98);