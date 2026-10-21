__d("ResourceTimingAPI", [
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = false;
    let u = false;
    function c() {
        if (!s) {
            if (typeof ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).getEntriesByName) !== "function" || typeof ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).getEntriesByType) !== "function") {
                u = false;
                s = true;
            } else if ((e || (e = r("performance"))).getEntriesByType("resource").length > 0) {
                u = true;
                s = true;
            }
        }
        return u;
    }
    function d(t) {
        if (typeof (e || (e = r("performance"))).getEntriesByName !== "function") {
            return null;
        }
        let n = (e || (e = r("performance"))).getEntriesByName(t);
        if (n.length === 0 && t.indexOf("#") >= 0) {
            n = (e || (e = r("performance"))).getEntriesByName(t.split("#")[0]);
        }
        return n && n[0];
    }
    l.canUseResourceTimingAPI = c;
    l.getResourceTiming = d;
}, 98);