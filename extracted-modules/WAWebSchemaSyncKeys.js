__d("WAWebSchemaSyncKeys", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
    "WAWebSyncdKeyTypes"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const { keyData: t, keyId: n } = e;
        return babelHelpers.extends({}, e, {
            keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(n.buffer),
            keyData: o("WAWebSyncdKeyTypes").toSyncKeyData(t)
        });
    }
    function s(e) {
        const { keyData: t, keyId: n } = e;
        return babelHelpers.extends({}, e, {
            keyId: new Uint8Array(o("WAWebSyncdKeyTypes").fromSyncKeyId(n)),
            keyData: o("WAWebSyncdKeyTypes").fromSyncKeyData(t)
        });
    }
    function u() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addEncryptedColumn: r, addIndex: a, addUserDefinedPrimaryKey: i } = t;
        e.add("sync-keys").version(o("WAWebModelStorageVersions").syncKeysCreateTable(), [
            i("keyId"),
            n("timestamp"),
            n("fingerprint"),
            r("keyData", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            n("keyEpoch"),
            a("keyEpoch")
        ]).view(function(e) {
            return e;
        });
    }
    function c() {
        return o("WAWebModelStorageUtils").getStorage().table("sync-keys");
    }
    l.convertToSyncKeyFromRow = e;
    l.convertFromSyncKeyToRow = s;
    l.addTable = u;
    l.getSyncKeysTable = c;
}, 98);