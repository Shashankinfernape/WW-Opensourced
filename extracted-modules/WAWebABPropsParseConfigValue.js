__d("WAWebABPropsParseConfigValue", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
        if (e == null || t == null) {
            return n;
        }
        if (t === "bool") {
            return e === "1" || e === "True" || e === "true";
        }
        if (t === "int") {
            return parseInt(e, 10);
        }
        if (t === "float") {
            return parseFloat(e);
        }
        return e;
    }
    i.parseConfigValue = e;
}, 66);