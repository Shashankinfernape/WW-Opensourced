__d("WAWebSchemaACSTokens", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("acs-tokens").version(o("WAWebModelStorageVersions").acsTokenCreateTable(), [
            a("tokenName"),
            n("project"),
            r("project"),
            n("creationTs"),
            n("redeemCount"),
            n("token")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("acs-tokens");
    }
    l.addTable = e;
    l.getACSTokensTable = s;
}, 98);