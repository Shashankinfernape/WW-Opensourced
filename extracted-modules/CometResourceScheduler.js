__d("CometResourceScheduler", [
    "Bootloader",
    "ErrorGuard"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set;
    const u = new Set;
    let c = [];
    const d = {
        executedDeferredCallback: 0,
        getPendingCallbacks: function() {
            return c;
        },
        queuedDeferredCallback: 0
    };
    function m(e) {
        const t = [];
        for (const n of e){
            if (!u.has(n)) {
                u.add(n);
                t.push(n);
            }
        }
        if (t.length) {
            _(t);
        }
    }
    function p(e) {
        c.push(e);
        if (s.size === 0) {
            f();
        }
    }
    function _(e) {
        e.forEach((e)=>s.add(e));
        r("Bootloader").loadResources(e, {
            onAll: function() {
                e.forEach((e)=>s.delete(e));
                if (!s.size) {
                    f();
                }
            }
        });
    }
    function f() {
        const t = c;
        c = [];
        t.forEach((t)=>(e || (e = r("ErrorGuard"))).applyWithGuard(t, null, []));
    }
    l.__debug = d;
    l.registerHighPriHashes = m;
    l.onHighPriComplete = p;
}, 98);