__d("WAWebWaapiAnimateEasing", [], function(t, n, r, o, a, i) {
    const e = "linear";
    const l = "swing";
    const s = {
        ease: [
            0.25,
            0.1,
            0.25,
            1
        ],
        "ease-in": [
            0.42,
            0,
            1,
            1
        ],
        "ease-out": [
            0,
            0,
            0.58,
            1
        ],
        "ease-in-out": [
            0.42,
            0,
            0.58,
            1
        ],
        easeInSine: [
            0.47,
            0,
            0.745,
            0.715
        ],
        easeOutSine: [
            0.39,
            0.575,
            0.565,
            1
        ],
        easeInOutSine: [
            0.445,
            0.05,
            0.55,
            0.95
        ],
        easeInQuad: [
            0.55,
            0.085,
            0.68,
            0.53
        ],
        easeOutQuad: [
            0.25,
            0.46,
            0.45,
            0.94
        ],
        easeInOutQuad: [
            0.455,
            0.03,
            0.515,
            0.955
        ],
        easeInCubic: [
            0.55,
            0.055,
            0.675,
            0.19
        ],
        easeOutCubic: [
            0.215,
            0.61,
            0.355,
            1
        ],
        easeInOutCubic: [
            0.645,
            0.045,
            0.355,
            1
        ],
        easeInQuart: [
            0.895,
            0.03,
            0.685,
            0.22
        ],
        easeOutQuart: [
            0.165,
            0.84,
            0.44,
            1
        ],
        easeInOutQuart: [
            0.77,
            0,
            0.175,
            1
        ],
        easeInCirc: [
            0.6,
            0.04,
            0.98,
            0.335
        ],
        easeOutCirc: [
            0.075,
            0.82,
            0.165,
            1
        ],
        easeInOutCirc: [
            0.785,
            0.135,
            0.15,
            0.86
        ]
    };
    const u = [
        0.445,
        0.05,
        0.55,
        0.95
    ];
    function c(t) {
        const n = f(t);
        if (n === e) {
            return e;
        }
        const r = n === l ? u : n;
        return `cubic-bezier(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`;
    }
    function d(t) {
        const n = f(t);
        if (n === e) {
            return h;
        }
        if (n === l) {
            return S;
        }
        return R({
            p1x: n[0],
            p1y: n[1],
            p2x: n[2],
            p2y: n[3]
        });
    }
    const m = 16 / 1000;
    const p = 1 / 10000;
    function _(e, t, n, r) {
        for(var o = Number.isFinite(n) && n >= 2 ? Math.floor(n) : 2, a = y(e, t, m), i = r == null || r <= 0 ? a : y(e, t, (a.length - 1) * 16 / r * m), l = i.length - 1, s = [], u = 0; u < o; u++){
            const c = u / (o - 1);
            s.push(i[Math.floor(c * l)]);
        }
        return s;
    }
    function f(t) {
        if (t == null) {
            return l;
        }
        if (Array.isArray(t)) {
            if (t.length === 4) {
                const n = g(t, 0);
                const r = g(t, 1);
                const o = g(t, 2);
                const a = g(t, 3);
                if (n != null && r != null && o != null && a != null) {
                    return [
                        n,
                        r,
                        o,
                        a
                    ];
                }
            }
            return l;
        }
        if (t === e) {
            return e;
        }
        if (typeof t === "string") {
            return s[t] ?? l;
        }
        return l;
    }
    function g(e, t) {
        const n = e[t];
        if (typeof n === "number" && Number.isFinite(n)) {
            return n;
        }
    }
    function h(e) {
        return e;
    }
    function y(e, t, n) {
        const r = [
            0
        ];
        let o = {
            x: -1,
            v: 0
        };
        do {
            o = C(o, e, t, n);
            r.push(1 + o.x);
        }while (Math.abs(o.x) > p && Math.abs(o.v) > p)
        return r;
    }
    function C(e, t, n, r) {
        const o = e.v;
        const a = v(e.x, e.v, t, n);
        const i = b(e, t, n, r * 0.5, o, a);
        const l = b(e, t, n, r * 0.5, i.dx, i.dv);
        const s = b(e, t, n, r, l.dx, l.dv);
        const u = 1 / 6 * (o + 2 * (i.dx + l.dx) + s.dx);
        const c = 1 / 6 * (a + 2 * (i.dv + l.dv) + s.dv);
        return {
            x: e.x + u * r,
            v: e.v + c * r
        };
    }
    function b(e, t, n, r, o, a) {
        const i = e.x + o * r;
        const l = e.v + a * r;
        return {
            dx: l,
            dv: v(i, l, t, n)
        };
    }
    function v(e, t, n, r) {
        return -n * e - r * t;
    }
    function S(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
    }
    function R({ p1x: t, p1y: n, p2x: r, p2y: o }) {
        const a = 3 * t;
        const i = 3 * (r - t) - a;
        const l = 1 - a - i;
        const s = 3 * n;
        const u = 3 * (o - n) - s;
        const c = 1 - s - u;
        const d = function(t) {
            return ((l * t + i) * t + a) * t;
        };
        const m = function(t) {
            return ((c * t + u) * t + s) * t;
        };
        const p = function(t) {
            return (3 * l * t + 2 * i) * t + a;
        };
        return function(e) {
            if (e <= 0) {
                return 0;
            }
            if (e >= 1) {
                return 1;
            }
            return m(L(e, d, p));
        };
    }
    function L(e, t, n) {
        let r = e;
        for(let o = 0; o < 8; o++){
            const a = t(r) - e;
            if (Math.abs(a) < 0.0001) {
                return r;
            }
            const i = n(r);
            if (Math.abs(i) < 0.000001) {
                break;
            }
            r -= a / i;
        }
        let l = 0;
        let s = 1;
        let u = E(r);
        for(let c = 0; c < 52; c++){
            const d = t(u);
            if (Math.abs(d - e) < 0.0001) {
                return u;
            }
            if (e > d) {
                l = u;
            } else {
                s = u;
            }
            u = (s - l) / 2 + l;
        }
        return u;
    }
    function E(e) {
        return Math.min(1, Math.max(0, e));
    }
    i.resolveCssEasing = c;
    i.resolveEasingFn = d;
    i.sampleSpringProgress = _;
}, 66);