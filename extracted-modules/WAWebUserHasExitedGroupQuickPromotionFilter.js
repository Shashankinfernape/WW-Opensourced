__d("WAWebUserHasExitedGroupQuickPromotionFilter", [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:exitedGroupFilter: Group privacy setting is not all"
    };
    const s = {
        reason: "filtersRuleValidator:exitedGroupFilter: No group metadata found"
    };
    const u = {
        reason: "filtersRuleValidator:exitedGroupFilter: User is a group member"
    };
    const c = {
        reason: "filtersRuleValidator:exitedGroupFilter: User not found as past participant"
    };
    const d = {
        reason: "filtersRuleValidator:exitedGroupFilter: User exited group timestamp outside threshold"
    };
    const m = {
        name: "whatsapp_user_has_exited_group",
        filter: function(n, a, i) {
            const l = i?.group?.groupMetadata;
            if (l == null) {
                return s;
            }
            const m = !l.participants.iAmMember();
            if (!m) {
                return u;
            }
            const p = l.pastParticipants.get(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
            if (p == null) {
                return c;
            }
            const _ = o("WAWebQuickPromotionValidatorUtils").convertFilterParametersIntoMap(a);
            const f = parseInt(r("nullthrows")(_.get("param")), 10);
            if (!o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(f, o("WATimeUtils").castToUnixTime(p.leaveTs)))) {
                return d;
            }
            const g = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
            if (g.groupAdd !== "all") {
                return e;
            }
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    };
    l.userHasExitedGroupFilter = m;
}, 98);