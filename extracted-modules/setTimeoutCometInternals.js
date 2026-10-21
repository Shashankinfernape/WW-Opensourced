__d("setTimeoutCometInternals", [
    "JSScheduler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    let u = 0;
    function c(t) {
        if (t != null) {
            const n = s.get(t);
            if (n !== undefined) {
                s.delete(t);
                (e || (e = r("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(n);
            }
        }
    }
    function d(t) {
        if (t != null) {
            const n = s.get(t);
            if (n !== undefined) {
                s.delete(t);
                (e || (e = r("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(n);
            }
        }
    }
    function m(t, n, o, ...i) {
        const c = u;
        u += 1;
        if (typeof n !== "function") {
            return c;
        }
        const d = function() {
            const a = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(t, o, d);
            s.set(c, a);
            n(...i);
        };
        const m = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(t, o, d);
        s.set(c, m);
        return c;
    }
    function p(t, n, o, ...i) {
        const c = u;
        u += 1;
        if (typeof n !== "function") {
            return c;
        }
        const d = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(t, o, function() {
            s.delete(c);
            n(...i);
        });
        s.set(c, d);
        return c;
    }
    l.clearInterval_DO_NOT_USE = c;
    l.clearTimeout_DO_NOT_USE = d;
    l.setIntervalAtPriority_DO_NOT_USE = m;
    l.setTimeoutAtPriority_DO_NOT_USE = p;
}, 98);