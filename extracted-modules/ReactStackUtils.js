__d("ReactStackUtils", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = n(e);
        if (r != null && t != null) {
            const o = r.indexOf(t);
            if (o >= 0) {
                r.splice(o);
            }
        }
        return r;
    }
    i.getTrimmedReactStack = e;
}, 66);