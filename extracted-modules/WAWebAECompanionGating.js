__d("WAWebAECompanionGating", [
    "WAWebABProps",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = 0;
    function s() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("ctwa_smb_ae_companion_onboarding_enabled");
    }
    function u() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return o("WAWebABProps").getABPropConfigValue("ctwa_smb_ae_onboarding_compatability_code");
        }
        return e;
    }
    function c() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("ctwa_coex_state_sync_enabled") === true;
    }
    function d() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("ctwa_smb_ae_onboarding_enabled") === true;
    }
    l.isAECompanionOnboardingEnabled = s;
    l.getAECompatibilityBits = u;
    l.isCoexStateSyncEnabled = c;
    l.isAEOnboardingEnabled = d;
}, 98);