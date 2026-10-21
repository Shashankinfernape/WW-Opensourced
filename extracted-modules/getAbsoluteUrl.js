__d("getAbsoluteUrl", [
    "ConstUriUtils",
    "FBLogger",
    "isBlobUrl",
    "isDataUrl",
    "isMailToUrl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e == null || e.trim() === "#" || r("isMailToUrl")(e) || r("isDataUrl")(e) || r("isBlobUrl")(e)) {
            return e;
        }
        const n = o("ConstUriUtils").getUri(e)?.getQualifiedUri()?.toString();
        if (n == null) {
            r("FBLogger")("comet_infra").blameToPreviousFrame().mustfix("must pass a valid href to getAbsoluteUrl");
        }
        return n;
    }
    l.default = e;
}, 98);