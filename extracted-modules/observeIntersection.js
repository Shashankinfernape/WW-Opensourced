__d("observeIntersection", [
    "invariant",
    "ErrorGuard"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = typeof WeakMap === "function";
    const c = {
        __noRoot: true
    };
    const d = u ? new WeakMap : new Map;
    function m(e) {
        let e_threshold = e.threshold;
        if (Array.isArray(e_threshold)) {
            const n = {};
            e_threshold.forEach((e)=>{
                n[String(e)] = true;
            });
            e_threshold = Object.keys(n).sort();
        }
        const r = babelHelpers.extends({}, e, {
            threshold: e_threshold
        });
        const o = {};
        Object.keys(r).sort().forEach((e)=>{
            o[e] = r[e];
        });
        return JSON.stringify(o);
    }
    function p(t, n, o = {}) {
        const a = m({
            rootMargin: o.rootMargin,
            scrollMargin: o.scrollMargin,
            threshold: o.threshold
        });
        let i = o.root || c;
        let l = d.get(i);
        if (l == null) {
            l = {};
            d.set(i, l);
        }
        let p = l[a];
        if (p == null) {
            let _;
            if (Array.isArray(o.threshold)) {
                _ = o.threshold.slice();
            } else if (typeof o.threshold === "number") {
                _ = [
                    o.threshold
                ];
            }
            const intersectionObserver = new IntersectionObserver(function(t) {
                t.forEach((t)=>{
                    if (p == null) {
                        s(0, 2439);
                    }
                    let n = [];
                    const reactFragments = t.target.reactFragments;
                    if (reactFragments != null) {
                        reactFragments.forEach((e)=>{
                            const r = p?.targetToCallbacksMap.get(e);
                            if (r != null) {
                                n = n.concat(r);
                            }
                        });
                    }
                    const a = p.targetToCallbacksMap.get(t.target);
                    if (a != null) {
                        n = n.concat(a);
                    }
                    if (n.length > 0) {
                        n.forEach((n)=>{
                            (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [
                                t
                            ], {
                                name: "observeIntersection"
                            });
                        });
                    }
                });
            }, babelHelpers.extends({}, o, {
                threshold: _
            }));
            p = {
                intersectionObserver,
                referenceCount: 0,
                targetToCallbacksMap: u ? new WeakMap : new Map
            };
            l[a] = p;
        }
        let g = p.targetToCallbacksMap.get(t);
        if (g == null) {
            if (t instanceof Element) {
                p.intersectionObserver.observe(t);
            } else {
                t.observeUsing(p.intersectionObserver);
            }
            p.referenceCount += 1;
            g = [];
            p.targetToCallbacksMap.set(t, g);
        }
        g.push(n);
        let h = t;
        let y = n;
        let C = false;
        let b = function() {
            if (!C) {
                const e = h;
                const t = y;
                if (e == null) {
                    s(0, 173939);
                }
                if (t == null) {
                    s(0, 173937);
                }
                const n = p.targetToCallbacksMap.get(e);
                if (n == null) {
                    s(0, 2440);
                }
                if (n.length === 1) {
                    if (e instanceof Element) {
                        p.intersectionObserver.unobserve(e);
                    } else {
                        e.unobserveUsing(p.intersectionObserver);
                    }
                    p.targetToCallbacksMap.delete(e);
                    p.referenceCount -= 1;
                    h = null;
                } else {
                    const r = n.indexOf(t);
                    if (r === -1) {
                        s(0, 2441);
                    }
                    n.splice(r, 1);
                }
                if (p.referenceCount === 0) {
                    if (l == null) {
                        s(0, 2442);
                    }
                    delete l[a];
                    if (i && Object.keys(l).length === 0) {
                        d.delete(i);
                    }
                }
                y = null;
                h = null;
                i = null;
                C = true;
            }
        };
        return {
            remove: function() {
                if (b) {
                    b();
                    b = null;
                }
            }
        };
    }
    i.exports = p;
}, 34);