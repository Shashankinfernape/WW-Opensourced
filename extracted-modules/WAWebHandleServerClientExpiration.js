__d("WAWebHandleServerClientExpiration", [
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e == null) {
            o("WAWebUserPrefsMultiDevice").clearServerClientExpirationOverride();
        } else {
            const n = o("WAWebUserPrefsMultiDevice").getServerClientExpirationOverride()?.timestamp;
            if (n != null && e >= n) {
                return;
            }
            const r = o("WATimeUtils").futureUnixTime(3 * o("WATimeUtils").DAY_SECONDS);
            const a = Math.max(r, e);
            o("WAWebUserPrefsMultiDevice").setServerClientExpirationOverride(`${a}`, o("WAWebBuildConstants").VERSION_BASE);
        }
    }
    l.handleServerClientExpiration = e;
}, 98);