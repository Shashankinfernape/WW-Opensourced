__d("RSTEventsMessageQueue", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Map;
    function l(t, n) {
        if (!e.has(t)) {
            e.set(t, []);
        }
        const r = e.get(t);
        if (r && r.indexOf(n) === -1) {
            r.push(n);
        }
    }
    function s(t, n) {
        const r = e.get(t);
        if (r != null) {
            r.forEach((e)=>e(n));
        }
    }
    i.subscribe = l;
    i.notify = s;
}, 66);