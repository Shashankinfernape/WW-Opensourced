__d("WAWebDrawerBody.react", [
    "WAWebFlatListContainer.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "ariaLabel",
        "ariaRole",
        "backgroundColor",
        "children",
        "flatListControllers",
        "isRefresh",
        "overflow",
        "scrollOffset",
        "testid",
        "theme",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        container: {
            position: "x1n2onr6",
            zIndex: "xupqr0c",
            display: "x78zum5",
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            flexDirection: "xdt5ytf",
            overflowX: "x6ikm8r",
            overflowY: "x1odjw0f",
            opacity: "x1hc1fzr",
            $$css: true
        },
        noscroll: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        centerItem: {
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        padding: {
            marginTop: "x1anpbxc",
            marginBottom: "xyorhqc",
            $$css: true
        },
        centerColumn: {
            width: "x1l2rt3b",
            paddingTop: "x13crsa5",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1rxj1xn",
            paddingInlineStart: "x1c1uobl",
            marginTop: "xdj266r",
            marginInlineEnd: "x11t971q",
            marginBottom: "xat24cr",
            marginInlineStart: "xvc5jky",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        darkMode: {
            "::-webkit-scrollbar-track_backgroundColor": "x1anedsm",
            $$css: true
        },
        lightScrollStyles: {
            scrollbarColor: "x15ebywn",
            $$css: true
        },
        darkScrollStyles: {
            scrollbarColor: "x9w6j0p",
            $$css: true
        }
    };
    const p = {
        default: {
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    const _ = {
        default: {
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(38);
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
        const l = o("WAWebThemeContext").useIsDarkTheme();
        let c;
        let f;
        let g;
        let h;
        let y;
        let C;
        let b;
        let v;
        let S;
        let R;
        let L;
        let E;
        if (n[3] !== a) {
            const k = a;
            c = k.ariaLabel;
            f = k.ariaRole;
            g = k.backgroundColor;
            h = k.children;
            y = k.flatListControllers;
            C = k.isRefresh;
            v = k.overflow;
            S = k.scrollOffset;
            R = k.testid;
            L = k.theme;
            E = k.xstyle;
            b = babelHelpers.objectWithoutPropertiesLoose(k, s);
            n[3] = a;
            n[4] = c;
            n[5] = f;
            n[6] = g;
            n[7] = h;
            n[8] = y;
            n[9] = C;
            n[10] = b;
            n[11] = v;
            n[12] = S;
            n[13] = R;
            n[14] = L;
            n[15] = E;
        } else {
            c = n[4];
            f = n[5];
            g = n[6];
            h = n[7];
            y = n[8];
            C = n[9];
            b = n[10];
            v = n[11];
            S = n[12];
            R = n[13];
            L = n[14];
            E = n[15];
        }
        let I;
        if (n[16] !== g || n[17] !== l || n[18] !== C || n[19] !== v || n[20] !== L || n[21] !== E) {
            I = (u || (u = r("stylex")))([
                m.container,
                v === "hidden" && m.noscroll,
                L === "center-content" && m.centerItem,
                L === "padding" && m.padding,
                L === "center-column" && m.centerColumn,
                L === "custom-scroll" && !l && m.lightScrollStyles,
                L === "custom-scroll" && l && m.darkScrollStyles,
                l && m.darkMode,
                g != null && (C === true ? _[g] : p[g]),
                E
            ]);
            n[16] = g;
            n[17] = l;
            n[18] = C;
            n[19] = v;
            n[20] = L;
            n[21] = E;
            n[22] = I;
        } else {
            I = n[22];
        }
        const T = I;
        if (y && y.length > 0) {
            let D;
            if (n[23] !== h || n[24] !== T || n[25] !== y || n[26] !== b || n[27] !== i || n[28] !== S) {
                D = d.jsx(r("WAWebFlatListContainer.react"), babelHelpers.extends({
                    ref: i,
                    flatListControllers: y,
                    className: T,
                    scrollOffset: S
                }, b, {
                    children: h
                }));
                n[23] = h;
                n[24] = T;
                n[25] = y;
                n[26] = b;
                n[27] = i;
                n[28] = S;
                n[29] = D;
            } else {
                D = n[29];
            }
            return D;
        }
        let x;
        if (n[30] !== c || n[31] !== f || n[32] !== h || n[33] !== T || n[34] !== b || n[35] !== i || n[36] !== R) {
            x = <div {...babelHelpers.extends({
                className: T,
                ref: i,
                "aria-label": c,
                role: f,
                "data-testid": R
            }, b, {
                children: h
            })}/>;
            n[30] = c;
            n[31] = f;
            n[32] = h;
            n[33] = T;
            n[34] = b;
            n[35] = i;
            n[36] = R;
            n[37] = x;
        } else {
            x = n[37];
        }
        return x;
    }
    l.default = f;
}, 98);