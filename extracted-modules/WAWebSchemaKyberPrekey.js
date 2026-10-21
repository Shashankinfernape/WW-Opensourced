__d("WAWebSchemaKyberPrekey", [
    "WAWebSignalStorageUtils",
    "WAWebSignalStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addAutoIncrementingPrimaryKey: s, addColumn: u } = e;
    function c() {
        o("WAWebSignalStorageUtils").getStorage().add("kyber-prekey-store").version(o("WAWebSignalStorageVersions").kyberPreKeyCreateTable(), [
            s("keyId"),
            u("keyPair"),
            u("signature"),
            u("timestamp"),
            u("sentToServer")
        ]).view(function(e) {
            return {
                keyId: e.keyId,
                keyPair: e.keyPair,
                signature: e.signature,
                timestamp: e.timestamp,
                sentToServer: e.sentToServer
            };
        });
    }
    function d() {
        return o("WAWebSignalStorageUtils").getStorage().table("kyber-prekey-store");
    }
    l.addTable = c;
    l.getTable = d;
}, 98);