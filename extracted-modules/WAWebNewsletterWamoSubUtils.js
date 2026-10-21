__d("WAWebNewsletterWamoSubUtils", [
    "WAWebCommonNewsletterEnums"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e?.wamoSubStatus === o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
    }
    function s(e) {
        return e?.wamoSubPlanId != null && e?.wamoSubPlanId !== "";
    }
    l.iHavePaidSubscription = e;
    l.newsletterSupportsSubscriptions = s;
}, 98);