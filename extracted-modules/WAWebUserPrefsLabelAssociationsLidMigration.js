__d("WAWebUserPrefsLabelAssociationsLidMigration", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.LabelAssociationsLidTableMigrationComplete, true);
    }
    function s() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.LabelAssociationsLidTableMigrationComplete) === true;
    }
    l.setLabelAssociationsMigrationAsComplete = e;
    l.isLabelAssociationsMigrationComplete = s;
}, 98);