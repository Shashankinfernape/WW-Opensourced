__d("WAWebSignupCTAExperiment", [
    "$InternalEnum",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        SignUp: 1,
        GetOffers: 2
    });
    function s() {
        return e.cast(o("WAWebABProps").getABPropConfigValue("inapp_signup_agm_cta_experiment")) ?? e.SignUp;
    }
    l.SignupCTAExperiment = e;
    l.getSignupCTAExperiment = s;
}, 98);