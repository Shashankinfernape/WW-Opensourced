__d("WAWebComputeListNumbering", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = [];
        let n = null;
        for (const r of e){
            if (r == null) {
                t.push(null);
                n = null;
                continue;
            }
            const o = n ?? r;
            t.push(o);
            n = o + 1;
        }
        return t;
    }
    i.computeListNumbering = e;
}, 66);