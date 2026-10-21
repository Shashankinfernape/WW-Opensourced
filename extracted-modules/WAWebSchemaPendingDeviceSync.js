__d("WAWebSchemaPendingDeviceSync", [
    "WAWebOffdStorageUtils",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const e_addUserDefinedPrimaryKey = e.addUserDefinedPrimaryKey;
    function u() {
        o("WAWebOffdStorageUtils").getStorage().add("pending-device-sync").version(o("WAWebOffdStorageUtils").getStorage().versions.version(4), [
            e_addUserDefinedPrimaryKey("id")
        ]).view(function(e) {
            return e;
        });
    }
    function c() {
        return o("WAWebOffdStorageUtils").getStorage().table("pending-device-sync");
    }
    l.addTable = u;
    l.getTable = c;
}, 98);