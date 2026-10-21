__d("WAWebABPropsInternalNumber", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebABProps").getABPropConfigValue("system_msg_numbers_fb_branded").split(",");
        const n = o("WAWebABProps").getABPropConfigValue("system_msg_numbers_fb_inc").split(",");
        return t.includes(e) || n.includes(e);
    }
    function s(e) {
        const t = o("WAWebABProps").getABPropConfigValue("system_msg_numbers_fb_branded").split(",");
        return t.includes(e);
    }
    l.getIsInternalNumber = e;
    l.getFbBrandedNumber = s;
}, 98);