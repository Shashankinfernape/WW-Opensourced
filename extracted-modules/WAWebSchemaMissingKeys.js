__d("WAWebSchemaMissingKeys", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebSyncdKeyTypes"
], function(t, n, r, o, a, i, l) {
    function e({ deviceResponses: t, keyHex: n, keyId: r, timestamp: a }) {
        return {
            keyHex: n,
            keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(r),
            timestamp: a,
            deviceResponses: t
        };
    }
    function s({ deviceResponses: t, keyHex: n, keyId: r, timestamp: a }) {
        return {
            keyHex: n,
            keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(r),
            timestamp: a,
            deviceResponses: t
        };
    }
    function u() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("missing-keys").version(o("WAWebModelStorageVersions").missingKeysCreateTable(), [
            r("keyHex"),
            n("keyId"),
            n("timestamp"),
            n("deviceResponses")
        ]).view(function(e) {
            return e;
        });
    }
    function c() {
        return o("WAWebModelStorageUtils").getStorage().table("missing-keys");
    }
    l.convertToMissingKeyFromRow = e;
    l.convertFromMissingKeyToRow = s;
    l.addTable = u;
    l.getMissingKeysTable = c;
}, 98);