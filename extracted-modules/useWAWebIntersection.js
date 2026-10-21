__d("useWAWebIntersection", [
    "WAHash",
    "err",
    "nullthrows",
    "once",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    const d = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const m = {
        intersectionRatio: 0,
        isIntersecting: false
    };
    function useP(e = {}) {
        const t = useState(null);
        const n = t[0];
        const r = t[1];
        const o = useState(m);
        const a = o[0];
        const i = o[1];
        const l = g(e);
        useEffect(function() {
            if (n) {
                return _().observe(n, i, e);
            }
        }, [
            n,
            l
        ]);
        return [
            r,
            a
        ];
    }
    var _ = r("once")(function() {
        return new f;
    });
    var f = function() {
        const e = this;
        this.$1 = new Map;
        this.$2 = function(t) {
            const n = g(t);
            if (!e.$1.has(n)) {
                const callbacks = new Map;
                const observer = new IntersectionObserver(function(e) {
                    for (const t of e){
                        const n = callbacks.get(t.target);
                        const { intersectionRatio, isIntersecting } = t;
                        n?.({
                            intersectionRatio,
                            isIntersecting
                        });
                    }
                }, t);
                e.$1.set(n, {
                    observer,
                    callbacks
                });
            }
            return r("nullthrows")(e.$1.get(n));
        };
        this.$3 = function(t) {
            const n = g(t);
            e.$1.delete(n);
        };
        this.observe = function(t, n, o) {
            const a = e.$2(o);
            const { callbacks, observer } = a;
            if (callbacks.has(t)) {
                throw r("err")("You can't observe the same element twice.");
            }
            callbacks.set(t, n);
            observer.observe(t);
            return function() {
                observer.unobserve(t);
                callbacks.delete(t);
                if (callbacks.size === 0) {
                    observer.disconnect();
                    e.$3(o);
                }
            };
        };
    };
    function g(e) {
        const t = "root" in e ? e.root : d.root;
        const n = "rootMargin" in e ? e.rootMargin : d.rootMargin;
        const o = "threshold" in e ? e.threshold : d.threshold;
        const a = [
            t,
            n,
            o
        ];
        const i = a.map((e)=>r("WAHash")(e)).join("-");
        return i;
    }
    l.default = useP;
}, 98);