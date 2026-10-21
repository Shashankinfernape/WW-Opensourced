__d("WAWebQuestionsAdminGatingUtils", [
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterExtendedGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = [
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin,
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
    ];
    function s(t) {
        const r = t.newsletterMetadata?.membershipType;
        if (r == null || !e.includes(r)) {
            return false;
        }
        if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterQuestionsCapabilityEnabled(t)) {
            return true;
        }
        return o("WAWebABProps").getABPropConfigValue("channels_question_admin_enabled");
    }
    function u(t) {
        const r = t.newsletterMetadata?.membershipType;
        if (r == null || !e.includes(r)) {
            return false;
        }
        if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterQuestionsM2CapabilityEnabled(t)) {
            return true;
        }
        return o("WAWebABProps").getABPropConfigValue("channels_question_admin_m2_enabled");
    }
    function c(t) {
        const r = t.newsletterMetadata?.membershipType;
        if (r == null || !e.includes(r)) {
            return false;
        }
        if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterQuestionsResponsesStarringCapabilityEnabled(t)) {
            return true;
        }
        return o("WAWebABProps").getABPropConfigValue("channels_question_admin_starring_enabled");
    }
    l.isQuestionsFeatureEnabledForAdmins = s;
    l.isQuestionsM2FeatureEnabledForAdmins = u;
    l.isQuestionsResponseStarringEnabled = c;
}, 98);