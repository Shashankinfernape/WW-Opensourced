__d("WAArrayUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e;
    }
    function l(e, t) {
        const n = e[e.length - 1];
        e.pop();
        if (t < e.length) {
            e[t] = n;
        }
    }
    function* s(e, t) {
        for(let n = 0; n < e.length; n += t){
            yield e.slice(n, n + t);
        }
    }
    function u(t, n) {
        return c(t, n, e);
    }
    function c(e, t, n) {
        const r = new Map;
        for (const o of e){
            const i = t(o);
            const l = r.get(i) ?? [];
            l.push(n(o));
            r.set(i, l);
        }
        return r;
    }
    i.removeIndexWithoutPreservingOrder = l;
    i.peekEvery = s;
    i.groupBy = u;
    i.groupByAndMap = c;
}, 66);