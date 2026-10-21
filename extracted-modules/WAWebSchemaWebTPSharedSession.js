__d("WAWebSchemaWebTPSharedSession", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("webtp-shared-session").version(o("WAWebModelStorageVersions").webTPSharedSessionCreateTable(), [
            a("sessionId"),
            n("expiresAt"),
            r("expiresAt"),
            n("fileName"),
            n("fileBuffer")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("webtp-shared-session");
    }
    l.addTable = e;
    l.getWebTPSharedSessionTable = s;
}, 98);