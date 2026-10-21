__d("useWAWebBizBroadcastEntrypointEnabled", [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebProductFeature",
    "react-compiler-runtime",
    "useWAWebBizBroadcastProEligibilityState"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = e === undefined ? true : e;
        const r = o("useWAWebBizBroadcastProEligibilityState").useWAWebBizBroadcastProEligibilityState();
        const r_onboardingStatus = r.onboardingStatus;
        if (o("WAWebProductFeature").isInternalProduct()) {
            return false;
        }
        if (o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastProEntrypointEnabledForStatus(r_onboardingStatus)) {
            return true;
        }
        let i;
        if (t[0] !== n) {
            i = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(n);
            t[0] = n;
            t[1] = i;
        } else {
            i = t[1];
        }
        return i;
    }
    l.useWAWebBizBroadcastEntrypointEnabled = e;
}, 98);