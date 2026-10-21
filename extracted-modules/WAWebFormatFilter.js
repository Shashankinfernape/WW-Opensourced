__d("WAWebFormatFilter", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (e.length === 1) {
            return e;
        }
        const n = [];
        let r;
        while(r = e.pop()){
            const o = r;
            const a = o[0];
            const i = o[3];
            const l = o[4];
            const s = t[l];
            const u = s[0];
            const c = s[2];
            let d = true;
            const m = n.length;
            for(let p = m - 1; p >= 0; --p){
                const _ = n[p];
                const f = _[2];
                const g = _[3];
                const h = _[4];
                if (!(a > g)) {
                    const y = t[h];
                    const C = y[0];
                    const b = y[2];
                    if (i > f) {
                        if (c < b && n.splice(p, 1)) {
                            continue;
                        }
                        d = false;
                        break;
                    }
                    if (C.mutates && !(d = false)) {
                        break;
                    }
                    if (u.compatibility) {
                        if (!u.nestable(C)) {
                            d = false;
                        }
                        break;
                    }
                    if (!(!u.nestable(C) && !C.compatibility && c < b && n.splice(p, 1)) && !u.compatibility && !C.format) {
                        d = false;
                        break;
                    }
                }
            }
            if (d) {
                n.push(r);
            }
        }
        return n;
    }
    i.default = e;
}, 66);