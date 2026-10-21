__d("WAWebComposeBoxPanelsMenuButton.react", [
    "WAWebKeyboardHotKeys.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const u_memo = u.memo;
    const m = {
        SQUARE24: "SQUARE24",
        SQUARE26: "SQUARE26"
    };
    const p = {
        container: {
            position: "x10l6tqk",
            bottom: "xa5ctxu",
            display: "x1lliihq",
            width: "xpjhzmb",
            color: "xhslqc4",
            borderStartStartRadius: "xr9e8f9",
            borderStartEndRadius: "x1e4oeot",
            borderEndEndRadius: "x1ui04y5",
            borderEndStartRadius: "x6en5u8",
            transform: "xoww4n8",
            $$css: true
        },
        containerActive: {
            color: "x1v5yvga",
            $$css: true
        },
        square26Svg: {
            width: "x23j0i4",
            height: "xd7y6wv",
            $$css: true
        },
        containerTop: {
            zIndex: "xhtitgo",
            $$css: true
        },
        containerPadding: {
            position: "x1n2onr6",
            bottom: "x1ey2m1c",
            display: "x78zum5",
            $$css: true
        },
        containerPaddingSquare24: {
            top: "xj579yz",
            $$css: true
        },
        containerPaddingSquare26: {
            top: "x2odabf",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(32);
        let a;
        let i;
        let l;
        let u;
        let d;
        let component;
        let f;
        let g;
        if (n[0] !== t) {
            d = t.ref;
            u = babelHelpers.objectWithoutPropertiesLoose(t, e);
            l = function(t) {
                t.stopPropagation();
                t.preventDefault();
                u.onClick();
            };
            i = function(t) {
                t.stopPropagation();
                t.preventDefault();
                u.onClick();
            };
            a = o("WAWebKeyboardHotKeys.react").HotKeys;
            component = "button";
            f = u.tabIndex;
            g = (s || (s = r("stylex")))(p.container, u.xstyle, u.isActive && p.containerActive, (u.isMain || u.singleButton) && p.containerTop, u.singleButton && p.containerPadding, u.size === m.SQUARE24 ? p.containerPaddingSquare24 : p.containerPaddingSquare26, u.containerXstyle, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = u;
            n[5] = d;
            n[6] = component;
            n[7] = f;
            n[8] = g;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            u = n[4];
            d = n[5];
            component = n[6];
            f = n[7];
            g = n[8];
        }
        const { "aria-label": aria_label, "data-tab": data_tab, testid } = u;
        let b;
        if (n[9] !== l) {
            b = {
                enter: l,
                space: l
            };
            n[9] = l;
            n[10] = b;
        } else {
            b = n[10];
        }
        const u_style = u.style;
        let S;
        if (n[11] !== u.size) {
            S = ({
                0: {},
                1: {
                    className: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa"
                }
            })[(u.size === m.SQUARE24) << 0];
            n[11] = u.size;
            n[12] = S;
        } else {
            S = n[12];
        }
        const R = u.size === m.SQUARE26 && p.square26Svg;
        let L;
        if (n[13] !== u.Icon || n[14] !== R) {
            L = <u.Icon iconXstyle={R}/>;
            n[13] = u.Icon;
            n[14] = R;
            n[15] = L;
        } else {
            L = n[15];
        }
        let E;
        if (n[16] !== L || n[17] !== S) {
            E = <div {...babelHelpers.extends({}, S, {
                children: L
            })}/>;
            n[16] = L;
            n[17] = S;
            n[18] = E;
        } else {
            E = n[18];
        }
        let k;
        if (n[19] !== a || n[20] !== i || n[21] !== u.style || n[22] !== u.testid || n[23] !== d || n[24] !== component || n[25] !== E || n[26] !== f || n[27] !== g || n[28] !== aria_label || n[29] !== data_tab || n[30] !== b) {
            k = c.jsx(a, {
                component,
                tabIndex: f,
                className: g,
                "aria-label": aria_label,
                "data-tab": data_tab,
                "data-testid": testid,
                onClick: i,
                ref: d,
                handlers: b,
                style: u_style,
                children: E
            });
            n[19] = a;
            n[20] = i;
            n[21] = u.style;
            n[22] = u.testid;
            n[23] = d;
            n[24] = component;
            n[25] = E;
            n[26] = f;
            n[27] = g;
            n[28] = aria_label;
            n[29] = data_tab;
            n[30] = b;
            n[31] = k;
        } else {
            k = n[31];
        }
        return k;
    }
    const f = u_memo(_);
    l.SIZES = m;
    l.PanelsMenuButton = f;
}, 98);