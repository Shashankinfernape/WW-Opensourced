__d("useWAWebEventCounterValue", [
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e, eventOrEvents, n) {
        const r = o("react-compiler-runtime").c(8);
        const a = n === undefined ? 0 : n;
        let i;
        if (e == null) {
            let l;
            if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
                l = [];
                r[0] = l;
            } else {
                l = r[0];
            }
            i = l;
        } else if (Array.isArray(e)) {
            i = e;
        } else {
            let u;
            if (r[1] !== e) {
                u = [
                    e
                ];
                r[1] = e;
                r[2] = u;
            } else {
                u = r[2];
            }
            i = u;
        }
        const c = useState(a);
        const d = c[0];
        const m = c[1];
        let p;
        if (r[3] !== eventOrEvents || r[4] !== i) {
            let _;
            if (r[6] !== eventOrEvents) {
                _ = function(n) {
                    return {
                        source: n,
                        eventOrEvents,
                        callback: function(t) {
                            const e = t === undefined ? 1 : t;
                            m(function(t) {
                                return t + e;
                            });
                        }
                    };
                };
                r[6] = eventOrEvents;
                r[7] = _;
            } else {
                _ = r[7];
            }
            p = i.map(_);
            r[3] = eventOrEvents;
            r[4] = i;
            r[5] = p;
        } else {
            p = r[5];
        }
        o("useWAWebListener").useListeners(p);
        return d;
    }
    l.default = u;
}, 98);