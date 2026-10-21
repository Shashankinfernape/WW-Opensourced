__d("shallowEqual", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
    function l(e, t) {
        if (e === t) {
            return e !== 0 || t !== 0 || 1 / e === 1 / t;
        }
        return e !== e && t !== t;
    }
    function s(t, n) {
        if (l(t, n)) {
            return true;
        }
        if (typeof t !== "object" || t === null || typeof n !== "object" || n === null) {
            return false;
        }
        const r = Object.keys(t);
        const o = Object.keys(n);
        if (r.length !== o.length) {
            return false;
        }
        for(let a = 0; a < r.length; a++){
            if (!e(n, r[a]) || !l(t[r[a]], n[r[a]])) {
                return false;
            }
        }
        return true;
    }
    i.default = s;
}, 66);