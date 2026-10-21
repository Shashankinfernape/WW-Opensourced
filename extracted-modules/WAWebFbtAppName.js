__d("WAWebFbtAppName", [
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (r("WAWebEnvironment").isWindows) {
            return r("WAWebFbtCommon")("WhatsApp for Windows");
        }
        return r("WAWebFbtCommon")("WhatsApp Web");
    }
    function s() {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = e();
            t[0] = n;
        } else {
            n = t[0];
        }
        return n;
    }
    function u() {
        if (r("WAWebEnvironment").isWindows) {
            return r("WAWebFbtCommon")("WhatsApp");
        }
        return r("WAWebFbtCommon")("WhatsApp Web");
    }
    function c() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u();
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.fbtWAWebAppShortName = e;
    l.WAWebAppShortName = s;
    l.fbtWAWebAppShortNameWithoutWindows = u;
    l.WAWebAppShortNameWithoutWindows = c;
}, 98);