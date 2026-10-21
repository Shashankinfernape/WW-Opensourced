__d("WAWebBizBroadcastProOnboardingStatus", [
    "WAWebBizBroadcastEligibilityCache",
    "WAWebBizBroadcastProEligibilityEvent",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebWamEnumBbTierType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    let s = false;
    let u = false;
    function c(t) {
        e = t;
        s = true;
        u = true;
        o("WAWebBizBroadcastProEligibilityEvent").bizBroadcastProEligibilityEmitter.trigger("change");
    }
    function d(t) {
        if (!u) {
            const r = (t != null ? o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus.cast(t) : null) ?? o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus.NOT_ELIGIBLE;
            s = true;
            if (r !== e) {
                e = r;
                o("WAWebBizBroadcastProEligibilityEvent").bizBroadcastProEligibilityEmitter.trigger("change");
            }
        }
    }
    function m() {
        if (e == null && !s) {
            s = true;
            const n = o("WAWebBizBroadcastEligibilityCache").readCache()?.result.bbPro?.status;
            if (n != null) {
                e = o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus.cast(n) ?? o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus.NOT_ELIGIBLE;
            }
        }
        return e;
    }
    function p() {
        return m() != null;
    }
    function _() {
        if (m() === o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus.ONBOARDED) {
            return o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO;
        }
        return o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE;
    }
    l.BBProOnboardingStatus = o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus;
    l.bizBroadcastProNuxStateEmitter = o("WAWebBizBroadcastProEligibilityEvent").bizBroadcastProEligibilityEmitter;
    l.debugSetBizBroadcastProOnboardingStatus = c;
    l.updateBizBroadcastProEligibility = d;
    l.getBizBroadcastProNuxOnboardingStatus = m;
    l.isBizBroadcastProNuxOnboardingStatusResolved = p;
    l.getBizBroadcastProductTier = _;
}, 98);