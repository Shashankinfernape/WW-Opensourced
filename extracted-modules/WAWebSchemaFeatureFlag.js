__d("WAWebSchemaFeatureFlag", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("subscriptionFeatureFlag").version(o("WAWebModelStorageVersions").subscriptionFeatureFlagCreateTable(), [
            r("id"),
            n("enabled"),
            n("expirationTime"),
            n("limit")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("subscriptionFeatureFlag");
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().doesLocalSchemaIncludeVersion(o("WAWebModelStorageVersions").subscriptionFeatureFlagCreateTable());
    }
    l.addTable = e;
    l.getFeatureFlagTable = s;
    l.isFeatureFlagTableAvailable = u;
}, 98);