__d("WAWebContactManagerMetadataBridgeApi", [
    "WAWebContactManagerMetadataChangeNotifier"
], function(t, n, r, o, a, i, l) {
    const e = {
        contactManagerMetadataChanged: function({ metadataJids }) {
            o("WAWebContactManagerMetadataChangeNotifier").notifyContactManagerMetadataChanged(metadataJids);
        }
    };
    l.ContactManagerMetadataBridgeApi = e;
}, 98);