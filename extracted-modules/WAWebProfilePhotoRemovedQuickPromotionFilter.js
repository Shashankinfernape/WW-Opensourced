__d("WAWebProfilePhotoRemovedQuickPromotionFilter", [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebUserPrefsGeneral",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:profilePhotoRemovedFilter: profile photo privacy setting is not all"
    };
    const s = {
        reason: "filtersRuleValidator:profilePhotoRemovedFilter: no timestamp found for last profile pic edit"
    };
    const u = {
        reason: "filtersRuleValidator:profilePhotoRemovedFilter: last profile pic edit is outside threshold"
    };
    const c = {
        reason: "filtersRuleValidator:profilePhotoRemovedFilter: threshold parameter not a valid number"
    };
    const d = {
        name: "whatsapp_user_has_removed_profile_photo_first_time",
        filter: function(n, a, i) {
            const t = o("WAWebUserPrefsGeneral").getLastProfilePicThumbUpdate();
            if (t == null) {
                return s;
            }
            const l = o("WAWebQuickPromotionValidatorUtils").convertFilterParametersIntoMap(a);
            const d = parseInt(r("nullthrows")(l.get("param")), 10);
            if (Number.isNaN(d)) {
                return c;
            }
            if (!o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(d, o("WATimeUtils").castToUnixTime(t)))) {
                return u;
            }
            const m = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
            if (m.profilePicture !== "all") {
                return e;
            }
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    };
    l.profilePhotoRemovedFilter = d;
}, 98);