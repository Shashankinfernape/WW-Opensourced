__d("WAWebBlocklistMigration", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.BlocklistMigrated) === true;
    }
    function s() {
        return e();
    }
    function u() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.BlocklistMigrated, true);
    }
    function c() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.BlocklistMigrated, false);
    }
    l.isBlocklistMigrated = e;
    l.applyBlocklistV2Rules = s;
    l.setBlocklistMigrated = u;
    l.setBlocklistUnmigrated = c;
}, 98);