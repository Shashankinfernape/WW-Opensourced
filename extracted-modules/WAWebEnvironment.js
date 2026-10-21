__d("WAWebEnvironment", [
    "WAWebPwaDocumentMetadataUtils",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const isWindows = r("gkx")("4112");
    const isWeb = !isWindows;
    const isGuest = r("gkx")("10314");
    function getIsShowroom() {
        return typeof window !== "undefined" && window.location.pathname.startsWith("/showroom");
    }
    function getEnvironment() {
        if (r("gkx")("26258")) {
            return "prod";
        }
        if (r("gkx")("26259")) {
            return "intern";
        }
        return "dev";
    }
    function getSubPlatform() {
        if (isWindows) {
            return "win_hybrid";
        }
        if (o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()) {
            return "pwa";
        }
        return "web";
    }
    const p = {
        isWeb,
        isWindows,
        isGuest,
        getEnvironment,
        getSubPlatform,
        getIsShowroom
    };
    l.default = p;
}, 98);