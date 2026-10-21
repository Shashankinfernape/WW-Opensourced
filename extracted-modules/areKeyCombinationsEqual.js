__d("areKeyCombinationsEqual", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        if (e == null || t == null) {
            return e === t;
        }
        return e.key !== "" && t.key !== "" && e.key === t.key && e.alt === true == (t.alt === true) && e.command === true == (t.command === true) && e.shift === true == (t.shift === true);
    }
    i.default = e;
}, 66);