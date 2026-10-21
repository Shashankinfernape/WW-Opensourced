__d("WAWebCTWADetectedOutcomeOnboardingStatusNotification", [
    "WAWebBackendApi"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(onboardingStatus) {
        o("WAWebBackendApi").frontendFireAndForget("ctwaDetectedOutcomeOnboardingStatusUpdate", {
            onboardingStatus
        });
    }
    l.handleCTWADetectedOutcomeOnboardingStatusNotification = e;
}, 98);