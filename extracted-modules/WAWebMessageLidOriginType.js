__d("WAWebMessageLidOriginType", [
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e.isLid()) {
            if (t?.origin != null) {
                t.origin;
                if (o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted()) {
                    return o("WAWebUsernameTypes").LidOriginType.GENERAL;
                }
                return o("WAWebUsernameTypes").LidOriginType.cast(t.origin);
            }
            return o("WAWebUsernameTypes").LidOriginType.GENERAL;
        }
    }
    l.determineLidOriginTypeForIncomingMessage = e;
}, 98);