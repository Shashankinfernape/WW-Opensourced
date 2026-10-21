__d("WAWebTosGatingUtils", [
    "WAWebABProps",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("tos_3_client_gating_enabled");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("tos_client_state_fetch_iteration");
    }
    function u() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("tos_client_state_fetch_enabled");
    }
    l.tos3GatingEnabled = e;
    l.tosFetchIteration = s;
    l.tosFetchEnabled = u;
}, 98);