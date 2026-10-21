__d("WAPttComposerScaleWaveform", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        if (t === e.length) {
            return e;
        }
        if (t === 0) {
            return [];
        }
        if (e.length === 0) {
            return new Array(t).fill(0);
        }
        if (t > e.length) {
            return u(e, t);
        }
        return c(e, t);
    }
    function u(e, t) {
        if (!(t > e.length)) {
            s(0, 75746, t, e.length);
        }
        let n;
        if (e.length === 1) {
            n = 0;
        } else {
            const r = (t - e.length) / (e.length - 1);
            n = 1 / (1 + r);
        }
        const o = [];
        if (t >= 1) {
            o.push(e[0]);
        }
        for(let a = 1; a < t - 1; a++){
            const i = a * n;
            const l = Math.floor(i);
            const u = i - l;
            o.push(d(e[l], e[Math.ceil(i)], u));
        }
        if (t >= 2) {
            o.push(e[e.length - 1]);
        }
        return o;
    }
    function c(e, t) {
        if (!(t < e.length)) {
            s(0, 75747, t, e.length);
        }
        const n = [];
        const r = t / e.length;
        let o = 0;
        let a = 0;
        let i = 0;
        for (const l of e){
            o += l;
            i += 1;
            a += r;
            if (a >= 1) {
                n.push(o / i);
                i = 0;
                o = 0;
                a -= 1;
            }
        }
        if (i > 0) {
            n.push(o / i);
        }
        return n;
    }
    function d(e, t, n) {
        return e + (t - e) * n;
    }
    l.default = e;
}, 98);