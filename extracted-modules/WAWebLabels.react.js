__d("WAWebLabels.react", [
    "WAWebEmojiText.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebListIcon.react",
    "WAWebListIconStacked.react",
    "WDSIconIcLabelFilled.react",
    "WDSMargins.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    const d = {
        marginInlineStart3: {
            marginInlineStart: "x7phf20",
            $$css: true
        }
    };
    const m = {
        container: {
            display: "x1rg5ohu",
            flexShrink: "x2lah0s",
            verticalAlign: "x16dsc37",
            $$css: true
        },
        name: {
            flexShrink: "x2lah0s",
            fontSize: "x1f6kntn",
            lineHeight: "xggjnk3",
            color: "x14ug900",
            $$css: true
        },
        labelFilter: {
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        labelFilterWithCount: {
            display: "x78zum5",
            width: "xh8yej3",
            alignItems: "x6s0dn4",
            $$css: true
        },
        labelFilterIconContainer: {
            display: "x78zum5",
            flexShrink: "x2lah0s",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xvy4d1p",
            height: "xxk0z11",
            $$css: true
        },
        labelFilterPillIconContainer: {
            width: "xw4jnvo",
            height: "x1qx5ct2",
            $$css: true
        },
        labelFilterName: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "xdl72j9",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            lineHeight: "x1o2sk6j",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        drawerTitle: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        drawerTitleIconContainer: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        drawerTitleName: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "xdl72j9",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1jchvi3",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        containerFull: {
            display: "x3nfvp2",
            alignItems: "x6s0dn4",
            $$css: true
        },
        containerFullCircleIcon: {
            display: "x1rg5ohu",
            flexShrink: "x2lah0s",
            marginTop: "x1y332i5",
            $$css: true
        },
        labelGlyphDefaultColor: {
            color: "xhslqc4",
            $$css: true
        },
        labelGlyphColor: function(t) {
            return [
                {
                    color: t != null ? "x14rh7hd" : t,
                    $$css: true
                },
                {
                    "--x-color": t ?? undefined
                }
            ];
        },
        circleIconContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            height: "x1vqgdyp",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        listIconCircleContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            marginTop: "xav9cv8",
            $$css: true
        },
        circleIcon: {
            color: "x17t9dm2",
            $$css: true
        },
        circleIconSVG: {
            width: "xw4jnvo",
            height: "x1qx5ct2",
            $$css: true
        },
        elipsifyName: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            whiteSpace: "xuxw1ft",
            textOverflow: "xlyipyv",
            maxWidth: "xw5ewwj",
            $$css: true
        },
        listIcon: {
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        listIconStacked: {
            position: "x10l6tqk",
            top: "x1atx4j1",
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        nameWdsPill: {
            marginInlineStart: "x150mmf0",
            $$css: true
        },
        unreadCount: {
            paddingInlineStart: "xdx6fka",
            $$css: true
        }
    };
    function p(e) {
        if (e.length !== 0) {
            const t = Math.max(...e.map((e)=>parseInt(e, 10)));
            if (Number.isNaN(t)) {
                return e[0];
            }
            return t.toString();
        }
    }
    function _(labels) {
        const t = p(labels);
        if (t == null) {
            return null;
        }
        return o("WAWebLabelCollection").LabelCollection.get(t);
    }
    function F1Component(t) {
        const n = o("react-compiler-runtime").c(57);
        const { color, iconXstyle, isListsFeatureEnabled, name, renderAsCircle, theme, unreadCount } = t;
        const f = renderAsCircle === undefined ? false : renderAsCircle;
        let g;
        if (n[0] !== color || n[1] !== name) {
            g = name != null && [
                m.containerFullCircleIcon,
                color == null && m.labelGlyphDefaultColor
            ];
            n[0] = color;
            n[1] = name;
            n[2] = g;
        } else {
            g = n[2];
        }
        let h;
        if (n[3] !== iconXstyle || n[4] !== g) {
            h = u.jsx(r("WDSIconIcLabelFilled.react"), {
                width: 18,
                height: 18,
                iconXstyle,
                xstyle: g,
                testid: "ic-label-filled"
            });
            n[3] = iconXstyle;
            n[4] = g;
            n[5] = h;
        } else {
            h = n[5];
        }
        const y = h;
        if (theme === "label-pill") {
            let C;
            if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
                C = {
                    className: "x2lah0s x16dsc37 x3nfvp2 x6s0dn4"
                };
                n[6] = C;
            } else {
                C = n[6];
            }
            let b;
            if (n[7] !== color) {
                b = (e || (e = r("stylex"))).props(m.labelFilterIconContainer, m.labelFilterPillIconContainer, color != null && m.labelGlyphColor(color));
                n[7] = color;
                n[8] = b;
            } else {
                b = n[8];
            }
            let v;
            if (n[9] !== color || n[10] !== isListsFeatureEnabled || n[11] !== y) {
                v = isListsFeatureEnabled === true ? u.jsx(r("WAWebListIcon.react"), {
                    color,
                    xstyle: m.listIcon
                }) : y;
                n[9] = color;
                n[10] = isListsFeatureEnabled;
                n[11] = y;
                n[12] = v;
            } else {
                v = n[12];
            }
            let S;
            if (n[13] !== b || n[14] !== v) {
                S = <span {...babelHelpers.extends({}, b, {
                    children: v
                })}/>;
                n[13] = b;
                n[14] = v;
                n[15] = S;
            } else {
                S = n[15];
            }
            let R;
            if (n[16] !== name) {
                const Component = r("WDSText.react");
                R = <Component type="Body2Emphasized" colorName="accentEmphasized" xstyle={m.nameWdsPill}>{name}</Component>;
                n[16] = name;
                n[17] = R;
            } else {
                R = n[17];
            }
            let L;
            if (n[18] !== S || n[19] !== R) {
                L = <div {...babelHelpers.extends({}, C, {
                    children: [
                        S,
                        R
                    ]
                })}/>;
                n[18] = S;
                n[19] = R;
                n[20] = L;
            } else {
                L = n[20];
            }
            return L;
        }
        let E;
        if (n[21] !== isListsFeatureEnabled || n[22] !== name || n[23] !== t.theme) {
            E = name != null ? <span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.name, d.marginInlineStart3, t.theme === "label-filter" && m.labelFilterName, t.theme === "label-filter" && o("WDSMargins.stylex").wdsMargins.marginStart8, t.theme === "drawer-title" && m.drawerTitleName, t.theme === "drawer-title" && o("WDSMargins.stylex").wdsMargins.marginStart0, t.theme === "user-profile" && m.elipsifyName, isListsFeatureEnabled === true && o("WDSMargins.stylex").wdsMargins.marginStart8), {
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: name
                })
            })}/> : null;
            n[21] = isListsFeatureEnabled;
            n[22] = name;
            n[23] = t.theme;
            n[24] = E;
        } else {
            E = n[24];
        }
        const k = E;
        const I = theme === "label-filter" && isListsFeatureEnabled === true && unreadCount != null && unreadCount > 0;
        let T;
        if (n[25] !== name || n[26] !== f || n[27] !== I || n[28] !== theme) {
            T = (e || (e = r("stylex")))(name == null && !f && m.container, f && m.containerFull, name != null && !f && m.containerFull, theme === "label-filter" && m.labelFilter, theme === "drawer-title" && m.drawerTitle, I && m.labelFilterWithCount);
            n[25] = name;
            n[26] = f;
            n[27] = I;
            n[28] = theme;
            n[29] = T;
        } else {
            T = n[29];
        }
        const D = T;
        let x;
        if (n[30] !== color || n[31] !== f) {
            x = f && color != null ? {
                backgroundColor: color
            } : {
                color
            };
            n[30] = color;
            n[31] = f;
            n[32] = x;
        } else {
            x = n[32];
        }
        const $ = x;
        let P;
        if (n[33] !== color || n[34] !== isListsFeatureEnabled || n[35] !== y) {
            P = isListsFeatureEnabled === true ? u.jsx(r("WAWebListIcon.react"), {
                color,
                xstyle: m.listIcon
            }) : y;
            n[33] = color;
            n[34] = isListsFeatureEnabled;
            n[35] = y;
            n[36] = P;
        } else {
            P = n[36];
        }
        const N = P;
        let M;
        if (n[37] !== color || n[38] !== isListsFeatureEnabled) {
            M = isListsFeatureEnabled === true ? u.jsx(r("WAWebListIcon.react"), {
                color,
                xstyle: m.listIcon,
                size: 16
            }) : u.jsx(r("WDSIconIcLabelFilled.react"), {
                xstyle: m.circleIcon,
                iconXstyle: m.circleIconSVG,
                testid: "label-filled"
            });
            n[37] = color;
            n[38] = isListsFeatureEnabled;
            n[39] = M;
        } else {
            M = n[39];
        }
        const A = f ? M : N;
        const F = isListsFeatureEnabled === true ? null : "label-icon";
        let O;
        if (n[40] !== isListsFeatureEnabled || n[41] !== f || n[42] !== theme) {
            O = (e || (e = r("stylex")))(f && isListsFeatureEnabled !== true && m.circleIconContainer, f && isListsFeatureEnabled === true && m.listIconCircleContainer, theme === "drawer-title" && m.drawerTitleIconContainer, theme === "drawer-title" && o("WDSMargins.stylex").wdsMargins.marginEnd20, theme === "drawer-title" && o("WDSMargins.stylex").wdsMargins.marginStart4, theme === "label-filter" && m.labelFilterIconContainer);
            n[40] = isListsFeatureEnabled;
            n[41] = f;
            n[42] = theme;
            n[43] = O;
        } else {
            O = n[43];
        }
        const B = isListsFeatureEnabled === true ? undefined : $;
        let W;
        if (n[44] !== A || n[45] !== B || n[46] !== F || n[47] !== O) {
            W = <div data-testid={F} className={O} style={B}>{A}</div>;
            n[44] = A;
            n[45] = B;
            n[46] = F;
            n[47] = O;
            n[48] = W;
        } else {
            W = n[48];
        }
        let q;
        if (n[49] !== I || n[50] !== unreadCount) {
            const Component = r("WDSText.react");
            q = I && <Component type="Body2Emphasized" colorName="accentEmphasized" xstyle={m.unreadCount}>{unreadCount}</Component>;
            n[49] = I;
            n[50] = unreadCount;
            n[51] = q;
        } else {
            q = n[51];
        }
        let U;
        if (n[52] !== D || n[53] !== k || n[54] !== W || n[55] !== q) {
            U = <div className={D}>{W}{k}{q}</div>;
            n[52] = D;
            n[53] = k;
            n[54] = W;
            n[55] = q;
            n[56] = U;
        } else {
            U = n[56];
        }
        return U;
    }
    function GComponent(e) {
        "use no forget";
        const { colorOverrides, iconXstyle, labels, nameOverride, renderAsCircle } = e;
        const renderAsCircle_1 = renderAsCircle === undefined ? false : renderAsCircle;
        const e_showName = e.showName;
        const g = e_showName === undefined ? false : e_showName;
        const { theme, unreadCount } = e;
        const C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const b = s_useMemo(function() {
            return p(labels);
        }, [
            labels
        ]);
        o("useWAWebListener").useListener(b != null ? o("WAWebLabelCollection").LabelCollection : null, `label_updated_${b ?? ""}`, C);
        const v = _(labels);
        if (!v || !v.name) {
            return null;
        }
        if (labels.length === 1) {
            const color = colorOverrides?.get(v.id) ?? o("WAWebLabelGetters").getHexColor(v);
            const L = g ? nameOverride ?? v.name : null;
            return <F1Component color={color} name={L} renderAsCircle={renderAsCircle_1} theme={theme} iconXstyle={iconXstyle} unreadCount={unreadCount} isListsFeatureEnabled/>;
        }
        return <div className="x1rg5ohu x2lah0s x16dsc37 x1n2onr6 xgd8bvy xxk0z11">{u.jsx(r("WAWebListIconStacked.react"), {
            colorOverrides,
            labelIds: labels,
            xstyle: m.listIconStacked
        })}</div>;
    }
    GComponent.displayName = `${GComponent.name} [from ${i.id}]`;
    l.getVisibleLabelId = p;
    l.Label = F1Component;
    l.Labels = GComponent;
}, 98);