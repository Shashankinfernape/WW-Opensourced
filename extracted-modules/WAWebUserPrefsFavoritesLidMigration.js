__d("WAWebUserPrefsFavoritesLidMigration", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.FavoritesLidTableMigrationComplete, true);
    }
    function s() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.FavoritesLidTableMigrationComplete) === true;
    }
    l.setFavoritesMigrationAsComplete = e;
    l.isFavoritesMigrationComplete = s;
}, 98);