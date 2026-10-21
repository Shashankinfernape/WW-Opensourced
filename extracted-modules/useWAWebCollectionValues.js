__d("useWAWebCollectionValues", [
    "invariant",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const { useCallback: c, useMemo: d, useState: m } = u;
    function p(e, t, n, a, i) {
        const l = o("react-compiler-runtime").c(2);
        const s = _(e, t, n, a, i);
        let u;
        if (l[0] !== s) {
            u = function() {
                return r("nullthrows")(s, "[useCollectionValues] Expected model to be present in collection");
            };
            l[0] = s;
            l[1] = u;
        } else {
            u = l[1];
        }
        const c = m(u);
        const d = c[0];
        const p = c[1];
        if (s != null && s !== d) {
            p(s);
        }
        return d;
    }
    function _(e, t, n, r, a) {
        const u = o("react-compiler-runtime").c(19);
        let c;
        if (u[0] !== e) {
            c = Array.isArray(e) ? e : [
                e
            ];
            u[0] = e;
            u[1] = c;
        } else {
            c = u[1];
        }
        const d = c;
        let p;
        let _;
        let g;
        if (typeof n === "function" && Array.isArray(r)) {
            p = n;
            _ = r;
            g = a;
        } else {
            if (!Array.isArray(n)) {
                s(0, 72179);
            }
            p = f;
            _ = n;
            g = Array.isArray(r) ? a : r;
        }
        let h;
        if (u[2] !== d || u[3] !== t) {
            h = function() {
                if (t == null) {
                    return null;
                }
                return C(d, t);
            };
            u[2] = d;
            u[3] = t;
            u[4] = h;
        } else {
            h = u[4];
        }
        const b = m(h);
        const v = b[0];
        const S = b[1];
        let R;
        if (u[5] !== d || u[6] !== t || u[7] !== v) {
            R = function() {
                const e = t == null ? null : C(d, t);
                if (e !== v || (e == null ? void 0 : e.id.toString()) !== (v == null ? void 0 : v.id.toString())) {
                    S(e);
                }
            };
            u[5] = d;
            u[6] = t;
            u[7] = v;
            u[8] = R;
        } else {
            R = u[8];
        }
        const L = R;
        L();
        let E;
        if (u[9] !== L || u[10] !== d) {
            let k;
            if (u[12] !== L) {
                k = function(t) {
                    return {
                        source: t,
                        eventOrEvents: "add",
                        callback: function() {
                            L();
                        }
                    };
                };
                u[12] = L;
                u[13] = k;
            } else {
                k = u[13];
            }
            E = d.map(k);
            u[9] = L;
            u[10] = d;
            u[11] = E;
        } else {
            E = u[11];
        }
        o("useWAWebListener").useListeners(E);
        let I;
        if (u[14] !== p || u[15] !== v) {
            I = v == null ? null : p(v);
            u[14] = p;
            u[15] = v;
            u[16] = I;
        } else {
            I = u[16];
        }
        const T = I;
        const D = _;
        const x = y(v, g?.isStrong ?? false);
        let $;
        if (u[17] !== x) {
            $ = {
                subscribe: x
            };
            u[17] = x;
            u[18] = $;
        } else {
            $ = u[18];
        }
        return o("useWAWebValues").useOptionalValues(T, D, $);
    }
    function f(e) {
        return e;
    }
    function g(e, t) {
        const n = o("react-compiler-runtime").c(2);
        const r = y(e);
        let a;
        if (n[0] !== r) {
            a = {
                subscribe: r
            };
            n[0] = r;
            n[1] = a;
        } else {
            a = n[1];
        }
        return o("useWAWebValues").useValues(e, t, a);
    }
    function h(e, t) {
        const n = o("react-compiler-runtime").c(2);
        const r = y(e);
        let a;
        if (n[0] !== r) {
            a = {
                subscribe: r
            };
            n[0] = r;
            n[1] = a;
        } else {
            a = n[1];
        }
        return o("useWAWebValues").useOptionalValues(e, t, a);
    }
    function y(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const r = t === void 0 ? false : t;
        let a;
        if (n[0] !== r || n[1] !== e) {
            a = function(n) {
                if (e != null) {
                    e.on("change", n);
                    e.incObservers(!r);
                    return function() {
                        e.decObservers();
                        e.off("change", n);
                    };
                }
            };
            n[0] = r;
            n[1] = e;
            n[2] = a;
        } else {
            a = n[2];
        }
        return a;
    }
    function C(e, t) {
        for (const n of e){
            const r = n.get(t);
            if (r != null) {
                return r;
            }
        }
        return null;
    }
    l.useCollectionValues = p;
    l.useOptionalCollectionValues = _;
    l.useModelGetterValues = g;
    l.useOptionalModelGetterValues = h;
}, 98);