__d("WAPromiseManagement", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = new Map;
        return function(r) {
            const o = e(r);
            const a = n.get(o);
            if (a) {
                return a;
            }
            let i;
            try {
                i = Promise.resolve(t(r));
            } catch (e) {
                i = Promise.reject(e);
            }
            const l = i.finally(()=>void n.delete(o));
            n.set(o, l);
            return l;
        };
    }
    const l = new Set;
    function s(e) {
        l.add(e);
        e.finally(()=>{
            l.delete(e);
        });
    }
    i.cacheWhilePending = e;
    i.preventGarbageCollection = s;
}, 66);