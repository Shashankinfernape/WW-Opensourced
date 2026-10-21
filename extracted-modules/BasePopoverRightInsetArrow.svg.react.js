__d("BasePopoverRightInsetArrow.svg.react", [
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
                d: "M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.19.846.422.1.102z",
                transform: "rotate(-90 12.5 12.48)"
            });
            t[2] = r;
        } else {
            r = t[2];
        }
        let a;
        if (t[3] !== e || t[4] !== n) {
            a = s.jsxs(o("XPlatReactSVG").Svg, babelHelpers.extends({
                "aria-hidden": true,
                height: 25,
                viewBox: "0 0 12 25",
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