__d("WAWebShapeIcon.react", [
    "$InternalEnum",
    "WAWebShape.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "Icon",
        "backgroundStyles",
        "directional",
        "iconStyles",
        "theme"
    ];
    const s = [
        "children"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        foregroundSvg: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        },
        defaultIconStyle: {
            width: "xycev2y",
            height: "x39lw6i",
            color: "x17t9dm2",
            $$css: true
        }
    };
    const m = {
        background: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const p = {
        background: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        icon: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    const _ = {
        background: {
            backgroundColor: "x1abdmlv",
            $$css: true
        },
        icon: {
            color: "xk4n5i7",
            $$css: true
        }
    };
    const f = {
        background: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        icon: {
            color: "xo1mcw5",
            $$css: true
        }
    };
    const g = n("$InternalEnum").Mirrored([
        "Muted",
        "Primary",
        "Accent",
        "Community"
    ]);
    function h(t) {
        const n = o("react-compiler-runtime").c(25);
        let a;
        let i;
        let directional;
        let u;
        let h;
        let y;
        if (n[0] !== t) {
            a = t.Icon;
            i = t.backgroundStyles;
            directional = t.directional;
            u = t.iconStyles;
            y = t.theme;
            h = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = directional;
            n[4] = u;
            n[5] = h;
            n[6] = y;
        } else {
            a = n[1];
            i = n[2];
            directional = n[3];
            u = n[4];
            h = n[5];
            y = n[6];
        }
        let C;
        let b;
        if (n[7] !== h) {
            const v = h;
            C = v.children;
            b = babelHelpers.objectWithoutPropertiesLoose(v, s);
            n[7] = h;
            n[8] = C;
            n[9] = b;
        } else {
            C = n[8];
            b = n[9];
        }
        let S;
        let R;
        if (y != null) {
            e: switch(y){
                case g.Muted:
                    {
                        S = m.background;
                        R = m.icon;
                        break e;
                    }
                case g.Primary:
                    {
                        S = p.background;
                        R = p.icon;
                        break e;
                    }
                case g.Accent:
                    {
                        S = _.background;
                        R = _.icon;
                        break e;
                    }
                case g.Community:
                    S = f.background;
                    R = f.icon;
            }
        }
        let L;
        if (n[10] !== i || n[11] !== S) {
            L = [
                S,
                i
            ];
            n[10] = i;
            n[11] = S;
            n[12] = L;
        } else {
            L = n[12];
        }
        let E;
        if (n[13] !== u || n[14] !== R) {
            E = [
                d.defaultIconStyle,
                R,
                u
            ];
            n[13] = u;
            n[14] = R;
            n[15] = E;
        } else {
            E = n[15];
        }
        let k;
        if (n[16] !== a || n[17] !== directional || n[18] !== E) {
            k = c.jsx(a, {
                xstyle: E,
                iconXstyle: d.foregroundSvg,
                directional
            });
            n[16] = a;
            n[17] = directional;
            n[18] = E;
            n[19] = k;
        } else {
            k = n[19];
        }
        let I;
        if (n[20] !== C || n[21] !== b || n[22] !== L || n[23] !== k) {
            I = c.jsxs(r("WAWebShape.react"), babelHelpers.extends({}, b, {
                xstyle: L,
                children: [
                    k,
                    C
                ]
            }));
            n[20] = C;
            n[21] = b;
            n[22] = L;
            n[23] = k;
            n[24] = I;
        } else {
            I = n[24];
        }
        return I;
    }
    l.ShapeIconTheme = g;
    l.ShapeIcon = h;
}, 98);