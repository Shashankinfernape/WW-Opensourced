__d("WAWebBizNativeAdsScenarioRouter", [], function(t, n, r, o, a, i) {
    "use strict";
    function e({ activeIdentityType, fbPageHasCreatedAd, hasValidFBAccessToken, isWAAEligible, waAdsIdentityPageHasCreatedAd }) {
        const i = fbPageHasCreatedAd || waAdsIdentityPageHasCreatedAd;
        if (!isWAAEligible && i && !hasValidFBAccessToken) {
            return "HAS_FB_ADS_NOT_WAA_ELIGIBLE";
        }
        if (!isWAAEligible && !i) {
            return "FIRST_TIME_NOT_WAA_ELIGIBLE";
        }
        if (i) {
            if (fbPageHasCreatedAd && !hasValidFBAccessToken && isWAAEligible && !waAdsIdentityPageHasCreatedAd) {
                return "HAS_FB_ADS_NO_FB_ACCESS_TOKEN";
            }
            if (fbPageHasCreatedAd && hasValidFBAccessToken && activeIdentityType === "WAA" && !waAdsIdentityPageHasCreatedAd) {
                return "HAS_FB_ADS_WAA_ACTIVE";
            }
            return "RETURNING_WITH_ADS";
        }
        return "FIRST_TIME_WAA_ELIGIBLE";
    }
    function l(e) {
        return e === "FIRST_TIME_WAA_ELIGIBLE" || e === "FIRST_TIME_NOT_WAA_ELIGIBLE";
    }
    i.resolveNativeAdsScenario = e;
    i.isFirstTimeScenario = l;
}, 66);