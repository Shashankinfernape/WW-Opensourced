__d("WATypedArraysEqual", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        if (e === t) {
            return true;
        }
        if (e.length !== t.length) {
            return false;
        }
        return e.every((e, n)=>e === t[n]);
    }
    i.default = e;
}, 66);