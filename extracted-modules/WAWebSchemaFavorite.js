__d("WAWebSchemaFavorite", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("favorite").version(o("WAWebModelStorageVersions").favoriteCreateTable(), [
            r("id"),
            n("orderIndex")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("favorite");
    }
    l.addTable = e;
    l.getFavoriteTable = s;
}, 98);