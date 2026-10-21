__d("WAWebDropdownItem.react", [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebNoop",
    "WAWebPill.react",
    "WAWebStopEvent",
    "WAWebTooltip.react",
    "WDSFocusStateStyles",
    "WDSIconIcCheck.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    const e = [
        "icon"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useRef, useState } = d;
    const _ = {
        marginInlineEnd10: {
            marginInlineEnd: "x1sa5p1d",
            $$css: true
        }
    };
    const f = n("$InternalEnum").Mirrored([
        "Compact",
        "Muted",
        "Negative"
    ]);
    const g = {
        container: {
            cursor: "x1ypdohk",
            minWidth: "x5w4yej",
            height: "x1vqgdyp",
            width: "xh8yej3",
            $$css: true
        },
        iconSlot: {
            minWidth: "xt4ypqs",
            $$css: true
        },
        textSlot: {
            lineHeight: "x1o2sk6j",
            fontSize: "x6prxxf",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        newsletterWamoSubMessageType: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        checkmarkIcon: {
            color: "x1v5yvga",
            $$css: true
        },
        item: {
            opacity: "xg01cxk",
            $$css: true
        },
        itemMaterial: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        shortcut: {
            position: "x1n2onr6",
            $$css: true
        },
        defaultRefreshed: {
            color: "xhslqc4",
            $$css: true
        },
        textHover: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        emoji: {
            flexShrink: "x2lah0s",
            flexGrow: "x1c4vz4f",
            flexBasis: "xdl72j9",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            opacity: "xg01cxk",
            cursor: "x1ypdohk",
            $$css: true
        },
        emojiGrid: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            $$css: true
        },
        emojiPreview: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            borderStartStartRadius: "x7uoqk1",
            borderStartEndRadius: "x1p4qogd",
            borderEndEndRadius: "x1fr94nc",
            borderEndStartRadius: "x1633rxx",
            opacity: "x1hc1fzr",
            boxShadow: "x1s2ixkd",
            $$css: true
        },
        iconType: {
            flexShrink: "x2lah0s",
            flexGrow: "x1c4vz4f",
            flexBasis: "xdl72j9",
            marginTop: "xcxhlts x1as1d8k",
            opacity: "x1hc1fzr",
            $$css: true
        },
        attachMenuPopup: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        negative: {
            color: "xqnyt8g",
            backgroundColor: "xy7q86r",
            $$css: true
        },
        ellipsify: {
            position: "x1n2onr6",
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        action: {
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            paddingInlineEnd: "x1ikfw9c",
            paddingInlineStart: "x13jy36j",
            fontSize: "x7yx35o",
            lineHeight: "xwgyvy0",
            color: "x14ug900",
            whiteSpace: "xuxw1ft",
            cursor: "x1ypdohk",
            $$css: true
        },
        compact: {
            paddingInlineEnd: "x64bnmy",
            $$css: true
        },
        fixedHeight: {
            height: "x1vqgdyp",
            $$css: true
        },
        disabledContent: {
            opacity: "xti2d7y",
            $$css: true
        },
        checkmark: {
            position: "x10l6tqk",
            insetInlineEnd: "xdg88n9",
            left: null,
            right: null,
            top: "xwa60dl",
            transform: "x1cb1t30",
            $$css: true
        }
    };
    function H1Component(e) {
        const { children, tooltip, tooltipPosition } = e;
        const i = tooltipPosition === undefined ? o("WAWebTooltip.react").PopoverPosition.Start : tooltipPosition;
        const e_tooltipAlignment = e.tooltipAlignment;
        const u = e_tooltipAlignment === undefined ? o("WAWebTooltip.react").PopoverAlignment.Center : e_tooltipAlignment;
        const e_type = e.type;
        const _ = e_type === undefined ? "text" : e_type;
        const e_disabled = e.disabled;
        const y = e_disabled === undefined ? false : e_disabled;
        const { theme, action, testid, tabIndex, addSpacing } = e;
        const L = addSpacing === undefined ? false : addSpacing;
        const { ariaLabel, selected } = e;
        const I = selected === undefined ? false : selected;
        const { pillText, showTooltipOnOverflow } = e;
        const x = showTooltipOnOverflow === undefined ? false : showTooltipOnOverflow;
        const e_fixedHeight = e.fixedHeight;
        const P = e_fixedHeight === undefined ? true : e_fixedHeight;
        const N = useState(false);
        const M = N[0];
        const w = N[1];
        const A = useState(false);
        const F = A[0];
        const O = A[1];
        const BRef = useRef();
        const WRef = useRef(null);
        const q = r("useWAWebUIM")();
        const U = ()=>{
            if (BRef.current == null) {
                return false;
            }
            const overflow = BRef.current.style.overflow;
            if (!overflow || overflow === "visible") {
                BRef.current.style.overflow = "hidden";
            }
            const t = BRef.current.clientWidth < BRef.current.scrollWidth || BRef.current.clientHeight < BRef.current.scrollHeight;
            BRef.current.style.overflow = overflow;
            return t;
        };
        let V;
        if (tooltip != null || U() && x) {
            let H;
            let position = i;
            const z = u;
            if (tooltip != null) {
                H = tooltip;
            } else if (tooltip == null && o("WAWebL10NFbtTypeUtils").isStringOrFbt(children) && U()) {
                H = children;
                position = o("WAWebTooltip.react").PopoverPosition.Bottom;
            }
            const Component = o("WAWebTooltip.react").WAWebHoverTooltip;
            V = <Component targetRef={WRef} position={position} alignment={z} buffer={8}>{H}</Component>;
        }
        const j = (t)=>{
            const e = action(t) === false;
            if (!e) {
                if (q) {
                    q.requestDismiss();
                }
            }
        };
        const K = function() {
            w(true);
        };
        const Q = function() {
            w(false);
        };
        const X = function() {
            O(true);
        };
        const Y = function() {
            O(false);
        };
        const J = function(t) {
            j(t);
        };
        const Z = function(t) {
            if (!t.repeat) {
                j(t);
            }
        };
        const Component = o("WAWebPill.react").Pill;
        const ee = o("WAWebL10NFbtTypeUtils").isStringOrFbt(children) || L ? <div {...babelHelpers.extends({
            ref: BRef
        }, (s || (s = r("stylex"))).props(g.ellipsify, g.action, theme === f.Compact && g.compact, P && g.fixedHeight, y && g.disabledContent, e.xstyle), {
            "aria-label": ariaLabel ?? (o("WAWebL10NFbtTypeUtils").isStringOrFbt(children) ? children : null),
            children: [
                children,
                I && c.jsx(r("WDSIconIcCheck.react"), {
                    xstyle: [
                        g.checkmarkIcon,
                        g.checkmark
                    ]
                }),
                pillText != null ? <Component inline>{pillText}</Component> : null
            ]
        })}/> : children;
        const handlers = {
            enter: Z,
            space: Z
        };
        const ne = M || F;
        const re = _ === "text" || _ === "attach-menu-popup" || _ === "newsletter-wamo-message-type";
        const oe = _ === "emoji" || _ === "emoji-grid" || _ === "emoji-preview";
        const className = (s || (s = r("stylex")))(g.item, g.itemMaterial, g.shortcut, g.defaultRefreshed, re && ne && theme !== f.Negative && g.textHover, oe && g.emoji, _ === "emoji-grid" && g.emojiGrid, _ === "emoji-preview" && g.emojiPreview, _ === "icon" && g.iconType, _ === "attach-menu-popup" && g.attachMenuPopup, theme === f.Negative && ne && g.negative, _ === "newsletter-wamo-message-type" && g.newsletterWamoSubMessageType);
        const ie = y ? {} : {
            handlers,
            onContextMenu: o("WAWebStopEvent").preventDefault,
            onMouseDown: o("WAWebStopEvent").preventDefault,
            onClick: J,
            onMouseEnter: K,
            onMouseLeave: Q,
            onFocus: X,
            onBlur: Y
        };
        return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
            ref: WRef,
            component: "li",
            className,
            xstyle: F && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
            "data-animate-dropdown-item": true,
            "data-testid": testid,
            tabIndex: tabIndex ?? 0,
            role: y ? undefined : "button"
        }, ie, {
            children: [
                ee,
                V
            ]
        }));
    }
    H1Component.displayName = `${H1Component.name} [from ${i.id}]`;
    function Y2Component(e) {
        const t = o("react-compiler-runtime").c(24);
        const { action, children, disabled, icon, testid, theme, tooltip, xstyle } = e;
        let f;
        if (t[0] !== disabled) {
            f = ({
                0: {},
                1: {
                    className: "xti2d7y x1h6gzvc"
                }
            })[(disabled === true) << 0];
            t[0] = disabled;
            t[1] = f;
        } else {
            f = t[1];
        }
        const action_1 = disabled === true ? r("WAWebNoop") : action;
        let C;
        if (t[2] !== xstyle) {
            C = [
                g.iconSlot,
                o("WDSMargins.stylex").wdsMargins.marginStart8,
                _.marginInlineEnd10,
                xstyle
            ];
            t[2] = xstyle;
            t[3] = C;
        } else {
            C = t[3];
        }
        let b;
        if (t[4] !== icon || t[5] !== C) {
            const Component = o("WAWebFlex.react").FlexRow;
            b = <Component justify="center" xstyle={C}>{icon}</Component>;
            t[4] = icon;
            t[5] = C;
            t[6] = b;
        } else {
            b = t[6];
        }
        let v;
        if (t[7] !== xstyle) {
            v = (s || (s = r("stylex"))).props(g.textSlot, o("WDSMargins.stylex").wdsMargins.marginEnd24, xstyle);
            t[7] = xstyle;
            t[8] = v;
        } else {
            v = t[8];
        }
        let S;
        if (t[9] !== children || t[10] !== v) {
            S = <span {...babelHelpers.extends({}, v, {
                children
            })}/>;
            t[9] = children;
            t[10] = v;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] !== b || t[13] !== S) {
            const Component = o("WAWebFlex.react").FlexRow;
            R = <Component align="center" xstyle={g.container}>{b}{S}</Component>;
            t[12] = b;
            t[13] = S;
            t[14] = R;
        } else {
            R = t[14];
        }
        let L;
        if (t[15] !== action_1 || t[16] !== R || t[17] !== testid || t[18] !== theme || t[19] !== tooltip) {
            L = <H1Component testid={testid} action={action_1} tooltip={tooltip} theme={theme}>{R}</H1Component>;
            t[15] = action_1;
            t[16] = R;
            t[17] = testid;
            t[18] = theme;
            t[19] = tooltip;
            t[20] = L;
        } else {
            L = t[20];
        }
        let E;
        if (t[21] !== f || t[22] !== L) {
            E = <div {...babelHelpers.extends({}, f, {
                children: L
            })}/>;
            t[21] = f;
            t[22] = L;
            t[23] = E;
        } else {
            E = t[23];
        }
        return E;
    }
    function CComponent(t) {
        const n = o("react-compiler-runtime").c(6);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.icon;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        let i;
        if (n[3] !== r || n[4] !== a) {
            i = a ? <Y2Component action={r.action} disabled={r.disabled} icon={a} testid={r.testid} tooltip={r.tooltip} theme={r.theme} xstyle={r.xstyle}>{r.children}</Y2Component> : <H1Component {...babelHelpers.extends({}, r, {
                children: r.children
            })}/>;
            n[3] = r;
            n[4] = a;
            n[5] = i;
        } else {
            i = n[5];
        }
        return i;
    }
    l.DropdownItemThemeType = f;
    l.DropdownItem = CComponent;
}, 98);