__d("WAWebLeadSublistGating", [
    "WAWebChatGetters",
    "WAWebCustomerManagerGating",
    "WAWebEnvironment",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_contact = e.contact;
        return o("WAWebMobilePlatforms").isSMB() && !r("WAWebEnvironment").isGuest && !o("WAWebChatGetters").getIsBroadcast(e) && e_contact != null && o("WAWebCustomerManagerGating").isEligibleForCustomerFields(e_contact) && !e.id.isAiHub() && o("WAWebCustomerManagerGating").customerManagerEnabled();
    }
    function s(e) {
        return o("WAWebMobilePlatforms").isSMB() && !r("WAWebEnvironment").isGuest && o("WAWebCustomerManagerGating").isEligibleForCustomerFields(e) && o("WAWebCustomerManagerGating").customerManagerEnabled();
    }
    l.isChatEligibleForLeadSublist = e;
    l.isContactEligibleForLeadSublist = s;
}, 98);