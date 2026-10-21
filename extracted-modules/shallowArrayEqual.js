__d("shallowArrayEqual", [
    "isNullish"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e === t) {
            return true;
        }
        if (r("isNullish")(e) || r("isNullish")(t) || e.length !== t.length) {
            return false;
        }
        for(let n = 0, o = e.length; n < o; n++){
            if (e[n] !== t[n]) {
                return false;
            }
        }
        return true;
    }
    l.default = e;
}, 98);