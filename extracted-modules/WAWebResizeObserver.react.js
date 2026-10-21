__d("WAWebResizeObserver.react", [
    "WAWebClassnames",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebMeasure",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "children",
        "className",
        "component",
        "debounceMs",
        "onResize"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useLayoutEffect: m, useRef: p } = d;
    function _(t) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let u;
        let d;
        let _;
        let f;
        let g;
        if (n[3] !== a) {
            const h = a;
            l = h.children;
            u = h.className;
            d = h.component;
            _ = h.debounceMs;
            f = h.onResize;
            g = babelHelpers.objectWithoutPropertiesLoose(h, s);
            n[3] = a;
            n[4] = l;
            n[5] = u;
            n[6] = d;
            n[7] = _;
            n[8] = f;
            n[9] = g;
        } else {
            l = n[4];
            u = n[5];
            d = n[6];
            _ = n[7];
            f = n[8];
            g = n[9];
        }
        const Y = d ?? "div";
        const C = r("useWAWebStableCallback")(f);
        const b = r("useWAWebMeasure")(_);
        const v = b[0];
        const S = b[1];
        const R = r("useMergeRefs")(v, i);
        const L = p(null);
        let E;
        let k;
        if (n[10] !== C || n[11] !== S) {
            E = function() {
                const e = L.current;
                L.current = S;
                if (e != null && (S.width !== e.width || S.height !== e.height)) {
                    const { height: t, width: n } = S;
                    C({
                        width: n,
                        height: t
                    });
                }
            };
            k = [
                S,
                C
            ];
            n[10] = C;
            n[11] = S;
            n[12] = E;
            n[13] = k;
        } else {
            E = n[12];
            k = n[13];
        }
        m(E, k);
        let I;
        if (n[14] !== u) {
            I = o("WAWebClassnames").classnamesConvertMeToStylexPlease("x1n2onr6", u);
            n[14] = u;
            n[15] = I;
        } else {
            I = n[15];
        }
        let T;
        if (n[16] !== Y || n[17] !== l || n[18] !== R || n[19] !== g || n[20] !== I) {
            T = <Y {...babelHelpers.extends({}, g, {
                className: I,
                ref: R,
                children: l
            })}/>;
            n[16] = Y;
            n[17] = l;
            n[18] = R;
            n[19] = g;
            n[20] = I;
            n[21] = T;
        } else {
            T = n[21];
        }
        return T;
    }
    l.default = _;
}, 98);