__d("GHLNetworkLayer", [
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        try {
            if (r("gkx")("8068") && o("GHLDetectionUtils").isXHRModified(t.XMLHttpRequest)) {
                for(var e = 5, n = Object.getPrototypeOf(t.XMLHttpRequest), a = 0; n != null && a < e && o("GHLDetectionUtilsPreludeSafe").normalize(n.toString())?.includes("{ [native code] }") !== true;){
                    n = Object.getPrototypeOf(n);
                    a++;
                }
                if (n != null && !o("GHLDetectionUtils").isXHRModified(n)) {
                    return n;
                }
            }
            return null;
        } catch (error) {
            r("FBLogger")("ghl").catching(error instanceof Error ? error : r("err")(String(error))).mustfix("error while getGHLXhr");
            return null;
        }
    }
    l.getGHLXhr = e;
}, 98);