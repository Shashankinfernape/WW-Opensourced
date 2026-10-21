__d("HeroHoldLoggingBoundaryRegistry", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 100;
    const l = new Map;
    function s(e) {
        if (!l.has(e)) {
            l.set(e, {
                holdIDs: [],
                name: null
            });
        }
    }
    function u(e, t) {
        const n = l.get(e);
        if (n != null) {
            n.name = t;
        }
    }
    function c(t, n) {
        const o = l.get(t)?.holdIDs;
        if (o != null) {
            o.push(n);
            if (o.length > e) {
                o.shift();
            }
        }
    }
    function d(e) {
        return l.get(e)?.name;
    }
    function m(e) {
        return l.get(e)?.holdIDs ?? [];
    }
    function p(e) {
        l.delete(e);
    }
    i.addBoundary = s;
    i.updateBoundaryName = u;
    i.addHoldID = c;
    i.getBoundaryName = d;
    i.getHoldIDs = m;
    i.removeBoundary = p;
}, 66);