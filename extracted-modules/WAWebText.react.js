__d("WAWebText.react", [
    "WAWebBox.react",
    "WAWebStylesEnv",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children",
        "color",
        "testid",
        "textAlign",
        "textWrap"
    ];
    const s = [
        "ref"
    ];
    const u = [
        "color",
        "textAlign",
        "weight",
        "xstyle"
    ];
    const c = [
        "ref"
    ];
    const d = [
        "xstyle"
    ];
    const m = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const p = [
        "ref"
    ];
    const _ = [
        "xstyle"
    ];
    const f = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const g = [
        "ref"
    ];
    const h = [
        "xstyle"
    ];
    const y = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const C = [
        "ref"
    ];
    const b = [
        "xstyle"
    ];
    const v = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const S = [
        "ref"
    ];
    const R = [
        "xstyle"
    ];
    const L = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const E = [
        "ref"
    ];
    const k = [
        "color",
        "highlightOnHover",
        "weight",
        "xstyle"
    ];
    const I = [
        "ref"
    ];
    const T = [
        "color",
        "textAlign",
        "weight",
        "xstyle"
    ];
    const D = [
        "ref"
    ];
    const x = [
        "xstyle"
    ];
    const $ = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const P = [
        "ref"
    ];
    const N = [
        "xstyle"
    ];
    const M = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const w = [
        "ref"
    ];
    const A = [
        "xstyle"
    ];
    const F = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    const O = [
        "ref"
    ];
    const B = [
        "xstyle"
    ];
    const W = [
        "children",
        "color",
        "textAlign",
        "weight"
    ];
    let q;
    const U = q || (q = o("react"));
    const V = {
        light: {
            fontWeight: "x1iikomf",
            $$css: true
        },
        normal: {
            fontWeight: "x1fcty0u",
            $$css: true
        },
        medium: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        semibold: {
            fontWeight: "x1s688f",
            $$css: true
        },
        bold: {
            fontWeight: "x117nqv4",
            $$css: true
        },
        inherit: {
            fontWeight: "x1pd3egz",
            $$css: true
        }
    };
    const H = {
        teal: {
            color: "xo1mcw5",
            $$css: true
        },
        critical: {
            color: "x30a034",
            $$css: true
        },
        primary: {
            color: "x14ug900",
            $$css: true
        },
        secondary: {
            color: "xhslqc4",
            $$css: true
        },
        secondaryEmphasized: {
            color: "xhslqc4",
            $$css: true
        },
        success: {
            color: "xo1mcw5",
            $$css: true
        },
        secondaryLighter: {
            color: "xhslqc4",
            $$css: true
        },
        link: {
            color: "x1ph7ams",
            $$css: true
        },
        white: {
            color: "x17t9dm2",
            $$css: true
        },
        forcedPrimary: {
            color: "x14ug900",
            $$css: true
        },
        wdsContentDefault: {
            color: "x14ug900",
            $$css: true
        },
        wdsContentDeemphasized: {
            color: "xhslqc4",
            $$css: true
        },
        wdsAccent: {
            color: "x1v5yvga",
            $$css: true
        },
        wdsContentDisabled: {
            color: "x18cpw0e",
            $$css: true
        },
        wdsSecondaryNegativeEmphasized: {
            color: "xqnyt8g",
            $$css: true
        }
    };
    const G = {
        start: {
            textAlign: "x1yc453h",
            $$css: true
        },
        center: {
            textAlign: "x2b8uid",
            $$css: true
        },
        end: {
            textAlign: "xp4054r",
            $$css: true
        }
    };
    const z = {
        isOSMac: {
            fontSize: "x1jchvi3",
            lineHeight: "x1pujyh6",
            $$css: true
        }
    };
    function j(t) {
        const { children: n, color: r, testid: o, textAlign: a, textWrap: i } = t;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const s = r === "secondaryEmphasized" || r === "secondary" || r === "secondaryLighter" || r === "wdsContentDeemphasized" ? "contentDeemphasized" : r === "teal" || r === "success" ? "contentActionEmphasized" : r === "link" ? "contentExternalLink" : r === "critical" ? "secondaryNegative" : r === "white" ? "persistentAlwaysWhite" : r === "wdsAccent" ? "accent" : r === "wdsContentDisabled" ? "contentDisabled" : r === "wdsSecondaryNegativeEmphasized" ? "secondaryNegativeEmphasized" : r === "forcedPrimary" ? "persistentAlwaysBlack" : r === "primary" || r === "wdsContentDefault" || r === null || r === void 0 ? "contentDefault" : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        })();
        const u = i === "ellipsis" ? 1 : null;
        return {
            textAlign: a,
            children: n,
            colorName: s,
            dir: l.dir,
            maxLines: u
        };
    }
    function K(e) {
        const n = o("react-compiler-runtime").c(19);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, s);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let c;
        let d;
        let m;
        let p;
        if (n[3] !== a) {
            const _ = a;
            c = _.color;
            m = _.textAlign;
            d = _.weight;
            p = _.xstyle;
            l = babelHelpers.objectWithoutPropertiesLoose(_, u);
            n[3] = a;
            n[4] = l;
            n[5] = c;
            n[6] = d;
            n[7] = m;
            n[8] = p;
        } else {
            l = n[4];
            c = n[5];
            d = n[6];
            m = n[7];
            p = n[8];
        }
        const f = d === void 0 ? "normal" : d;
        const g = c != null ? H[c] : null;
        const h = V[f];
        const y = m != null ? G[m] : null;
        const C = l.as ?? "div";
        let b;
        if (n[9] !== y || n[10] !== g || n[11] !== h || n[12] !== p) {
            b = [
                p,
                h,
                g,
                y
            ];
            n[9] = y;
            n[10] = g;
            n[11] = h;
            n[12] = p;
            n[13] = b;
        } else {
            b = n[13];
        }
        let v;
        if (n[14] !== l || n[15] !== i || n[16] !== C || n[17] !== b) {
            v = U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, l, {
                as: C,
                labelFor: l.labelFor,
                ref: i,
                xstyle: b
            }));
            n[14] = l;
            n[15] = i;
            n[16] = C;
            n[17] = b;
            n[18] = v;
        } else {
            v = n[18];
        }
        return v;
    }
    const Q = {
        large: {
            fontSize: "xlm9qay",
            lineHeight: "x1w7sdjq",
            $$css: true
        }
    };
    function X(e) {
        const n = o("react-compiler-runtime").c(23);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, c);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const _ = a;
            u = _.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(_, d);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "primary"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const f = l;
        if (f != null) {
            let g;
            if (n[7] !== s) {
                const h = s;
                const { children: y, color: C, textAlign: b, weight: v } = h;
                const S = babelHelpers.objectWithoutPropertiesLoose(h, m);
                g = S;
                n[7] = s;
                n[8] = g;
            } else {
                g = n[8];
            }
            let R;
            if (n[9] !== f) {
                R = U.jsx(r("WDSText.react"), babelHelpers.extends({
                    type: "Headline2"
                }, f));
                n[9] = f;
                n[10] = R;
            } else {
                R = n[10];
            }
            let L;
            if (n[11] !== g || n[12] !== i || n[13] !== R || n[14] !== u) {
                L = U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, g, {
                    ref: i,
                    xstyle: u,
                    children: R
                }));
                n[11] = g;
                n[12] = i;
                n[13] = R;
                n[14] = u;
                n[15] = L;
            } else {
                L = n[15];
            }
            return L;
        }
        const E = a.color ?? "primary";
        let k;
        if (n[16] !== u) {
            k = [
                u,
                Q.large
            ];
            n[16] = u;
            n[17] = k;
        } else {
            k = n[17];
        }
        let I;
        if (n[18] !== i || n[19] !== E || n[20] !== k || n[21] !== s) {
            I = <K {...babelHelpers.extends({}, s, {
                color: E,
                ref: i,
                xstyle: k
            })}/>;
            n[18] = i;
            n[19] = E;
            n[20] = k;
            n[21] = s;
            n[22] = I;
        } else {
            I = n[22];
        }
        return I;
    }
    const Y = {
        title: {
            fontSize: "x1lkfr7t",
            lineHeight: "xdbd6k5",
            $$css: true
        }
    };
    function J(e) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, p);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, _);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "primary"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let g;
            if (n[7] !== s) {
                const h = s;
                const { children: y, color: C, textAlign: b, weight: v } = h;
                const S = babelHelpers.objectWithoutPropertiesLoose(h, f);
                g = S;
                n[7] = s;
                n[8] = g;
            } else {
                g = n[8];
            }
            const R = s.weight === "semibold" || s.weight === "bold";
            let L;
            if (n[9] !== g || n[10] !== R || n[11] !== i || n[12] !== m || n[13] !== u) {
                L = R ? U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, g, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body1Emphasized"
                    }, m))
                })) : U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, g, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body1"
                    }, m))
                }));
                n[9] = g;
                n[10] = R;
                n[11] = i;
                n[12] = m;
                n[13] = u;
                n[14] = L;
            } else {
                L = n[14];
            }
            return L;
        }
        const E = a.color ?? "primary";
        let k;
        if (n[15] !== u) {
            k = [
                u,
                Y.title,
                o("WAWebStylesEnv").isOSMac ? z.isOSMac : null
            ];
            n[15] = u;
            n[16] = k;
        } else {
            k = n[16];
        }
        let I;
        if (n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s) {
            I = <K {...babelHelpers.extends({}, s, {
                color: E,
                ref: i,
                xstyle: k
            })}/>;
            n[17] = i;
            n[18] = E;
            n[19] = k;
            n[20] = s;
            n[21] = I;
        } else {
            I = n[21];
        }
        return I;
    }
    const Z = {
        muted: {
            fontSize: "x1f6kntn",
            lineHeight: "x16h55sf",
            $$css: true
        }
    };
    function ee(e) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, g);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, h);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "secondaryEmphasized"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let p;
            if (n[7] !== s) {
                const _ = s;
                const { children: f, color: C, textAlign: b, weight: v } = _;
                const S = babelHelpers.objectWithoutPropertiesLoose(_, y);
                p = S;
                n[7] = s;
                n[8] = p;
            } else {
                p = n[8];
            }
            const R = s.weight === "semibold" || s.weight === "bold";
            let L;
            if (n[9] !== p || n[10] !== R || n[11] !== i || n[12] !== m || n[13] !== u) {
                L = R ? U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body2Emphasized"
                    }, m))
                })) : U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body2"
                    }, m))
                }));
                n[9] = p;
                n[10] = R;
                n[11] = i;
                n[12] = m;
                n[13] = u;
                n[14] = L;
            } else {
                L = n[14];
            }
            return L;
        }
        const E = a.color ?? "secondaryEmphasized";
        let k;
        if (n[15] !== u) {
            k = [
                u,
                Z.muted
            ];
            n[15] = u;
            n[16] = k;
        } else {
            k = n[16];
        }
        let I;
        if (n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s) {
            I = <K {...babelHelpers.extends({}, s, {
                color: E,
                ref: i,
                xstyle: k
            })}/>;
            n[17] = i;
            n[18] = E;
            n[19] = k;
            n[20] = s;
            n[21] = I;
        } else {
            I = n[21];
        }
        return I;
    }
    const te = {
        sectionTitle: {
            fontSize: "x1f6kntn",
            lineHeight: "x1u7k74",
            $$css: true
        }
    };
    function ne(e) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, C);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, b);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "teal"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let p;
            if (n[7] !== s) {
                const _ = s;
                const { children: f, color: g, textAlign: h, weight: y } = _;
                const S = babelHelpers.objectWithoutPropertiesLoose(_, v);
                p = S;
                n[7] = s;
                n[8] = p;
            } else {
                p = n[8];
            }
            const R = s.weight === "semibold" || s.weight === "bold";
            let L;
            if (n[9] !== p || n[10] !== R || n[11] !== i || n[12] !== m || n[13] !== u) {
                L = R ? U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body2Emphasized"
                    }, m))
                })) : U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body2"
                    }, m))
                }));
                n[9] = p;
                n[10] = R;
                n[11] = i;
                n[12] = m;
                n[13] = u;
                n[14] = L;
            } else {
                L = n[14];
            }
            return L;
        }
        const E = a.color ?? "teal";
        let k;
        if (n[15] !== u) {
            k = [
                u,
                te.sectionTitle
            ];
            n[15] = u;
            n[16] = k;
        } else {
            k = n[16];
        }
        let I;
        if (n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s) {
            I = <K {...babelHelpers.extends({}, s, {
                color: E,
                ref: i,
                xstyle: k
            })}/>;
            n[17] = i;
            n[18] = E;
            n[19] = k;
            n[20] = s;
            n[21] = I;
        } else {
            I = n[21];
        }
        return I;
    }
    const re = {
        small: {
            fontSize: "x1nxh6w3",
            lineHeight: "xcgms0a",
            $$css: true
        }
    };
    function oe(e) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, S);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, R);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "secondary"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let p;
            if (n[7] !== s) {
                const _ = s;
                const { children: f, color: g, textAlign: h, weight: y } = _;
                const C = babelHelpers.objectWithoutPropertiesLoose(_, L);
                p = C;
                n[7] = s;
                n[8] = p;
            } else {
                p = n[8];
            }
            const b = s.weight === "semibold" || s.weight === "bold";
            let v;
            if (n[9] !== p || n[10] !== b || n[11] !== i || n[12] !== m || n[13] !== u) {
                v = b ? U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body2Emphasized"
                    }, m))
                })) : U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body2"
                    }, m))
                }));
                n[9] = p;
                n[10] = b;
                n[11] = i;
                n[12] = m;
                n[13] = u;
                n[14] = v;
            } else {
                v = n[14];
            }
            return v;
        }
        const E = a.color ?? "secondary";
        let k;
        if (n[15] !== u) {
            k = [
                u,
                re.small
            ];
            n[15] = u;
            n[16] = k;
        } else {
            k = n[16];
        }
        let I;
        if (n[17] !== i || n[18] !== E || n[19] !== k || n[20] !== s) {
            I = <K {...babelHelpers.extends({}, s, {
                color: E,
                ref: i,
                xstyle: k
            })}/>;
            n[17] = i;
            n[18] = E;
            n[19] = k;
            n[20] = s;
            n[21] = I;
        } else {
            I = n[21];
        }
        return I;
    }
    const ae = {
        teal: {
            color: "x1v5yvga",
            $$css: true
        },
        blue: {
            color: "x1ph7ams",
            $$css: true
        },
        green: {
            color: "xo1mcw5",
            $$css: true
        },
        primary: {
            color: "x14ug900",
            $$css: true
        },
        actionEmphasized: {
            color: "xo1mcw5",
            $$css: true
        },
        disabled: {
            color: "x18cpw0e",
            $$css: true
        }
    };
    const ie = {
        teal: {
            ":hover_color": "x7fdv2",
            $$css: true
        },
        blue: {
            ":hover_color": "xa9mtye",
            $$css: true
        },
        green: {
            ":hover_color": "xyla9g4",
            $$css: true
        },
        primary: {
            ":hover_color": "xxxijta",
            $$css: true
        },
        actionEmphasized: {
            ":hover_color": "xyla9g4",
            $$css: true
        },
        disabled: {
            ":hover_color": "x5ui1cc",
            $$css: true
        }
    };
    function le(e) {
        const t = o("react-compiler-runtime").c(17);
        let n;
        let a;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, E);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        let i;
        let l;
        let s;
        let u;
        let c;
        if (t[3] !== n) {
            const d = n;
            s = d.color;
            l = d.highlightOnHover;
            u = d.weight;
            c = d.xstyle;
            i = babelHelpers.objectWithoutPropertiesLoose(d, k);
            t[3] = n;
            t[4] = i;
            t[5] = l;
            t[6] = s;
            t[7] = u;
            t[8] = c;
        } else {
            i = t[4];
            l = t[5];
            s = t[6];
            u = t[7];
            c = t[8];
        }
        const m = s === void 0 ? "blue" : s;
        const p = u === void 0 ? "medium" : u;
        const _ = V[p];
        const f = l === true ? ie[m] : ae[m];
        let g;
        if (t[9] !== f || t[10] !== _ || t[11] !== c) {
            g = [
                c,
                _,
                f
            ];
            t[9] = f;
            t[10] = _;
            t[11] = c;
            t[12] = g;
        } else {
            g = t[12];
        }
        let h;
        if (t[13] !== i || t[14] !== a || t[15] !== g) {
            h = U.jsx(r("WAWebUnstyledButton.react"), babelHelpers.extends({}, i, {
                xstyle: g,
                ref: a
            }));
            t[13] = i;
            t[14] = a;
            t[15] = g;
            t[16] = h;
        } else {
            h = t[16];
        }
        return h;
    }
    function se(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children: n, color: a } = e;
        const i = H[a];
        let l;
        if (t[0] !== n || t[1] !== i) {
            const Component = r("WAWebBox.react");
            l = <Component as="span" xstyle={i}>{n}</Component>;
            t[0] = n;
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    function Ue1(e) {
        const n = o("react-compiler-runtime").c(19);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, I);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        let c;
        let d;
        if (n[3] !== a) {
            const m = a;
            s = m.color;
            c = m.textAlign;
            u = m.weight;
            d = m.xstyle;
            l = babelHelpers.objectWithoutPropertiesLoose(m, T);
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
            n[7] = c;
            n[8] = d;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
            c = n[7];
            d = n[8];
        }
        const p = u === void 0 ? "normal" : u;
        const _ = s != null ? H[s] : null;
        const f = V[p];
        const g = c != null ? G[c] : null;
        const h = l.as ?? "div";
        let y;
        if (n[9] !== g || n[10] !== _ || n[11] !== f || n[12] !== d) {
            y = [
                f,
                _,
                g,
                d
            ];
            n[9] = g;
            n[10] = _;
            n[11] = f;
            n[12] = d;
            n[13] = y;
        } else {
            y = n[13];
        }
        let C;
        if (n[14] !== l || n[15] !== i || n[16] !== h || n[17] !== y) {
            C = U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, l, {
                as: h,
                labelFor: l.labelFor,
                ref: i,
                xstyle: y
            }));
            n[14] = l;
            n[15] = i;
            n[16] = h;
            n[17] = y;
            n[18] = C;
        } else {
            C = n[18];
        }
        return C;
    }
    const ce = {
        style: {
            fontSize: "x6prxxf",
            lineHeight: "x1o2sk6j",
            $$css: true
        }
    };
    function de(e) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, D);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const c = a;
            u = c.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(c, x);
            l = j(s);
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const d = l;
        if (d != null) {
            let m;
            if (n[7] !== s) {
                const p = s;
                const { children: _, color: f, textAlign: g, weight: h } = p;
                const y = babelHelpers.objectWithoutPropertiesLoose(p, $);
                m = y;
                n[7] = s;
                n[8] = m;
            } else {
                m = n[8];
            }
            const C = s.weight === "semibold" || s.weight === "bold";
            let b;
            if (n[9] !== m || n[10] !== C || n[11] !== i || n[12] !== d || n[13] !== u) {
                b = C ? U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, m, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body1Emphasized"
                    }, d))
                })) : U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, m, {
                    ref: i,
                    xstyle: u,
                    children: U.jsx(r("WDSText.react"), babelHelpers.extends({
                        type: "Body1"
                    }, d))
                }));
                n[9] = m;
                n[10] = C;
                n[11] = i;
                n[12] = d;
                n[13] = u;
                n[14] = b;
            } else {
                b = n[14];
            }
            return b;
        }
        const v = s.color ?? "wdsContentDefault";
        let S;
        if (n[15] !== u) {
            S = [
                ce.style,
                u
            ];
            n[15] = u;
            n[16] = S;
        } else {
            S = n[16];
        }
        let R;
        if (n[17] !== i || n[18] !== v || n[19] !== S || n[20] !== s) {
            R = <Ue1 {...babelHelpers.extends({}, s, {
                color: v,
                ref: i,
                xstyle: S
            })}/>;
            n[17] = i;
            n[18] = v;
            n[19] = S;
            n[20] = s;
            n[21] = R;
        } else {
            R = n[21];
        }
        return R;
    }
    const me = {
        style: {
            fontSize: "xngnso2",
            lineHeight: "xcgk4ki",
            $$css: true
        }
    };
    function pe(e) {
        const n = o("react-compiler-runtime").c(23);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, P);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, N);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "wdsContentDefault"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let p;
            if (n[7] !== s) {
                const _ = s;
                const { children: f, color: g, textAlign: h, weight: y } = _;
                const C = babelHelpers.objectWithoutPropertiesLoose(_, M);
                p = C;
                n[7] = s;
                n[8] = p;
            } else {
                p = n[8];
            }
            let b;
            if (n[9] !== m) {
                b = U.jsx(r("WDSText.react"), babelHelpers.extends({
                    type: "Headline1"
                }, m));
                n[9] = m;
                n[10] = b;
            } else {
                b = n[10];
            }
            let v;
            if (n[11] !== p || n[12] !== i || n[13] !== b || n[14] !== u) {
                v = U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: b
                }));
                n[11] = p;
                n[12] = i;
                n[13] = b;
                n[14] = u;
                n[15] = v;
            } else {
                v = n[15];
            }
            return v;
        }
        const S = s.color ?? "wdsContentDefault";
        let R;
        if (n[16] !== u) {
            R = [
                me.style,
                u
            ];
            n[16] = u;
            n[17] = R;
        } else {
            R = n[17];
        }
        let L;
        if (n[18] !== i || n[19] !== S || n[20] !== R || n[21] !== s) {
            L = <Ue1 {...babelHelpers.extends({}, s, {
                color: S,
                ref: i,
                xstyle: R
            })}/>;
            n[18] = i;
            n[19] = S;
            n[20] = R;
            n[21] = s;
            n[22] = L;
        } else {
            L = n[22];
        }
        return L;
    }
    const _e = {
        style: {
            fontSize: "x1603h9y",
            lineHeight: "xgif2c7",
            $$css: true
        }
    };
    function fe(e) {
        const n = o("react-compiler-runtime").c(23);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, w);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, A);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "wdsContentDefault"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let p;
            if (n[7] !== s) {
                const _ = s;
                const { children: f, color: g, textAlign: h, weight: y } = _;
                const C = babelHelpers.objectWithoutPropertiesLoose(_, F);
                p = C;
                n[7] = s;
                n[8] = p;
            } else {
                p = n[8];
            }
            let b;
            if (n[9] !== m) {
                b = U.jsx(r("WDSText.react"), babelHelpers.extends({
                    type: "Headline2"
                }, m));
                n[9] = m;
                n[10] = b;
            } else {
                b = n[10];
            }
            let v;
            if (n[11] !== p || n[12] !== i || n[13] !== b || n[14] !== u) {
                v = U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: b
                }));
                n[11] = p;
                n[12] = i;
                n[13] = b;
                n[14] = u;
                n[15] = v;
            } else {
                v = n[15];
            }
            return v;
        }
        const S = s.color ?? "wdsContentDefault";
        let R;
        if (n[16] !== u) {
            R = [
                _e.style,
                u
            ];
            n[16] = u;
            n[17] = R;
        } else {
            R = n[17];
        }
        let L;
        if (n[18] !== i || n[19] !== S || n[20] !== R || n[21] !== s) {
            L = <Ue1 {...babelHelpers.extends({}, s, {
                color: S,
                ref: i,
                xstyle: R
            })}/>;
            n[18] = i;
            n[19] = S;
            n[20] = R;
            n[21] = s;
            n[22] = L;
        } else {
            L = n[22];
        }
        return L;
    }
    const ge = {
        style: {
            fontSize: "x7yx35o",
            lineHeight: "x19v9tvf",
            $$css: true
        }
    };
    function he(e) {
        const n = o("react-compiler-runtime").c(23);
        let a;
        let i;
        if (n[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, O);
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let s;
        let u;
        if (n[3] !== a) {
            const d = a;
            u = d.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(d, B);
            l = j(babelHelpers.extends({}, s, {
                color: a.color ?? "wdsContentDeemphasized"
            }));
            n[3] = a;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const m = l;
        if (m != null) {
            let p;
            if (n[7] !== s) {
                const _ = s;
                const { children: f, color: g, textAlign: h, weight: y } = _;
                const C = babelHelpers.objectWithoutPropertiesLoose(_, W);
                p = C;
                n[7] = s;
                n[8] = p;
            } else {
                p = n[8];
            }
            let b;
            if (n[9] !== m) {
                b = U.jsx(r("WDSText.react"), babelHelpers.extends({
                    type: "Body2"
                }, m));
                n[9] = m;
                n[10] = b;
            } else {
                b = n[10];
            }
            let v;
            if (n[11] !== p || n[12] !== i || n[13] !== b || n[14] !== u) {
                v = U.jsx(r("WAWebBox.react"), babelHelpers.extends({}, p, {
                    ref: i,
                    xstyle: u,
                    children: b
                }));
                n[11] = p;
                n[12] = i;
                n[13] = b;
                n[14] = u;
                n[15] = v;
            } else {
                v = n[15];
            }
            return v;
        }
        const S = s.color ?? "wdsContentDeemphasized";
        let R;
        if (n[16] !== u) {
            R = [
                ge.style,
                u
            ];
            n[16] = u;
            n[17] = R;
        } else {
            R = n[17];
        }
        let L;
        if (n[18] !== i || n[19] !== S || n[20] !== R || n[21] !== s) {
            L = <Ue1 {...babelHelpers.extends({}, s, {
                color: S,
                ref: i,
                xstyle: R
            })}/>;
            n[18] = i;
            n[19] = S;
            n[20] = R;
            n[21] = s;
            n[22] = L;
        } else {
            L = n[22];
        }
        return L;
    }
    l.WAWebTextLarge = X;
    l.WAWebTextTitle = J;
    l.WAWebTextMuted = ee;
    l.WAWebTextSectionTitle = ne;
    l.WAWebTextSmall = oe;
    l.WAWebClickableText = le;
    l.WAWebTextColor = se;
    l.WAWebTextTitleRefreshed = de;
    l.WAWebTextLargeRefreshed = pe;
    l.WAWebTextMediumRefreshed = fe;
    l.WAWebTextMutedRefreshed = he;
}, 98);