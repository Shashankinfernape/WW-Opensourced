__d("WAWebPrivacyMode_WORKER_INCOMPATIBLE", [
    "WAWebContactCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (r("WAWebWid").isUser(e)) {
            const t = o("WAWebContactCollection").ContactCollection.get(e);
            return t?.privacyMode;
        }
    }
    l.getPrivacyModeFromModel = e;
}, 98);