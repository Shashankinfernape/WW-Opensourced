__d("WAWebPairEligibilityConfig", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e() {
        return true;
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("capi_messaging_pairs_client_enabled") === true;
    }
    function u(e) {
        return o("WAWebABProps").getABPropConfigValue(e.gate) === true;
    }
    l.isPairConsumerUnderEpd = e;
    l.isPairMasterGateEnabled = s;
    l.isPairAdopterGateEnabled = u;
}, 98);