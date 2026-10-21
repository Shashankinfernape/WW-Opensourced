__d("WAWebTosCountryGating", [
    "WAWebABProps",
    "WAWebABPropsInternalNumber",
    "WAWebHandleMsgTypes.flow"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebABProps").getABPropConfigValue("country_client_gating_enabled")) {
            return e.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook && !o("WAWebABPropsInternalNumber").getFbBrandedNumber(e.id.user);
        }
        return false;
    }
    l.shouldBlockByCountry = e;
}, 98);