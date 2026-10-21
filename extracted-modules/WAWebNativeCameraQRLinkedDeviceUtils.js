__d("WAWebNativeCameraQRLinkedDeviceUtils", [
    "$InternalEnum",
    "WAWebAutoLogoutGating",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        NONE: -1,
        CONTROL: 0,
        TEST: 1
    });
    function s() {
        if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
            const t = window.parent;
            const n = t.nativeCameraVariant;
            const r = e.cast(n);
            return r ?? u();
        }
        const a = u();
        window.nativeCameraVariant = a;
        return a;
    }
    function u() {
        if (!r("gkx")("14464") || r("gkx")("26256")) {
            return e.NONE;
        }
        if (r("gkx")("15235")) {
            return e.TEST;
        }
        return e.CONTROL;
    }
    function c() {
        return s() === e.TEST;
    }
    l.NativeCameraQRLinkedDeviceVariantType = e;
    l.getNativeCameraQRLinkedDeviceVariant = s;
    l.isNativeCameraQRLinkedDeviceTest = c;
}, 98);