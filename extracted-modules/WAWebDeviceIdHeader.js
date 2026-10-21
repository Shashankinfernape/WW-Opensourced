__d("WAWebDeviceIdHeader", [
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e() {
        const t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()?.getDeviceId();
        if (t != null) {
            return String(t);
        }
        return null;
    }
    l.getDeviceIdHeaderValue = e;
}, 98);