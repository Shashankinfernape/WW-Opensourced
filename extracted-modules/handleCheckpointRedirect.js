__d("handleCheckpointRedirect", [
    "ConstUriUtils",
    "goForceFullPageRedirectTo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const n = o("ConstUriUtils").getUri(e)?.addQueryParam("next", location.toString());
        r("goForceFullPageRedirectTo")(n ?? "/");
    }
    l.default = e;
}, 98);