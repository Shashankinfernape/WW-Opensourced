__d("WAWebUpdateDataSharing3pdLidInCollectionAction", [
    "WAWebDataSharing3pdLidCollection",
    "WAWebPerCustomerDataSharingModel"
], function(t, n, r, o, a, i, l) {
    function e({ dataSharing3pdEnabled, lidRawString }) {
        const r = o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.get(lidRawString);
        if (r) {
            r.set("dataSharing3pdEnabled", dataSharing3pdEnabled);
        } else {
            o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.add(new (o("WAWebPerCustomerDataSharingModel")).PerCustomerDataSharingModel({
                id: lidRawString,
                dataSharing3pdEnabled
            }));
        }
    }
    function s({ lidRawString }) {
        o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.remove(lidRawString);
    }
    l.updateDataSharing3pdLidInCollection = e;
    l.removeDataSharing3pdLidFromCollection = s;
}, 98);