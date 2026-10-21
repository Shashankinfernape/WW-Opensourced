__d("WASmaxChildren", [
    "WADeepEquals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (t == null) {
            return null;
        }
        return e(t);
    }
    function s(e, t) {
        if (t == null) {
            return null;
        }
        if (t) {
            return e();
        }
    }
    function u(e, t) {
        if (t) {
            for(let n = 1; n < t.length; n++){
                if (!o("WADeepEquals").deepEqual(t[n], t[0])) {
                    const r = new Error("expected all homogeneous children to be equal, but they were not");
                    r.stack;
                    throw r;
                }
            }
        }
        const a = d(e, t, 0, 1 / 0);
        return a;
    }
    function c(e, t) {
        return m(e, t, 0, 1 / 0);
    }
    function d(e, t, n, r) {
        if (t == null) {
            if (n > 0) {
                const o = new Error(`expected at least ${n} children, but none provided`);
                o.stack;
                throw o;
            }
            return [];
        }
        const a = t.length;
        if (a < n) {
            const i = new Error(`expected at least ${n} children, but found ${a}`);
            i.stack;
            throw i;
        } else if (a > r) {
            const l = new Error(`expected at most ${r} children, but found ${a}`);
            l.stack;
            throw l;
        }
        return t.map((t)=>e(t));
    }
    function m(e, t, n, r) {
        if (t === 0) {
            if (n > 0) {
                const o = new Error(`expected at least ${n} children, but none provided`);
                o.stack;
                throw o;
            }
            return [];
        }
        if (t < n) {
            const a = new Error(`expected at least ${n} children, but found ${t}`);
            a.stack;
            throw a;
        } else if (t > r) {
            const i = new Error(`expected at most ${r} children, but found ${t}`);
            i.stack;
            throw i;
        }
        const l = [];
        for(let s = 0; s < t; s++){
            l.push(e());
        }
        return l;
    }
    l.OPTIONAL_CHILD = e;
    l.HAS_OPTIONAL_CHILD = s;
    l.HOMOGENEOUS_CHILD = u;
    l.HOMOGENEOUS_CHILD_COUNT = c;
    l.REPEATED_CHILD = d;
    l.REPEATED_CHILD_COUNT = m;
}, 98);