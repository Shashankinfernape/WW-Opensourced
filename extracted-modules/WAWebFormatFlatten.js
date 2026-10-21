__d("WAWebFormatFlatten", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = [];
        for(let n = 0; n < e.length; ++n){
            for(let r = 0; r < e[n].length; ++r){
                const o = e[n][r];
                const a = o[0];
                const i = o[1];
                t.push([
                    a,
                    i,
                    n
                ]);
            }
        }
        return t;
    }
    i.default = e;
}, 66);