__d("WAWebCurrentUser", [
    "WAWebABProps",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return r("gkx")("26258") === false || o("WAWebABProps").getABPropConfigValue("is_meta_employee_or_internal_tester");
    }
    l.isEmployee = e;
}, 98);