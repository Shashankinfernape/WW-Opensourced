__d("WAWebInactiveGroupLidMigration", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.InactiveGroupLidMigrationComplete) === true;
    }
    function s() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.InactiveGroupLidMigrationComplete, true);
    }
    l.isInactiveGroupLidMigrationComplete = e;
    l.setInactiveGroupLidMigrationComplete = s;
}, 98);