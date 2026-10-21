__d("WAWebPresenceBridgeApi", [
    "WAWebChangePresenceHandlerAction",
    "WAWebPresenceCollection",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    const e = {
        changePresenceHandler: function({ id, participant, type }) {
            return r("WAWebChangePresenceHandlerAction")({
                id: o("WAWebWidFactory").createWid(id),
                type,
                participant: participant != null ? o("WAWebWidFactory").createWid(participant) : undefined
            });
        },
        resetPresence: function({ id }) {
            const n = o("WAWebPresenceCollection").PresenceCollection.get(o("WAWebWidFactory").createWid(id));
            if (n) {
                n.reset();
            }
        }
    };
    l.PresenceBridgeApi = e;
}, 98);