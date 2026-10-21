__d("WAWebLinkDeviceScreenGatedUtils", [
    "$InternalEnum",
    "WAWebAutoLogoutGating",
    "gkx",
    "isWAWebFeatureDetectionAndroidTablet",
    "isWAWebFeatureDetectionAppleTouchscreen"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        M1_WINNER: 1
    });
    function s() {
        if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
            const t = window.parent;
            const n = t.linkDeviceVariant;
            const r = e.cast(n);
            return r ?? u();
        }
        const a = u();
        window.linkDeviceVariant = a;
        return a;
    }
    function u() {
        return e.M1_WINNER;
    }
    function c() {
        if (r("gkx")("16993")) {
            if (r("gkx")("18089")) {
                return "test";
            }
            return "control";
        }
        return "none";
    }
    function d() {
        return !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && r("gkx")("17622");
    }
    function m(e = o("isWAWebFeatureDetectionAndroidTablet").isWAWebFeatureDetectionAndroidTablet()) {
        return d() && e && r("gkx")("27147");
    }
    function p() {
        if (!d() || o("isWAWebFeatureDetectionAndroidTablet").isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired() || !o("isWAWebFeatureDetectionAndroidTablet").isWAWebFeatureDetectionAndroidTablet()) {
            return "none";
        }
        if (m(true)) {
            return "test";
        }
        return "control";
    }
    function _() {
        return r("isWAWebFeatureDetectionAppleTouchscreen")() && r("gkx")("20339");
    }
    l.LinkDeviceScreenVariantType = e;
    l.getLinkDeviceScreenVariant = s;
    l.getOptimizedRegFromWebVariant = c;
    l.isAndroidTabletOverlayPotentiallyEnabled = d;
    l.isAndroidTabletOverlayEnabled = m;
    l.getAndroidTabletOverlayExperiment = p;
    l.isAppleTouchscreenOverlayEnabled = _;
}, 98);