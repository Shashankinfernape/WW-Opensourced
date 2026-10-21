__d("XPlatReactSVG", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children",
        "title",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        let i;
        let l;
        let u;
        if (n[0] !== t) {
            a = t.children;
            l = t.title;
            u = t.xstyle;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = u;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            u = n[4];
        }
        let d;
        if (n[5] !== u) {
            d = (s || (s = r("stylex"))).props(u);
            n[5] = u;
            n[6] = d;
        } else {
            d = n[6];
        }
        let m;
        if (n[7] !== l) {
            m = l != null && <title>{l}</title>;
            n[7] = l;
            n[8] = m;
        } else {
            m = n[8];
        }
        let p;
        if (n[9] !== a || n[10] !== i || n[11] !== d || n[12] !== m) {
            p = <svg {...babelHelpers.extends({}, i, d, {
                children: [
                    m,
                    a
                ]
            })}/>;
            n[9] = a;
            n[10] = i;
            n[11] = d;
            n[12] = m;
            n[13] = p;
        } else {
            p = n[13];
        }
        return p;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_children = e.children;
        let r;
        if (t[0] !== e_children) {
            r = <defs>{e_children}</defs>;
            t[0] = e_children;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <path {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <circle {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <ellipse {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <clipPath {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function h(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <g {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <linearGradient {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <radialGradient {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function b(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <pattern {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function v(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <polyline {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function SComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <rect {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <use {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <stop {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <mask {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function k(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = <line {...babelHelpers.extends({}, e)}/>;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    l.Svg = d;
    l.Defs = m;
    l.Path = p;
    l.Circle = _;
    l.Ellipse = f;
    l.ClipPath = g;
    l.G = h;
    l.LinearGradient = y;
    l.RadialGradient = C;
    l.Pattern = b;
    l.Polyline = v;
    l.Rect = SComponent;
    l.Use = RComponent;
    l.Stop = L;
    l.Mask = E;
    l.Line = k;
}, 98);