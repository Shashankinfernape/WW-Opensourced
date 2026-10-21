__d("WAWebLidStatusMigrationKeyUtils", [
    "WAWebLidStatusMigrationUtils",
    "WAWebMsgKey"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.remote.isStatus()) {
            return new (r("WAWebMsgKey"))({
                fromMe: e.fromMe,
                remote: e.remote,
                id: e.id,
                participant: e.participant ? o("WAWebLidStatusMigrationUtils").matWidConvert(e.participant) : undefined
            });
        }
        return e;
    }
    l.matKeyConvert = e;
}, 98);