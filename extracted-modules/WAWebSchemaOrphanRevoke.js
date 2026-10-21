__d("WAWebSchemaOrphanRevoke", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("orphan-revoke").version(o("WAWebModelStorageVersions").orphanRevokeCreateTable(), [
            r("msgKey"),
            n("sender"),
            n("timestamp"),
            n("subtype")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("orphan-revoke");
    }
    l.addTable = e;
    l.getOrphanRevokeTable = s;
}, 98);