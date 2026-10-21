__d("WAWebMenu.react", [
    "WAWebMenuController.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useState = s.useState;
    function DComponent(t) {
        const r = o("react-compiler-runtime").c(12);
        let a;
        let i;
        if (r[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            r[0] = t;
            r[1] = a;
            r[2] = i;
        } else {
            a = r[1];
            i = r[2];
        }
        let l;
        if (r[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = new Map;
            r[3] = l;
        } else {
            l = r[3];
        }
        const s = s_useState(l);
        const d = s[0];
        const m = s[1];
        let p;
        if (r[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                onChange: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        yield m(e);
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })(),
                onOrderChange: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        yield m(e);
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            };
            r[4] = p;
        } else {
            p = r[4];
        }
        const registerRef = o("WAWebMenuController.react").useRegister(p);
        let f;
        if (r[5] !== d || r[6] !== a || r[7] !== i) {
            f = u.jsx(o("WAWebMenuController.react").WAWebMenuController, babelHelpers.extends({
                data: d
            }, a, {
                ref: i
            }));
            r[5] = d;
            r[6] = a;
            r[7] = i;
            r[8] = f;
        } else {
            f = r[8];
        }
        let g;
        if (r[9] !== registerRef || r[10] !== f) {
            const Component = o("WAWebMenuController.react").Register;
            g = <Component registerRef={registerRef}>{f}</Component>;
            r[9] = registerRef;
            r[10] = f;
            r[11] = g;
        } else {
            g = r[11];
        }
        return g;
    }
    l.WAWebMenu = DComponent;
}, 98);