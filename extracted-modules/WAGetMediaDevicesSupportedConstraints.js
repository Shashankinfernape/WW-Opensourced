__d("WAGetMediaDevicesSupportedConstraints", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        try {
            const n = navigator.mediaDevices?.getSupportedConstraints();
            return n;
        } catch (error) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getSupportedConstraints is not supported in this browser. Error: ",
                ""
            ])), error);
            return null;
        }
    }
    l.getMediaDevicesSupportedConstraints = s;
}, 98);