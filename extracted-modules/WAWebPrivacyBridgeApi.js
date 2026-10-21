__d("WAWebPrivacyBridgeApi", [
    "WAWebCmd",
    "WAWebUserDisclosureCollection",
    "WAWebUserDisclosureModel"
], function(t, n, r, o, a, i, l) {
    const e = {
        updateUserDisclosures: function({ userDisclosures }) {
            const n = [];
            userDisclosures.map((e)=>{
                const t = new (r("WAWebUserDisclosureModel"))({
                    id: e.id,
                    accepted: e.accepted,
                    lastUpdated: new Date
                });
                n.push(t);
            });
            o("WAWebUserDisclosureCollection").UserDisclosureCollection.add(n, {
                merge: true
            });
        },
        triggerAccountSyncForPrivacyFromBridge: function(t) {
            o("WAWebCmd").Cmd.onAccountSyncForPrivacyFromBridge(t);
        }
    };
    l.PrivacyBridgeApi = e;
}, 98);