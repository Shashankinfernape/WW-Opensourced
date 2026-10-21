__d("WAWebSchemaDirectConnectionKeys", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("direct-connection-keys").version(o("WAWebModelStorageVersions").directConnectionKeysCreateTable(), [
            r("id"),
            n("certificateChain"),
            n("cypher"),
            n("cypherExpirationTimestamp")
        ]).version(o("WAWebModelStorageVersions").directConnectionKeysAddPostcodeColumns(), [
            n("cypherType"),
            n("postcode"),
            n("postcodeSetByUser"),
            n("postcodeLocationName")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("direct-connection-keys");
    }
    l.addTable = e;
    l.getDirectConnectionKeysTable = s;
}, 98);