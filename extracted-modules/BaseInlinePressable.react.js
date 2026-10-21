__d("BaseInlinePressable.react", [
    "CometPressable.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "ariaLabel",
        "children",
        "color",
        "cursorDisabled",
        "expanding",
        "linkProps",
        "onPress",
        "xstyle"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        defaultCursor: {
            cursor: "xt0e3qv",
            $$css: true
        },
        disabled: {
            textDecoration: "x1hl2dhg",
            $$css: true
        },
        disabledColor: {
            color: "x1dntmbh",
            $$css: true
        },
        disabledLink: {
            opacity: "xbyyjgo",
            $$css: true
        },
        expanding: {
            display: "x3nfvp2",
            $$css: true
        },
        link: {
            ":hover_textDecoration": "xt0b8zv",
            $$css: true
        },
        linkColor: {
            color: "x1fey0fg",
            $$css: true
        },
        root: {
            display: "xt0psk2",
            position: "x1n2onr6",
            userSelect: "x87ps6o",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(28);
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
        let m;
        let linkProps;
        let _;
        let f;
        let g;
        let h;
        let y;
        if (n[3] !== a) {
            const C = a;
            l = C.ariaLabel;
            u = C.children;
            g = C.color;
            m = C.cursorDisabled;
            h = C.expanding;
            linkProps = C.linkProps;
            _ = C.onPress;
            y = C.xstyle;
            f = babelHelpers.objectWithoutPropertiesLoose(C, s);
            n[3] = a;
            n[4] = l;
            n[5] = u;
            n[6] = m;
            n[7] = linkProps;
            n[8] = _;
            n[9] = f;
            n[10] = g;
            n[11] = h;
            n[12] = y;
        } else {
            l = n[4];
            u = n[5];
            m = n[6];
            linkProps = n[7];
            _ = n[8];
            f = n[9];
            g = n[10];
            h = n[11];
            y = n[12];
        }
        const b = g === undefined ? "blue" : g;
        const v = h === undefined ? false : h;
        const S = m === true && d.defaultCursor;
        const R = v && d.expanding;
        let L;
        if (n[13] !== S || n[14] !== R || n[15] !== y) {
            L = [
                d.root,
                S,
                R,
                y
            ];
            n[13] = S;
            n[14] = R;
            n[15] = y;
            n[16] = L;
        } else {
            L = n[16];
        }
        const E = L;
        const k = b !== "inherit" && (linkProps != null || _ != null);
        let I;
        if (n[17] !== E || n[18] !== k) {
            I = function({ disabled, hovered }) {
                return [
                    E,
                    k && d.linkColor,
                    hovered && !disabled && d.link,
                    disabled && d.disabled,
                    disabled && !k && d.disabledColor,
                    disabled && k && d.disabledLink
                ];
            };
            n[17] = E;
            n[18] = k;
            n[19] = I;
        } else {
            I = n[19];
        }
        let T;
        if (n[20] !== l || n[21] !== u || n[22] !== linkProps || n[23] !== _ || n[24] !== f || n[25] !== i || n[26] !== I) {
            T = c.jsx(r("CometPressable.react"), babelHelpers.extends({
                "aria-label": l,
                linkProps,
                onPress: _,
                overlayDisabled: true
            }, f, {
                ref: i,
                xstyle: I,
                children: u
            }));
            n[20] = l;
            n[21] = u;
            n[22] = linkProps;
            n[23] = _;
            n[24] = f;
            n[25] = i;
            n[26] = I;
            n[27] = T;
        } else {
            T = n[27];
        }
        return T;
    }
    l.default = m;
}, 98);