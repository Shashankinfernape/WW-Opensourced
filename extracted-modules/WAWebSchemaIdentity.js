__d("WAWebSchemaIdentity", [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn: s, addUserDefinedPrimaryKey: u } = e;
    function c() {
        o("WAWebSignalStorageUtils").getStorage().add("identity-store").version(o("WAWebSignalStorageVersions").identityCreateTable(), [
            u("identifier"),
            s("identityKey"),
            s("rowId"),
            s("sentAddonRowId"),
            s("accountEncryptionState")
        ]).view(function(e) {
            return {
                identifier: e.identifier,
                identityKey: e.identityKey,
                rowId: e.rowId,
                sentAddonRowId: e.sentAddonRowId,
                accountEncryptionState: e.accountEncryptionState
            };
        });
    }
    function d() {
        return o("WAWebSignalStorageUtils").getStorage().table("identity-store");
    }
    l.addTable = c;
    l.getTable = d;
}, 98);