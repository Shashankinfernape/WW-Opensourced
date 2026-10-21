__d("WAWebFalcoCanonicalMdId", [
    "WAWebABProps",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (o("WAWebABProps").getABPropConfigValue("falco_md_id_fix_web_enabled")) {
            return o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
        }
        return o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()?.getDeviceId();
    }
    l.default = e;
}, 98);