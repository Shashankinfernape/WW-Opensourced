__d("WAWebSchemaUserPrefs", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("user-prefs").version(o("WAWebModelStorageVersions").userPrefsCreateTable(), [
            r("key"),
            n("value")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("user-prefs");
    }
    l.addTable = e;
    l.getUserPrefsTable = s;
}, 98);