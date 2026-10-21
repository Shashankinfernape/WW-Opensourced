__d("WAWebSchemaPeerMessage", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("peer-message").version(o("WAWebModelStorageVersions").peerMessageCreateTable(), [
            r("id"),
            n("to"),
            n("type"),
            n("subtype"),
            n("appStateSyncKeyShare"),
            n("appStateSyncKeyRequest"),
            n("appStateFatalExceptionNotification"),
            n("peerDataOperationRequestMessage"),
            n("peerDataOperationRequestResponseMessage")
        ]).version(o("WAWebModelStorageVersions").paymentBackgroundsRemovedTablePlaceholder(), []).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("peer-message");
    }
    l.addTable = e;
    l.getPeerMessageTable = s;
}, 98);