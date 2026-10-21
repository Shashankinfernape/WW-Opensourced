__d("BasePopoverRightEdgeArrow.svg.react", [
    "XPlatReactSVG",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        if (t[0] !== e.children) {
            const Component = o("XPlatReactSVG").Defs;
            n = e.children != null && <Component>{e.children}</Component>;
            t[0] = e.children;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            r = s.jsx(o("XPlatReactSVG").Path, {
                d: "M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12Z",
                transform: "rotate(-90 10.498 10.488)"
            });
            t[2] = r;
        } else {
            r = t[2];
        }
        let a;
        if (t[3] !== e || t[4] !== n) {
            a = s.jsxs(o("XPlatReactSVG").Svg, babelHelpers.extends({
                "aria-hidden": true,
                height: 21,
                viewBox: "0 0 12 21",
                width: 12
            }, e, {
                children: [
                    n,
                    r
                ]
            }));
            t[3] = e;
            t[4] = n;
            t[5] = a;
        } else {
            a = t[5];
        }
        return a;
    }
    l.default = u;
}, 98);