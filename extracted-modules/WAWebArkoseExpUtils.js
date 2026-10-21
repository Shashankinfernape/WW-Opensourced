__d("WAWebArkoseExpUtils", [
    "$InternalEnum",
    "WAWebAutoLogoutGating",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        NONE: -1,
        CONTROL: 0,
        TEST: 1,
        DEV: 2
    });
    function s() {
        if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
            const t = window.parent;
            const n = t.arkoseVariant;
            const r = e.cast(n);
            return r ?? u();
        }
        const a = u();
        window.arkoseVariant = a;
        return a;
    }
    function u() {
        if (r("gkx")("26256") || !r("gkx")("18518")) {
            return e.NONE;
        }
        if (r("gkx")("26258")) {
            if (r("gkx")("19648")) {
                return e.TEST;
            }
            return e.CONTROL;
        }
        if (r("gkx")("7634")) {
            return e.DEV;
        }
        return e.NONE;
    }
    function c() {
        return s() === e.TEST || s() === e.DEV;
    }
    l.ArkoseVariantType = e;
    l.getArkoseVariant = s;
    l.isArkoseAllowedToRun = c;
}, 98);