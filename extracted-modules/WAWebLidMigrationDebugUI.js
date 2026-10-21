__d("WAWebLidMigrationDebugUI", [
    "WAWebUserPrefsMultiDeviceDebug",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return !r("gkx")("26258") && e?.isLid() === true && o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode();
    }
    function s(e) {
        return !r("gkx")("26258") && e === true && o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode();
    }
    function u(t) {
        if (r("gkx")("26258")) {
            return false;
        }
        return e(t.remote) || e(t.participant);
    }
    l.getShouldShowLidDebugUI = e;
    l.getShouldShowLidDebugUIForGroups = s;
    l.getShouldShowLidDebugUIForMsgKey = u;
}, 98);