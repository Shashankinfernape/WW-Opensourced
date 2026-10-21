__d("maxBy", [
    "minBy"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        return t - n;
    };
    function s(t, n, o) {
        const a = o || e;
        return r("minBy")(t, n, function(e, t) {
            return a(t, e);
        });
    }
    l.default = s;
}, 98);