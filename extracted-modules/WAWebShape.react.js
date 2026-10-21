__d("WAWebShape.react", [
    "WAWebShapeContainer.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "xstyle"
    ];
    const s = [
        "xstyle"
    ];
    const u = [
        "shape"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = {
        container: {
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(8);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.xstyle;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        if (n[3] !== i) {
            l = [
                m.container,
                i
            ];
            n[3] = i;
            n[4] = l;
        } else {
            l = n[4];
        }
        let s;
        if (n[5] !== a || n[6] !== l) {
            s = d.jsx(r("WAWebShapeContainer.react"), babelHelpers.extends({
                xstyle: l
            }, a));
            n[5] = a;
            n[6] = l;
            n[7] = s;
        } else {
            s = n[7];
        }
        return s;
    }
    const _ = {
        container: {
            clipPath: "x1f2iure",
            $$css: true
        }
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        let a;
        if (t[0] !== e) {
            a = e.xstyle;
            n = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        let i;
        if (t[3] !== a) {
            i = [
                _.container,
                a
            ];
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        let l;
        if (t[5] !== n || t[6] !== i) {
            l = d.jsx(r("WAWebShapeContainer.react"), babelHelpers.extends({
                xstyle: i
            }, n));
            t[5] = n;
            t[6] = i;
            t[7] = l;
        } else {
            l = t[7];
        }
        return l;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        let r;
        if (t[0] !== e) {
            r = e.shape;
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        let a = p;
        e: switch(r){
            case "circle":
                {
                    a = p;
                    break e;
                }
            case "squircle":
                a = f;
        }
        let i;
        if (t[3] !== a || t[4] !== n) {
            i = d.jsx(a, babelHelpers.extends({}, n));
            t[3] = a;
            t[4] = n;
            t[5] = i;
        } else {
            i = t[5];
        }
        return i;
    }
    l.default = g;
}, 98);