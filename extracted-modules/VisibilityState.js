__d("VisibilityState", [
    "VisibilityAPI",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1000;
    const u = [];
    let c = null;
    let d = false;
    const m = new Set;
    if (!d) {
        if (o("VisibilityAPI").isVisibilityHidden()) {
            c = o("VisibilityAPI").getEarliestHiddenStartTime();
        }
        d = true;
    }
    if (o("VisibilityAPI").canUseVisibilityAPI) {
        o("VisibilityAPI").onVisibilityChange(function(e) {
            p(e, o("VisibilityAPI").isVisibilityHidden());
            m.forEach((t)=>{
                t(e, o("VisibilityAPI").isVisibilityHidden());
            });
        });
    }
    function p(e, t) {
        if (t) {
            c = e;
        } else if (c != null) {
            u.push({
                end: e,
                start: c
            });
            if (u.length > s) {
                u.shift();
            }
            c = null;
        }
    }
    function _(e) {
        m.add(e);
        return function() {
            m.delete(e);
        };
    }
    function f(e) {
        m.delete(e);
    }
    function g(t, n) {
        const o = [];
        const a = Array.from(u);
        if (c != null) {
            const i = c;
            a.push({
                end: (e || (e = r("performanceNow")))(),
                start: i
            });
        }
        a.forEach((e)=>{
            if (e.start <= t && e.end > t) {
                if (e.end <= n) {
                    o.push({
                        end: e.end,
                        start: t
                    });
                } else {
                    o.push({
                        end: n,
                        start: t
                    });
                }
            } else if (e.start > t && e.start <= n) {
                if (e.end <= n) {
                    o.push({
                        end: e.end,
                        start: e.start
                    });
                } else {
                    o.push({
                        end: n,
                        start: e.start
                    });
                }
            }
        });
        return o;
    }
    function h(e, t) {
        return g(e, t).length > 0;
    }
    l.subscribe = _;
    l.unsubscribe = f;
    l.getHiddenSpans = g;
    l.wasHidden = h;
}, 98);