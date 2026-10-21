__d("WAWebWamPlatform", [
    "WAWebEnvironment",
    "WAWebPwaDocumentMetadataUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (r("WAWebEnvironment").isWindows === true) {
            return "WIN_HYBRID";
        }
        if (o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()) {
            return "PWA";
        }
        return "WEB";
    }
    l.getWamPlatform = e;
}, 98);