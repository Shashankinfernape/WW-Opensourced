__d("WAWebDrawerButton.react", [
    "WAWebL10N",
    "WAWebL10NFbtTypeUtils",
    "WAWebPopoverContext.react",
    "WAWebText.react",
    "WAWebTooltip.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    const e = [
        "active",
        "id"
    ];
    const s = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useRef = c.useRef;
    const p = {
        container: {
            position: "x1n2onr6",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            alignItems: "x6s0dn4",
            height: "xng8ra",
            backgroundColor: "x1280gxy x1ubxc9n xbmkbis",
            $$css: true
        },
        containerActive: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        containerDisabled: {
            cursor: "x1h6gzvc",
            color: "xhslqc4",
            opacity: "xbyyjgo",
            backgroundColor: "x1280gxy xlqxigy x26lcah",
            $$css: true
        },
        containerSecondaryText: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        containerNoIcon: {
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        containerListAligned: {
            paddingInlineStart: "xsdj86q",
            $$css: true
        },
        containerThemeChatInfo: {
            borderStartStartRadius: "xfql6rm",
            borderStartEndRadius: "x1fno2u7",
            borderEndEndRadius: "x1ovzc0u",
            borderEndStartRadius: "xb66en5",
            height: "xt7dq6l",
            marginInlineStart: "x1hm9lzh",
            marginInlineEnd: "x1sa5p1d",
            paddingTop: "x889kno",
            paddingInlineEnd: "x1xnnf8n",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x106a9eq",
            backgroundColor: "x1280gxy x1n67ipk x1aiwb2g",
            $$css: true
        },
        containerThemeChatlist: {
            paddingInlineStart: "xaso8d8",
            $$css: true
        },
        containerThemeBizToolsSecondary: {
            paddingBottom: "x1l90r2v",
            paddingTop: "xyamay9",
            $$css: true
        },
        roundedContainer: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            ":hover_backgroundColor": "x17gydlx",
            ":focus_backgroundColor": "x1jsj9aw",
            $$css: true
        },
        bizToolsFlexibleHeight: {
            minHeight: "x1gg8mnh",
            height: "xt7dq6l",
            $$css: true
        },
        icon: {
            display: "x78zum5",
            flexShrink: "x2lah0s",
            justifyContent: "xl56j7k",
            color: "xhslqc4",
            $$css: true
        },
        iconWidth: {
            width: "x7mnju",
            $$css: true
        },
        iconPadding: {
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        iconDanger: {
            color: "x30a034",
            $$css: true
        },
        iconSuccess: {
            color: "x1du590y",
            $$css: true
        },
        iconAccent: {
            color: "x1v5yvga",
            $$css: true
        },
        iconThemeChatInfo: {
            marginInlineEnd: "x1my54xf",
            width: "x100vrsf",
            $$css: true
        },
        bodyContainer: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "xdl72j9",
            alignItems: "x6s0dn4",
            height: "x5yr21d",
            paddingInlineEnd: "x5zjp28",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        },
        bodyContainerDivider: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        bodyContainerHasDetail: {
            paddingInlineEnd: "xx281p9",
            $$css: true
        },
        bodyContainerSecondaryText: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        bodyContainerThemeChatInfo: {
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        bodyContainerSecondaryThemeBizTools: {
            paddingBottom: "x18d9i69",
            paddingTop: "xexx8yu",
            $$css: true
        },
        detail: {
            position: "x10l6tqk",
            insetInlineEnd: "x1xdxbdd",
            $$css: true
        }
    };
    function _(e) {
        switch(e){
            case "danger":
                return "critical";
            case "success":
                return "success";
            case "accent":
                return "teal";
            case "dark":
                return "primary";
            default:
                return "primary";
        }
    }
    const openingDelay = 350;
    function g(t) {
        const n = o("react-compiler-runtime").c(8);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.active;
            i = t.id;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        const s = r("useWAWebActiveSelection")(a, i || "");
        const u = s[0];
        const c = s[1];
        let m;
        if (n[4] !== u || n[5] !== c || n[6] !== l) {
            m = <H4Component {...babelHelpers.extends({}, l, {
                active: c,
                ref: u
            })}/>;
            n[4] = u;
            n[5] = c;
            n[6] = l;
            n[7] = m;
        } else {
            m = n[7];
        }
        return m;
    }
    function H4Component(e) {
        const t = o("react-compiler-runtime").c(58);
        let n;
        let a;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        const i = n;
        const { active, ariaLabel, children, className, detail, disabled, divider, icon, onClick, secondaryChildren, testid, theme, title, tooltip, useRoundedStyle, xstyle, xstyleSecondary } = i;
        const $ = disabled === undefined ? false : disabled;
        const P = divider === undefined ? false : divider;
        const N = useRoundedStyle === undefined ? false : useRoundedStyle;
        let M;
        if (t[3] !== $) {
            M = {
                disabled: $
            };
            t[3] = $;
            t[4] = M;
        } else {
            M = t[4];
        }
        const w = r("useWAWebStaticButtonA11y")(onClick, M);
        const A = w[0];
        const F = w[1];
        const O = r("useMergeRefs")(A, a);
        const B = $ ? undefined : n.color;
        let W;
        if (t[5] !== B || t[6] !== icon || t[7] !== n.iconXstyle || t[8] !== theme || t[9] !== N) {
            W = icon != null ? <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.icon, !N && p.iconWidth, N && p.iconPadding, B === "danger" && p.iconDanger, B === "success" && p.iconSuccess, B === "accent" && p.iconAccent, theme === "chat-info" && p.iconThemeChatInfo, n.iconXstyle), {
                children: icon
            })}/> : null;
            t[5] = B;
            t[6] = icon;
            t[7] = n.iconXstyle;
            t[8] = theme;
            t[9] = N;
            t[10] = W;
        } else {
            W = t[10];
        }
        const q = W;
        let U;
        if (t[11] !== active || t[12] !== $ || t[13] !== icon || t[14] !== secondaryChildren || t[15] !== theme || t[16] !== N || t[17] !== xstyle) {
            U = (u || (u = r("stylex")))(p.container, active === true && p.containerActive, !icon && p.containerNoIcon, theme === "list-aligned" && p.containerListAligned, theme === "chatlist" && p.containerThemeChatlist, secondaryChildren != null && p.containerSecondaryText, theme === "biz-tools" && secondaryChildren != null && p.containerThemeBizToolsSecondary, theme === "biz-tools" && p.bizToolsFlexibleHeight, theme === "chat-info" && p.containerThemeChatInfo, N === true && p.roundedContainer, $ === true && p.containerDisabled, xstyle);
            t[11] = active;
            t[12] = $;
            t[13] = icon;
            t[14] = secondaryChildren;
            t[15] = theme;
            t[16] = N;
            t[17] = xstyle;
            t[18] = U;
        } else {
            U = t[18];
        }
        const V = U;
        const H = className != null ? `${V} ${className}` : V;
        let G;
        if (t[19] !== children) {
            G = o("WAWebL10NFbtTypeUtils").isStringOrFbt(children) ? children : null;
            t[19] = children;
            t[20] = G;
        } else {
            G = t[20];
        }
        const j = ariaLabel ?? G;
        const K = c_useRef(null);
        let Q;
        if (t[21] !== tooltip) {
            const Component = o("WAWebTooltip.react").WAWebHoverTooltip;
            Q = tooltip != null ? d.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                targetRef: K,
                popover: <Component targetRef="context" alignment={r("WAWebL10N").isRTL() ? o("WAWebTooltip.react").PopoverAlignment.End : o("WAWebTooltip.react").PopoverAlignment.Start} position={o("WAWebTooltip.react").PopoverPosition.Bottom} openingDelay={openingDelay}>{tooltip}</Component>
            }) : null;
            t[21] = tooltip;
            t[22] = Q;
        } else {
            Q = t[22];
        }
        const X = Q;
        let Y;
        if (t[23] !== detail || t[24] !== P || t[25] !== secondaryChildren || t[26] !== theme || t[27] !== N) {
            Y = (u || (u = r("stylex"))).props(p.bodyContainer, (P || theme === "chatlist") && p.bodyContainerDivider, secondaryChildren != null && p.bodyContainerSecondaryText, detail != null && !N && p.bodyContainerHasDetail, theme === "chat-info" && p.bodyContainerThemeChatInfo, theme === "biz-tools" && secondaryChildren != null && p.bodyContainerSecondaryThemeBizTools);
            t[23] = detail;
            t[24] = P;
            t[25] = secondaryChildren;
            t[26] = theme;
            t[27] = N;
            t[28] = Y;
        } else {
            Y = t[28];
        }
        let J;
        if (t[29] === Symbol.for("react.memo_cache_sentinel")) {
            J = {
                className: "x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft"
            };
            t[29] = J;
        } else {
            J = t[29];
        }
        let Z;
        if (t[30] !== B) {
            Z = _(B);
            t[30] = B;
            t[31] = Z;
        } else {
            Z = t[31];
        }
        let ee;
        if (t[32] !== children || t[33] !== Z) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            ee = <Component as="span" color={Z}>{children}</Component>;
            t[32] = children;
            t[33] = Z;
            t[34] = ee;
        } else {
            ee = t[34];
        }
        let te;
        if (t[35] !== secondaryChildren || t[36] !== xstyleSecondary) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            te = secondaryChildren != null ? <Component xstyle={xstyleSecondary}>{secondaryChildren}</Component> : null;
            t[35] = secondaryChildren;
            t[36] = xstyleSecondary;
            t[37] = te;
        } else {
            te = t[37];
        }
        let ne;
        if (t[38] !== ee || t[39] !== te || t[40] !== X) {
            ne = <div {...babelHelpers.extends({}, J, {
                children: [
                    ee,
                    te,
                    X
                ]
            })}/>;
            t[38] = ee;
            t[39] = te;
            t[40] = X;
            t[41] = ne;
        } else {
            ne = t[41];
        }
        let re;
        if (t[42] !== detail || t[43] !== n.detailXstyle) {
            re = detail != null ? <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.detail, n.detailXstyle), {
                children: detail
            })}/> : null;
            t[42] = detail;
            t[43] = n.detailXstyle;
            t[44] = re;
        } else {
            re = t[44];
        }
        let oe;
        if (t[45] !== ne || t[46] !== re || t[47] !== Y) {
            oe = <div {...babelHelpers.extends({
                ref: K
            }, Y, {
                children: [
                    ne,
                    re
                ]
            })}/>;
            t[45] = ne;
            t[46] = re;
            t[47] = Y;
            t[48] = oe;
        } else {
            oe = t[48];
        }
        let ae;
        if (t[49] !== j || t[50] !== F || t[51] !== H || t[52] !== q || t[53] !== O || t[54] !== oe || t[55] !== testid || t[56] !== title) {
            ae = <div {...babelHelpers.extends({}, F, {
                className: H,
                "data-ignore-capture": "any",
                "data-testid": testid,
                ref: O,
                title,
                "aria-label": j,
                children: [
                    q,
                    oe
                ]
            })}/>;
            t[49] = j;
            t[50] = F;
            t[51] = H;
            t[52] = q;
            t[53] = O;
            t[54] = oe;
            t[55] = testid;
            t[56] = title;
            t[57] = ae;
        } else {
            ae = t[57];
        }
        return ae;
    }
    l.DrawerButton = g;
    l.DrawerButtonSimple = H4Component;
}, 98);