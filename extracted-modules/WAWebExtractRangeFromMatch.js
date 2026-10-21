__d("WAWebExtractRangeFromMatch", [], function(t, n, r, o, a, i) {
    function e(e, t = 0) {
        const e_index = e.index;
        const r = e[0];
        const o = e_index + r.length - 1;
        const a = [
            e_index,
            e_index,
            o,
            o,
            e
        ];
        if (t) {
            const l = e[t] ?? "";
            a[1] = e_index + r.indexOf(l);
            a[2] = a[1] + l.length - 1;
        }
        return a;
    }
    i.default = e;
}, 66);