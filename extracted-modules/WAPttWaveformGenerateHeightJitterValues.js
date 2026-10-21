__d("WAPttWaveformGenerateHeightJitterValues", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (e == null || t == null) {
            return [
                0
            ];
        }
        const n = t / 4;
        const r = e / n;
        let o = [];
        for(let a = -n; a < 0; a++){
            o.push(r * a);
        }
        for(let i = 0; i < n; i++){
            o.push(r * i);
        }
        o = o.concat([].concat(o).reverse());
        return o;
    }
    function l(t, n, r) {
        if (t == null || n == null || r == null) {
            return [
                [
                    0
                ]
            ];
        }
        const o = e(t, r);
        const a = [];
        for(let i = 0; i < r; i++){
            const l = e(o[i], n);
            a.push(l);
        }
        return a;
    }
    i.generateHeightJitterValues = e;
    i.generateJitterDistributionArrays = l;
}, 66);