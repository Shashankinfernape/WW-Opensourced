__d("WAWebRound.react", [
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    const e = [
        "className"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = n("$InternalEnum").Mirrored([
        "Default",
        "XSmall",
        "Small",
        "Medium",
        "Large",
        "Inverted",
        "NoShadow",
        "SVGGrayButton",
        "ReactionPickerButton",
        "Approve",
        "Reject",
        "Disabled",
        "QuickAction",
        "QuickActionRefreshed",
        "QuickActionRefreshedOverlay",
        "DrawerFooter",
        "Error"
    ]);
    const m = {
        btn: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x3x2bpi",
            height: "xwvwv9b",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            fontSize: "x1f6kntn",
            fontWeight: "xk50ysn",
            color: "x17t9dm2",
            textTransform: "xtvhhri",
            backgroundColor: "xfn3atn",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            boxShadow: "xu306ak",
            transitionDuration: "x12s1jxh",
            transitionProperty: "xkdsq27",
            transitionTimingFunction: "xwwtwea",
            ":active_boxShadow": "x1gfkgh9",
            $$css: true
        },
        approveRefreshed: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            boxShadow: "x1gnnqk1",
            color: "xk4n5i7",
            backgroundColor: "x1abdmlv",
            $$css: true
        },
        rejectRefreshed: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            boxShadow: "x1gnnqk1",
            color: "xqnyt8g",
            backgroundColor: "xrkjzwr",
            $$css: true
        },
        disabled: {
            color: "xhslqc4",
            cursor: "x1h6gzvc",
            backgroundColor: "x3qdkio",
            boxShadow: "x1gnnqk1",
            ":active_color": "x8idqv2",
            ":active_cursor": "x4xbgct",
            ":active_backgroundColor": "x71m2qp",
            ":active_boxShadow": "xpk4wdd",
            $$css: true
        },
        large: {
            width: "x1247r65",
            height: "xng8ra",
            $$css: true
        },
        medium: {
            width: "x1guw455",
            height: "x16wdlz0",
            $$css: true
        },
        small: {
            width: "x1td3qas",
            height: "x10w6t97",
            $$css: true
        },
        xsmall: {
            width: "xo7uitg",
            height: "x9fpu7x",
            boxShadow: "x1gnnqk1",
            ":active_boxShadow": "xpk4wdd",
            $$css: true
        },
        inverted: {
            width: "x1useyqa",
            height: "xsdox4t",
            marginTop: "xdj266r",
            marginInlineEnd: "x11t971q",
            marginBottom: "xat24cr",
            marginInlineStart: "xvc5jky",
            backgroundColor: "x1y1wcne",
            boxShadow: "x1gnnqk1",
            $$css: true
        },
        invertedRefreshed: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        quickAction: {
            width: "xezl2tj",
            height: "xlrawln",
            backgroundColor: "x1518k6t",
            boxShadow: "x1gnnqk1",
            ":active_boxShadow": "xpk4wdd",
            $$css: true
        },
        quickActionRefreshed: {
            width: "x23j0i4",
            height: "xd7y6wv",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            boxShadow: "xx43kwn",
            $$css: true
        },
        quickActionRefreshedOverlay: {
            width: "xw4jnvo",
            height: "x1qx5ct2",
            backgroundColor: "x1bu39yj",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            boxShadow: "x1gnnqk1",
            $$css: true
        },
        svgGrayButton: {
            width: "x1useyqa",
            height: "xsdox4t",
            backgroundColor: "x4wrhlh",
            boxShadow: "x1gnnqk1",
            ":active_boxShadow": "xpk4wdd",
            $$css: true
        },
        noShadow: {
            width: "x1useyqa",
            height: "xsdox4t",
            boxShadow: "x1gnnqk1",
            ":active_boxShadow": "xpk4wdd",
            $$css: true
        },
        hideBackground: {
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        reactionPickerButton: {
            width: "x1td3qas",
            height: "x10w6t97",
            backgroundColor: "x4wrhlh",
            boxShadow: "x1gnnqk1",
            $$css: true
        },
        drawerFooter: {
            backgroundColor: "x3qdkio",
            $$css: true
        },
        error: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xvy4d1p",
            minWidth: "xnei2rj",
            height: "xxk0z11",
            color: "x17t9dm2",
            pointerEvents: "x67bb7w",
            backgroundColor: "xk0ssx3",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1zfx7y",
            borderInlineEndColor: "x1gj3efs",
            borderBottomColor: "x151wx5t",
            borderInlineStartColor: "xea0m3l",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(34);
        const { ariaPressed, children, className, dataTab, disabled, hideBackground, inverted, label, large, medium, onClick, onContextMenu, onKeyDown, ref, small, tabIndex, testid, theme, title, xstyle } = t;
        const D = r("useWAWebIsKeyboardUser")();
        const D_isKeyboardUser = D.isKeyboardUser;
        let $;
        let P;
        if (n[0] !== className || n[1] !== disabled || n[2] !== hideBackground || n[3] !== inverted || n[4] !== D_isKeyboardUser || n[5] !== large || n[6] !== medium || n[7] !== small || n[8] !== theme || n[9] !== xstyle) {
            const N = (s || (s = r("stylex"))).props(m.btn, (large === true || theme === d.Large) && m.large, (medium === true || theme === d.Medium) && m.medium, (small === true || theme === d.Small) && m.small, theme === d.XSmall && m.xsmall, (inverted === true || theme === d.Inverted) && m.inverted, (inverted === true || theme === d.Inverted) && m.invertedRefreshed, hideBackground === true && m.hideBackground, (disabled === true || theme === d.Disabled) && m.disabled, theme === d.NoShadow && m.noShadow, theme === d.SVGGrayButton && m.svgGrayButton, theme === d.ReactionPickerButton && m.reactionPickerButton, theme === d.Approve && m.approveRefreshed, theme === d.Reject && m.rejectRefreshed, theme === d.QuickAction && m.quickAction, theme === d.QuickActionRefreshed && m.quickActionRefreshed, theme === d.QuickActionRefreshedOverlay && m.quickActionRefreshedOverlay, theme === d.DrawerFooter && disabled === true && m.drawerFooter, theme === d.Error && m.error, false, false, D_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, xstyle);
            const M = N.className;
            const w = babelHelpers.objectWithoutPropertiesLoose(N, e);
            $ = w;
            P = o("WAWebClassnames").classnamesConvertMeToStylexPlease(className, M);
            n[0] = className;
            n[1] = disabled;
            n[2] = hideBackground;
            n[3] = inverted;
            n[4] = D_isKeyboardUser;
            n[5] = large;
            n[6] = medium;
            n[7] = small;
            n[8] = theme;
            n[9] = xstyle;
            n[10] = $;
            n[11] = P;
        } else {
            $ = n[10];
            P = n[11];
        }
        const A = P;
        let F;
        if (n[12] !== onClick) {
            F = function(t) {
                onClick?.(t);
                t.preventDefault();
            };
            n[12] = onClick;
            n[13] = F;
        } else {
            F = n[13];
        }
        const O = F;
        let B;
        if (n[14] !== disabled) {
            B = {
                disabled
            };
            n[14] = disabled;
            n[15] = B;
        } else {
            B = n[15];
        }
        const W = r("useWAWebStaticButtonA11y")(O, B);
        const q = W[0];
        const U = W[1];
        const V = r("useMergeRefs")(q, ref);
        let H;
        if (n[16] !== disabled || n[17] !== onKeyDown || n[18] !== U) {
            H = onKeyDown ? function(e) {
                if (r("WAWebKeyboardIsKeyActivation")(e)) {
                    e.preventDefault();
                    if (disabled !== true) {
                        onKeyDown(e);
                    }
                }
            } : U.onKeyPress;
            n[16] = disabled;
            n[17] = onKeyDown;
            n[18] = U;
            n[19] = H;
        } else {
            H = n[19];
        }
        const G = H;
        const z = tabIndex ?? (onKeyDown != null || onClick != null ? 0 : -1);
        let j;
        if (n[20] !== ariaPressed || n[21] !== A || n[22] !== $ || n[23] !== children || n[24] !== z || n[25] !== dataTab || n[26] !== G || n[27] !== label || n[28] !== V || n[29] !== onContextMenu || n[30] !== U || n[31] !== testid || n[32] !== title) {
            j = <div {...babelHelpers.extends({}, U, $, {
                "data-testid": testid,
                role: "button",
                "aria-pressed": ariaPressed,
                "aria-label": label,
                tabIndex: z,
                className: A,
                onKeyDown: G,
                ref: V,
                title,
                "data-tab": dataTab,
                onContextMenu,
                children
            })}/>;
            n[20] = ariaPressed;
            n[21] = A;
            n[22] = $;
            n[23] = children;
            n[24] = z;
            n[25] = dataTab;
            n[26] = G;
            n[27] = label;
            n[28] = V;
            n[29] = onContextMenu;
            n[30] = U;
            n[31] = testid;
            n[32] = title;
            n[33] = j;
        } else {
            j = n[33];
        }
        return j;
    }
    l.RoundTheme = d;
    l.Round = PComponent;
}, 98);