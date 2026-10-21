__d("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.PhoneNumberHidingThreadPromotionMigrationState, e);
    }
    function s() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.PhoneNumberHidingThreadPromotionMigrationState);
        if (e === "unmigrated" || e === "migration_started" || e === "migrated") {
            return e;
        }
        return "unmigrated";
    }
    function u() {
        return s() !== "unmigrated";
    }
    function c() {
        return s() === "migrated";
    }
    l.setPhoneNumberHidingThreadPromotionMigrationState = e;
    l.getPhoneNumberHidingThreadPromotionMigrationState = s;
    l.hasPhoneNumberHidingThreadPromotionMigrationStarted = u;
    l.isPhoneNumberHidingThreadPromotionMigrationComplete = c;
}, 98);