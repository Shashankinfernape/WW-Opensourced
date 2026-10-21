__d("WAWebIconButton.react", [
    "WAWebClickable.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "icon",
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingInlineStart10: {
            paddingInlineStart: "xe2zdcy",
            $$css: true
        }
    };
    const d = {
        button: {
            borderStartStartRadius: "xr4gsrn",
            borderStartEndRadius: "xa83c8o",
            borderEndEndRadius: "x3oym20",
            borderEndStartRadius: "x1i84rja",
            height: "x1vqgdyp",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            flex: "x1okw0bk",
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x17gydlx",
            $$css: true
        },
        buttonNotClickable: {
            cursor: "x1h6gzvc",
            $$css: true
        },
        row: {
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(14);
        let r;
        let a;
        let i;
        if (n[0] !== t) {
            r = t.icon;
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
        }
        const l = r != null && c.paddingInlineStart10;
        const s = r != null && o("WDSPaddings.stylex").wdsPaddings.paddingEnd2;
        const m = a.onClick == null && d.buttonNotClickable;
        let p;
        if (n[4] !== a.xstyle || n[5] !== l || n[6] !== s || n[7] !== m) {
            p = [
                d.button,
                d.row,
                l,
                s,
                a.xstyle,
                m
            ];
            n[4] = a.xstyle;
            n[5] = l;
            n[6] = s;
            n[7] = m;
            n[8] = p;
        } else {
            p = n[8];
        }
        let _;
        if (n[9] !== r || n[10] !== a || n[11] !== i || n[12] !== p) {
            _ = u.jsxs(o("WAWebClickable.react").Clickable, babelHelpers.extends({}, a, {
                xstyle: p,
                ref: i,
                children: [
                    r,
                    a.children
                ]
            }));
            n[9] = r;
            n[10] = a;
            n[11] = i;
            n[12] = p;
            n[13] = _;
        } else {
            _ = n[13];
        }
        return _;
    }
    l.default = m;
}, 98);