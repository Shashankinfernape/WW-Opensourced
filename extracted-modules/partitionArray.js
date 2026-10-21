__d("partitionArray", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = [];
        const o = [];
        e.forEach((a, i)=>{
            if (t.call(n, a, i, e)) {
                r.push(a);
            } else {
                o.push(a);
            }
        });
        return [
            r,
            o
        ];
    }
    i.default = e;
}, 66);