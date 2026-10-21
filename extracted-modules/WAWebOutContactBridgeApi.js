__d("WAWebOutContactBridgeApi", [
    "WAWebOutContactCollection",
    "WAWebOutContactModel"
], function(t, n, r, o, a, i, l) {
    const e = {
        bulkUpsertOutContacts: function({ contacts }) {
            const n = contacts.map(({ firstName, fullName, id })=>new (r("WAWebOutContactModel"))({
                    id,
                    fullName,
                    firstName
                }));
            o("WAWebOutContactCollection").OutContactCollection.add(n, {
                merge: true,
                silent: true
            });
            o("WAWebOutContactCollection").OutContactCollection.trigger("change");
        },
        bulkRemoveOutContacts: function({ ids }) {
            o("WAWebOutContactCollection").OutContactCollection.remove(ids);
        }
    };
    l.OutContactBridgeApi = e;
}, 98);