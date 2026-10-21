__d("WAWebBizBroadcastProOnboardingStatusType", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "ELIGIBLE_TO_ONBOARD",
        "NOT_ELIGIBLE",
        "ONBOARDED"
    ]);
    function l(t) {
        return t != null && t !== e.NOT_ELIGIBLE;
    }
    i.BBProOnboardingStatus = e;
    i.shouldUseBizBroadcastProEntrypoint = l;
}, 66);