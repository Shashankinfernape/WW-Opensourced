__d("WAWebWaapiAnimateMerge", [], function(t, n, r, o, a, i) {
    const e = new Set([
        "offset",
        "easing",
        "composite"
    ]);
    const l = "linear";
    function s(e) {
        const t = new Map;
        for (const n of e){
            for (const r of u(n)){
                t.set(r, (t.get(r) ?? 0) + 1);
            }
        }
        const a = function(n) {
            return (t.get(n) ?? 0) > 1;
        };
        const i = [];
        e.forEach((e, t)=>{
            const n = u(e);
            const r = n.filter((e)=>!a(e));
            if (r.length !== 0) {
                i.push({
                    keyframes: r.length === n.length ? e.keyframes : c(e.keyframes, r),
                    duration: e.duration,
                    delay: e.delay,
                    easing: e.easing,
                    entryIndices: [
                        t
                    ]
                });
            }
        });
        for (const [s, p] of t){
            if (!(p <= 1)) {
                i.push(m(s, d(e, s)));
            }
        }
        return i;
    }
    function u(t) {
        const n = t.keyframes[t.keyframes.length - 1];
        return Object.keys(n).filter((t)=>!e.has(t));
    }
    function c(e, t) {
        const n = new Set(t);
        const r = [];
        for (const o of e){
            const a = {};
            if (o.offset != null) {
                a.offset = o.offset;
            }
            if (o.easing != null) {
                a.easing = o.easing;
            }
            if (o.composite != null) {
                a.composite = o.composite;
            }
            let i = false;
            for (const l of n){
                const s = o[l];
                if (s != null) {
                    a[l] = String(s);
                    i = true;
                }
            }
            if (i) {
                r.push(a);
            }
        }
        return r;
    }
    function d(e, t) {
        const n = [];
        e.forEach((e, r)=>{
            const o = e.keyframes[e.keyframes.length - 1];
            if (o[t] != null) {
                const a = e.keyframes.length === 2 ? e.keyframes[0] : null;
                const i = a?.[t];
                n.push({
                    from: i != null ? String(i) : null,
                    to: String(o[t]),
                    delay: e.delay,
                    duration: e.duration,
                    easing: e.easing,
                    entryIndex: r
                });
            }
        });
        return n;
    }
    function m(e, t) {
        const n = [].concat(t).sort((e, t)=>e.delay - t.delay || e.entryIndex - t.entryIndex);
        let r = 0;
        const o = n.map((e)=>{
            const t = Math.max(e.delay, r);
            const n = t + Math.max(e.duration, 0);
            r = n;
            return {
                tween: e,
                start: t,
                end: n
            };
        });
        const a = r;
        const i = [];
        let s = null;
        o.forEach(({ end: l, start: u, tween: c }, n)=>{
            const d = a === 0 ? 0 : u / a;
            const m = a === 0 ? 1 : l / a;
            const f = c.from ?? s ?? (n === 0 ? _(e, c.to) : c.to);
            if (n === 0 && d > 0) {
                i.push(p(e, f, {
                    offset: 0,
                    easing: c.easing
                }));
            }
            const g = i[i.length - 1];
            if (g != null && g.offset === d && String(g[e]) === f) {
                g.easing = c.easing;
            } else {
                i.push(p(e, f, {
                    offset: d,
                    easing: c.easing
                }));
            }
            i.push(p(e, c.to, {
                offset: m
            }));
            s = c.to;
        });
        return {
            keyframes: i,
            duration: a,
            delay: 0,
            easing: l,
            entryIndices: n.map((e)=>e.entryIndex)
        };
    }
    function p(e, t, n) {
        const r = {};
        if (n?.offset != null) {
            r.offset = n.offset;
        }
        r[e] = t;
        if (n?.easing != null) {
            r.easing = n.easing;
        }
        return r;
    }
    function _(e, t) {
        if (e !== "transform") {
            return t;
        }
        return t.replace(/([a-zA-Z]+)\(([^)]*)\)/g, (e, t)=>{
            if (/^translate/i.test(t)) {
                return `${t}(0px)`;
            }
            if (/^scale/i.test(t)) {
                return `${t}(1)`;
            }
            if (/^rotate/i.test(t)) {
                return `${t}(0deg)`;
            }
            return `${t}(0)`;
        });
    }
    i.mergeNodeEntries = s;
}, 66);