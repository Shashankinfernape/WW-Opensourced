__d("WAWebChangeGroupPresenceHandlerAction", [
    "WAWebPresenceCollection"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebPresenceCollection").PresenceCollection.get(e.id);
        if (t != null) {
            t.set({
                groupOnlineCount: e.count,
                isOnline: e.count > 0,
                hasData: true,
                isSubscribed: true,
                stale: false
            });
        }
    }
    l.default = e;
}, 98);