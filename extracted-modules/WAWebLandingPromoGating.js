__d("WAWebLandingPromoGating", [
    "WAWebEnvironment",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (r("WAWebEnvironment").getIsShowroom()) {
            return false;
        }
        return r("gkx")("14815");
    }
    function s() {
        if (e()) {
            return d();
        }
        return "none";
    }
    function u() {
        return s() === "test";
    }
    function c() {
        return ((e)=>{
            if (e === "control") {
                return 0;
            }
            if (e === "test") {
                return 1;
            }
            if (e === "none") {
                return 3;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(s());
    }
    function d() {
        if (r("gkx")("14893")) {
            return "test";
        }
        return "control";
    }
    l.isRegistrationUpsellEligible = e;
    l.isLandingPromoEnabled = u;
    l.getLandingPromoExpBucket = c;
}, 98);