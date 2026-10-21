__d("isWAWebFeatureDetectionAppleTouchscreen", [
    "WAWebBrowserInfo",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = r("WAWebBrowserInfo")().os.toLowerCase();
        switch(e){
            case "mac os":
                return !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
            case "ios":
                return o("WAWebUA").UA.parser.getDevice().type === "tablet";
            default:
                return false;
        }
    }
    l.default = e;
}, 98);