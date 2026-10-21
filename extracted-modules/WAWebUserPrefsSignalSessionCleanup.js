__d("WAWebUserPrefsSignalSessionCleanup", [
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.SIGNAL_SESSION_CLEANUP_COMPLETE) === true;
    }
    function s() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.SIGNAL_SESSION_CLEANUP_COMPLETE, true);
    }
    l.isSignalSessionCleanupComplete = e;
    l.setSignalSessionCleanupComplete = s;
}, 98);