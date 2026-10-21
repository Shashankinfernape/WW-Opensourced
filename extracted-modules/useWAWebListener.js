__d("useWAWebListener", [
    "WAHash",
    "WAWebNoop",
    "WAWebUIListener",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback: u, useEffect: c, useLayoutEffect: d, useRef: m } = s;
    function p(e, t, n, o) {
        const a = r("useWAWebStableCallback")(n);
        const i = y(t);
        d(function() {
            if (n != null) {
                return g(e, t, a, o);
            }
        }, [
            e,
            n == null,
            i
        ]);
    }
    function _(e) {
        const t = e.map(({ callback: t })=>t);
        const n = m(t);
        n.current = t;
        const o = e.map(({ eventOrEvents: t, source: n })=>`${r("WAHash")(n)},${y(t)}`).join("-");
        d(function() {
            const t = e.map(({ eventOrEvents: r, opts: o, source: a }, t)=>{
                const i = function(...a) {
                    let e;
                    let r;
                    if ((e = (r = n.current)[t]) == null) {
                        return void 0;
                    }
                    return e.call(r, ...a);
                };
                return g(a, r, i, o);
            });
            return function() {
                return t.forEach((e)=>e());
            };
        }, [
            o
        ]);
    }
    function f() {
        const e = o("react-compiler-runtime").c(5);
        const t = m();
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = function(n, r, o, a) {
                t.current = g(n, r, o, babelHelpers.extends({}, a, {
                    once: true
                }));
            };
            e[0] = n;
        } else {
            n = e[0];
        }
        const r = n;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                t.current?.();
            };
            e[1] = a;
        } else {
            a = e[1];
        }
        const i = a;
        let l;
        let s;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                return i;
            };
            s = [
                i
            ];
            e[2] = l;
            e[3] = s;
        } else {
            l = e[2];
            s = e[3];
        }
        c(l, s);
        let u;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                r,
                i
            ];
            e[4] = u;
        } else {
            u = e[4];
        }
        return u;
    }
    function g(e, t, n, a) {
        if (e == null) {
            return r("WAWebNoop");
        }
        const i = h(e, t);
        const l = a?.once !== true ? n : function() {
            u();
            n.apply(void 0, arguments);
        };
        const s = i.map((t)=>new (o("WAWebUIListener")).Listener(e, t, l, a));
        s.forEach((e)=>{
            e.engage();
        });
        var u = function() {
            s.forEach((e)=>{
                e.disengage();
            });
        };
        return u;
    }
    function h(e, t) {
        if (Array.isArray(t)) {
            if (o("WAWebUIListener").isEventsType(e)) {
                return [
                    t.join(" ")
                ];
            }
            return t;
        }
        return [
            t
        ];
    }
    function y(e) {
        if (Array.isArray(e)) {
            return e.join("\0");
        }
        return e;
    }
    l.useListener = p;
    l.useListeners = _;
    l.useAddListenerOnce = f;
}, 98);