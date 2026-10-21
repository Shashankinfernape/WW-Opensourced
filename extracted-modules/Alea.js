__d("Alea", [], function(t, n, r, o, a, i) {
    function e() {
        let e = 4022871197;
        const t = function(n) {
            for(let t = n.toString(), r = 0; r < t.length; r++){
                e += t.charCodeAt(r);
                let o = 0.02519603282416938 * e;
                e = o >>> 0;
                o -= e;
                o *= e;
                e = o >>> 0;
                o -= e;
                e += o * 4294967296;
            }
            return (e >>> 0) * 2.3283064365386963e-10;
        };
        t.version = "Mash 0.9";
        return t;
    }
    function l(...i) {
        let t = 0;
        let n = 0;
        let r = 0;
        let o = 1;
        const s = i.length > 0 ? i : [
            new Date
        ];
        let u;
        u = e();
        t = u(" ");
        n = u(" ");
        r = u(" ");
        for(let c = 0; c < s.length; c++){
            t -= u(s[c]);
            if (t < 0) {
                t += 1;
            }
            n -= u(s[c]);
            if (n < 0) {
                n += 1;
            }
            r -= u(s[c]);
            if (r < 0) {
                r += 1;
            }
        }
        u = null;
        const d = function() {
            const e = 2091639 * t + o * 2.3283064365386963e-10;
            t = n;
            n = r;
            r = e - (o = e | 0);
            return r;
        };
        d.version = "Alea 0.9";
        d.args = s;
        return d;
    }
    i.default = l;
}, 66);