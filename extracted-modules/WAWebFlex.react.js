__d("WAWebFlex.react", [
    "WAWebFlexItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "align",
        "alignSelf",
        "direction",
        "justify",
        "justifySelf",
        "xstyle"
    ];
    const u = [
        "ref"
    ];
    const c = [
        "ref"
    ];
    let d;
    const m = d || (d = o("react"));
    const p = {
        flex: {
            minWidth: "xeuugli",
            minHeight: "x2lwn1j",
            $$css: true
        }
    };
    const _ = {
        start: {
            justifyContent: "x1nhvcw1",
            $$css: true
        },
        center: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        end: {
            justifyContent: "x13a6bvl",
            $$css: true
        },
        all: {
            justifyContent: "x1qughib",
            $$css: true
        },
        around: {
            justifyContent: "x1l1ennw",
            $$css: true
        },
        evenly: {
            justifyContent: "xaw8158",
            $$css: true
        },
        stretch: {
            justifyContent: "x1szn6h9",
            $$css: true
        }
    };
    const f = {
        horizontal: {
            flexDirection: "x1q0g3np",
            $$css: true
        },
        vertical: {
            flexDirection: "xdt5ytf",
            $$css: true
        },
        horizontalReverse: {
            flexDirection: "x15zctf7",
            $$css: true
        },
        verticalReverse: {
            flexDirection: "x3ieub6",
            $$css: true
        }
    };
    const g = {
        center: {
            alignItems: "x6s0dn4",
            $$css: true
        },
        start: {
            alignItems: "x1cy8zhl",
            $$css: true
        },
        end: {
            alignItems: "xuk3077",
            $$css: true
        },
        stretch: {
            alignItems: "x1qjc9v5",
            $$css: true
        },
        baseline: {
            alignItems: "x1pha0wt",
            $$css: true
        }
    };
    function H1(t) {
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
        let justify;
        let d;
        let h;
        let y;
        let C;
        if (n[3] !== a) {
            const b = a;
            h = b.align;
            l = b.alignSelf;
            u = b.direction;
            y = b.justify;
            justify = b.justifySelf;
            C = b.xstyle;
            d = babelHelpers.objectWithoutPropertiesLoose(b, s);
            n[3] = a;
            n[4] = l;
            n[5] = u;
            n[6] = justify;
            n[7] = d;
            n[8] = h;
            n[9] = y;
            n[10] = C;
        } else {
            l = n[4];
            u = n[5];
            justify = n[6];
            d = n[7];
            h = n[8];
            y = n[9];
            C = n[10];
        }
        const v = h === undefined ? "start" : h;
        const S = y === undefined ? "start" : y;
        const R = _[S];
        const L = f[u];
        const E = g[v];
        let k;
        if (n[11] !== R || n[12] !== L || n[13] !== E || n[14] !== C) {
            k = [
                p.flex,
                R,
                L,
                E,
                C
            ];
            n[11] = R;
            n[12] = L;
            n[13] = E;
            n[14] = C;
            n[15] = k;
        } else {
            k = n[15];
        }
        let I;
        if (n[16] !== l || n[17] !== justify || n[18] !== i || n[19] !== d || n[20] !== k) {
            I = m.jsx(r("WAWebFlexItem.react"), babelHelpers.extends({
                xstyle: k,
                align: l,
                justify,
                isFlexContainer: true,
                ref: i
            }, d));
            n[16] = l;
            n[17] = justify;
            n[18] = i;
            n[19] = d;
            n[20] = k;
            n[21] = I;
        } else {
            I = n[21];
        }
        return I;
    }
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        let r;
        if (t[0] !== e) {
            r = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        let a;
        if (t[3] !== n || t[4] !== r) {
            a = <H1 {...babelHelpers.extends({}, n, {
                direction: "horizontal",
                ref: r,
                children: n.children
            })}/>;
            t[3] = n;
            t[4] = r;
            t[5] = a;
        } else {
            a = t[5];
        }
        return a;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        let r;
        if (t[0] !== e) {
            r = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, c);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        let a;
        if (t[3] !== n || t[4] !== r) {
            a = <H1 {...babelHelpers.extends({}, n, {
                direction: "vertical",
                ref: r,
                children: n.children
            })}/>;
            t[3] = n;
            t[4] = r;
            t[5] = a;
        } else {
            a = t[5];
        }
        return a;
    }
    l.FlexItem = r("WAWebFlexItem.react");
    l.FlexContainer = H1;
    l.FlexRow = YComponent;
    l.FlexColumn = C;
}, 98);