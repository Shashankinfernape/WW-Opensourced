__d("WAWebABPropsCAPISupportNumber", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebABProps").getABPropConfigValue("in_app_support_capi_number_prefixes");
        if (t == null || t === "") {
            return false;
        }
        return t.split(",").some((t)=>e.startsWith(t));
    }
    l.default = e;
}, 98);