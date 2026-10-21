__d("CometLinkTrackingUtils.facebook", [
    "ConstUriUtils",
    "isFacebookURI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        if (e != null && e !== "#" && (n.length || t.length)) {
            let a = o("ConstUriUtils").getUri(e);
            if (a != null) {
                if (r("isFacebookURI")(a)) {
                    if (n.length) {
                        a = a.addQueryParam("__cft__", n);
                    }
                    if (t.length && a != null) {
                        a = a.addQueryParam("__tn__", t.join(""));
                    }
                    if (a != null) {
                        return a.toString();
                    }
                    return e;
                }
                return e;
            }
        }
        return e;
    }
    l.decorateHrefWithTrackingInfo = e;
}, 98);