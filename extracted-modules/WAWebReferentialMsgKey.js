__d("WAWebReferentialMsgKey", [
    "WAWebMsgKey",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_broadcastId = e.broadcastId;
        if (e_broadcastId && o("WAWebWidFactory").isWidlike(e_broadcastId)) {
            const n = e.id;
            return new (r("WAWebMsgKey"))({
                fromMe: n.fromMe,
                remote: o("WAWebWidFactory").createWidFromWidLike(e_broadcastId),
                id: n.id,
                participant: n.remote
            });
        }
        return e.id;
    }
    l.getReferentialMsgKey = e;
}, 98);