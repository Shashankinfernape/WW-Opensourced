__d("WAArraysShallowEqual", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return e === t;
    }
    function l(t, n, r = e) {
        if (t === n) {
            return true;
        }
        if (t.length !== n.length) {
            return false;
        }
        return t.every((e, t)=>r(e, n[t]));
    }
    i.default = l;
}, 66);