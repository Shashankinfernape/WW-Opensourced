__d("HeroPendingPlaceholderTracker", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Map;
    function l(t) {
        if (!e.has(t)) {
            e.set(t, new Map);
        }
    }
    function s(t, n, description, startTime, pageletStack) {
        const i = e.get(t);
        if (i) {
            i.set(n, {
                description,
                startTime,
                pageletStack
            });
        }
    }
    function u(t) {
        const n = e.get(t);
        if (n) {
            return Array.from(n.values());
        }
        return [];
    }
    function c(t) {
        e.delete(t);
    }
    function d(t, n) {
        const r = e.get(t);
        if (r) {
            r.delete(n);
        }
    }
    function m(t) {
        return e.has(t);
    }
    i.addInteraction = l;
    i.addPlaceholder = s;
    i.dump = u;
    i.removeInteraction = c;
    i.removePlaceholder = d;
    i.isInteractionActive = m;
}, 66);