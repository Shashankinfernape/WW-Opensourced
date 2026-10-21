__d("WAWebSchemaGroupAbPropConfig", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r } = t;
        e.add("abpropGroupConfigs").version(o("WAWebModelStorageVersions").groupAbpropsConfigCreateTable(), [
            r([
                "groupJid",
                "configCode"
            ]),
            n("configValue"),
            n("configExpoKey"),
            n("hasAccessed"),
            n("overriddenConfigValue")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("abpropGroupConfigs");
    }
    l.addTable = e;
    l.getGroupAbpropConfigsTable = s;
}, 98);