__d("BaseBadge.react", [
    "fbt",
    "CometVisualCompletionAttributes",
    "ScreenReaderText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "accessibilityText",
        "children",
        "testid",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        root: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "x1iwo8zk",
            borderStartEndRadius: "x1033uif",
            borderEndEndRadius: "x179ill4",
            borderEndStartRadius: "x1b60jn0",
            boxSizing: "x9f619",
            display: "x3nfvp2",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(18);
        let a;
        let i;
        let l;
        let c;
        let p;
        if (n[0] !== t) {
            a = t.accessibilityText;
            l = t.children;
            c = t.testid;
            p = t.xstyle;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = c;
            n[5] = p;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            c = n[4];
            p = n[5];
        }
        let _;
        if (n[6] !== p) {
            _ = (u || (u = r("stylex")))([
                m.root,
                p
            ]);
            n[6] = p;
            n[7] = _;
        } else {
            _ = n[7];
        }
        let f;
        if (n[8] !== c) {
            f = r("testID")(c);
            n[8] = c;
            n[9] = f;
        } else {
            f = n[9];
        }
        let g;
        if (n[10] !== a) {
            g = (typeof a === "string" || s.isFbtInstance(a)) && d.jsx(r("ScreenReaderText.react"), {
                text: a
            });
            n[10] = a;
            n[11] = g;
        } else {
            g = n[11];
        }
        let h;
        if (n[12] !== i || n[13] !== l || n[14] !== _ || n[15] !== f || n[16] !== g) {
            h = <span {...babelHelpers.extends({}, i, {
                className: _
            }, f, r("CometVisualCompletionAttributes").IGNORE, {
                children: [
                    g,
                    l
                ]
            })}/>;
            n[12] = i;
            n[13] = l;
            n[14] = _;
            n[15] = f;
            n[16] = g;
            n[17] = h;
        } else {
            h = n[17];
        }
        return h;
    }
    l.default = p;
}, 98);