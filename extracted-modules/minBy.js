__d("minBy", [], function(t, n, r, o, a, i) {
    const e = function(t, n) {
        return t - n;
    };
    function l(t, n, r) {
        const o = r || e;
        let a = void 0;
        let i = null;
        for (const l of t){
            const s = n(l);
            if (i === null || o(s, i) < 0) {
                a = l;
                i = s;
            }
        }
        return a;
    }
    i.default = l;
}, 66);