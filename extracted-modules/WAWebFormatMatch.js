__d("WAWebFormatMatch", [], function(t, n, r, o, a, i) {
    function e(e, t, n = Infinity) {
        const r = [];
        for(let o = 0; o < t.length; ++o){
            const a = t[o];
            const i = a[0];
            const l = a[1];
            for(var s = i.match(e, l, n), u = [], c = s.length, d = 0, m = s[d]; d < c; m = s[++d]){
                u[d] = [
                    m[0],
                    m[1],
                    m[2],
                    m[3],
                    o,
                    m[4]
                ];
            }
            if (u.length) {
                r.push(u);
            }
        }
        for(let p = 0; p < r.length; p++){
            const _ = t[r[p][0][4]][0].conflictResolvers;
            if (_) {
                for(let f = 0; f < r.length; f++){
                    const g = t[r[f][0][4]][0];
                    const h = _.get(g);
                    h?.(r[p], r[f]);
                }
            }
        }
        const y = [];
        for(let C = 0; C < r.length; ++C){
            y[C] = r[C].length - 1;
        }
        const b = [];
        let v = 0;
        while(r.length){
            for(let S = 0, R = -1; S < r.length; ++S){
                if (r[S][y[S]][0] > R) {
                    v = S;
                    R = r[S][y[S]][0];
                }
            }
            b.push(r[v][y[v]]);
            if (--y[v] < 0) {
                r.splice(v, 1);
                y.splice(v, 1);
            }
        }
        return b;
    }
    i.default = e;
}, 66);