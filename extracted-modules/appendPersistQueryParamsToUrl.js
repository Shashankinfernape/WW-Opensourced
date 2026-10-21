__d("appendPersistQueryParamsToUrl", [
    "CometPersistQueryParams",
    "ConstUriUtils",
    "isRelativeURL"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return o("ConstUriUtils").getUri(e)?.addQueryParams(new Map(Object.entries(t)))?.toString() ?? e;
    }
    function s(t) {
        const n = o("ConstUriUtils").getUri(t);
        if (n == null) {
            return t;
        }
        if (r("isRelativeURL")(t) || n.getDomain() === "") {
            return e(t, r("CometPersistQueryParams").relative);
        }
        const a = n.getDomain().split(".").slice(-2).join(".");
        if (r("CometPersistQueryParams").domain[a] != null) {
            return e(t, r("CometPersistQueryParams").domain[a]);
        }
        return t;
    }
    l.default = s;
}, 98);