__d("WAWebAfterReadUtils", [
    "WALogger",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        return o("WAWebABProps").getABPropConfigValue("after_read_sending_enabled");
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("after_read_receiver_enabled");
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("after_read_fallback_duration");
    }
    function d(e) {
        if (e <= 0) {
            return false;
        }
        return m().includes(e);
    }
    function m() {
        const t = o("WAWebABProps").getABPropConfigValue("dm_receiver_after_read_allow_values");
        try {
            const n = JSON.parse(t);
            const r = n.timers;
            return r ?? [];
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[dm:afterread] dm_receiver_after_read_allow_values parse: ",
                ""
            ])), error);
            return [];
        }
    }
    l.isAfterReadOptionAvailable = s;
    l.isAfterReadEnabled = u;
    l.getAfterReadFallbackDuration = c;
    l.isAfterReadDuration = d;
    l.getAfterReadAllowedValues = m;
}, 98);