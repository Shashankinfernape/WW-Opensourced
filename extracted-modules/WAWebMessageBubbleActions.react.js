__d("WAWebMessageBubbleActions.react", [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebL10NFbtTypeUtils",
    "WDSFocusStateStyles",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        marginTop5: {
            marginTop: "x1ok221b",
            $$css: true
        },
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        }
    };
    const p = n("$InternalEnum").Mirrored([
        "NO_DIVIDER",
        "POLL_SENDER",
        "POLL_RECEIVER",
        "EVENT_CREATION",
        "FORWARDED_NEWSLETTER",
        "ALBUM",
        "STICKER_PACK",
        "MEDIA_DOCUMENT"
    ]);
    const _ = {
        noDividerContainer: {
            borderTopStyle: "x1ejq31n",
            $$css: true
        },
        noDividerItem: {
            marginTop: "xdj266r",
            $$css: true
        },
        icon: {
            marginTop: "xdj266r",
            marginInlineEnd: "xf6vk7d",
            marginBottom: "xat24cr",
            marginInlineStart: "xpcyujq",
            $$css: true
        },
        container: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            marginInlineStart: "x16hy4bp",
            marginInlineEnd: "x5pz312",
            $$css: true
        },
        containerPolls: {
            marginInlineStart: "x12bjzxj",
            marginInlineEnd: "xu8z092",
            $$css: true
        },
        containerAlbum: {
            marginInlineStart: "xbr8dpn",
            marginInlineEnd: "x1hzmc0g",
            $$css: true
        },
        actionsBtn: {
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            paddingTop: "x1yrsyyn",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1f6kntn",
            fontWeight: "xfjzk2p",
            lineHeight: "x1fc57z9",
            color: "xo1mcw5",
            textAlign: "x2b8uid",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            width: "xh8yej3",
            paddingBottom: "xa0aww2",
            $$css: true
        },
        disabledActionsBtn: {
            color: "xhslqc4",
            cursor: "xt0e3qv",
            $$css: true
        },
        pollDisabledActionsBtn: {
            color: "x14ug900",
            opacity: "x1lxidc1",
            $$css: true
        },
        eventActionsBtn: {
            outlineStyle: "x1t137rt",
            $$css: true
        },
        eventDisabledActionsBtn: {
            color: "xhslqc4",
            opacity: "x1lxidc1",
            cursor: "xt0e3qv",
            $$css: true
        },
        notLastActionBtn: {
            paddingBottom: "x1a8lsjc",
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        pollActionsContainer: {
            marginTop: "x1xmf6yo",
            $$css: true
        },
        pollActionsItem: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        },
        stickerPackContainer: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        channelActionsItem: {
            paddingBottom: "xwib8y2",
            $$css: true
        },
        mediaDocumentContainer: {
            marginInlineStart: "xbr8dpn",
            marginInlineEnd: "x1hzmc0g",
            marginTop: "xav9cv8",
            $$css: true
        },
        emphasizedFocusRing: {
            outlineColor: "x97exvx",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(29);
        let r;
        let a;
        let i;
        let l;
        let s;
        let u;
        if (n[0] !== t) {
            s = t.ref;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            const d = l;
            r = d.direction;
            a = d.hideDivider;
            u = d.theme;
            if (l.placeholder === true) {
                let f;
                if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
                    f = <div className="x78zum5 x1iyjqo2 x6s0dn4 xl56j7k x1yrsyyn x6ikm8r x10wlt62 x1f6kntn xfjzk2p x1fc57z9 xo1mcw5 x2b8uid xlyipyv xuxw1ft xh8yej3 xa0aww2">​</div>;
                    n[7] = f;
                } else {
                    f = n[7];
                }
                i = f;
            } else {
                i = l.items.map((e, t)=><G3Component {...babelHelpers.extends({}, l, {
                        index: t,
                        key: t
                    })}/>);
            }
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
            n[4] = l;
            n[5] = s;
            n[6] = u;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
            l = n[4];
            s = n[5];
            u = n[6];
        }
        const h = u === p.POLL_RECEIVER || u === p.POLL_SENDER;
        const y = u === p.EVENT_CREATION;
        const C = l.direction || "horizontal";
        let b;
        if (n[8] !== u) {
            b = u === p.STICKER_PACK ? [
                _.stickerPackContainer,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom4
            ] : _.container;
            n[8] = u;
            n[9] = b;
        } else {
            b = n[9];
        }
        let v;
        if (n[10] !== y) {
            v = y ? [
                o("WDSMargins.stylex").wdsMargins.marginStart0,
                o("WDSMargins.stylex").wdsMargins.marginEnd0,
                m.marginTop5
            ] : m.marginTop10;
            n[10] = y;
            n[11] = v;
        } else {
            v = n[11];
        }
        const S = h && _.pollActionsContainer;
        const R = u === p.NO_DIVIDER && r !== "vertical" && _.noDividerContainer;
        const L = h && _.containerPolls;
        let E;
        if (n[12] !== u) {
            E = u === p.FORWARDED_NEWSLETTER && [
                o("WDSMargins.stylex").wdsMargins.marginHor0,
                m.marginTop3
            ];
            n[12] = u;
            n[13] = E;
        } else {
            E = n[13];
        }
        const k = u === p.ALBUM && _.containerAlbum;
        const I = u === p.MEDIA_DOCUMENT && _.mediaDocumentContainer;
        const T = a === true && _.noDividerContainer;
        let D;
        if (n[14] !== T || n[15] !== b || n[16] !== v || n[17] !== S || n[18] !== R || n[19] !== L || n[20] !== E || n[21] !== k || n[22] !== I) {
            D = [
                b,
                v,
                S,
                R,
                L,
                E,
                k,
                I,
                T
            ];
            n[14] = T;
            n[15] = b;
            n[16] = v;
            n[17] = S;
            n[18] = R;
            n[19] = L;
            n[20] = E;
            n[21] = k;
            n[22] = I;
            n[23] = D;
        } else {
            D = n[23];
        }
        let x;
        if (n[24] !== i || n[25] !== s || n[26] !== C || n[27] !== D) {
            const Component = o("WAWebFlex.react").FlexContainer;
            x = <Component ref={s} direction={C} xstyle={D} align="center" justify="evenly">{i}</Component>;
            n[24] = i;
            n[25] = s;
            n[26] = C;
            n[27] = D;
            n[28] = x;
        } else {
            x = n[28];
        }
        return x;
    }
    function G3Component(e) {
        const n = o("react-compiler-runtime").c(31);
        const { direction, index, items, theme } = e;
        const m = items[index];
        const f = r("useWAWebIsKeyboardUser")();
        const f_isKeyboardUser = f.isKeyboardUser;
        const y = u_useState(false);
        const C = y[0];
        const b = y[1];
        let v;
        if (n[0] !== m.disabled) {
            v = {
                disabled: m.disabled
            };
            n[0] = m.disabled;
            n[1] = v;
        } else {
            v = n[1];
        }
        const S = r("useWAWebStaticButtonA11y")(m.disabled === true ? undefined : m.onClick, v);
        const R = S[0];
        const L = S[1];
        let E;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            E = function(t) {
                b(true);
            };
            n[2] = E;
        } else {
            E = n[2];
        }
        const k = E;
        let I;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            I = function(t) {
                b(false);
            };
            n[3] = I;
        } else {
            I = n[3];
        }
        const T = I;
        const D = theme === p.POLL_RECEIVER || theme === p.POLL_SENDER;
        const MIcon = m.Icon;
        const $ = C && f_isKeyboardUser;
        const m_testid = m.testid;
        let N;
        if (n[4] !== direction || n[5] !== index || n[6] !== D || n[7] !== m.disabled || n[8] !== m.xstyle || n[9] !== items.length || n[10] !== theme) {
            N = (s || (s = r("stylex")))(_.actionsBtn, D && _.pollActionsItem, theme === p.EVENT_CREATION && _.eventActionsBtn, theme === p.FORWARDED_NEWSLETTER && _.channelActionsItem, m.disabled === true && h(theme), direction === "vertical" && index < items.length - 1 && _.notLastActionBtn, theme === p.NO_DIVIDER && (index === 0 || direction !== "vertical") && _.noDividerItem, m.xstyle);
            n[4] = direction;
            n[5] = index;
            n[6] = D;
            n[7] = m.disabled;
            n[8] = m.xstyle;
            n[9] = items.length;
            n[10] = theme;
            n[11] = N;
        } else {
            N = n[11];
        }
        const M = m.title ?? (o("WAWebL10NFbtTypeUtils").isStringOrFbt(m.label) ? m.label : undefined);
        const w = $ && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent;
        const A = $ && _.emphasizedFocusRing;
        let F;
        if (n[12] !== w || n[13] !== A) {
            F = [
                o("WDSMargins.stylex").wdsMargins.margin4,
                w,
                A
            ];
            n[12] = w;
            n[13] = A;
            n[14] = F;
        } else {
            F = n[14];
        }
        let O;
        if (n[15] !== MIcon) {
            O = MIcon ? <MIcon xstyle={_.icon}/> : null;
            n[15] = MIcon;
            n[16] = O;
        } else {
            O = n[16];
        }
        let B;
        if (n[17] !== m.label || n[18] !== F || n[19] !== O) {
            const Component = o("WAWebFlex.react").FlexRow;
            B = <Component xstyle={F} align="center">{O}{m.label}</Component>;
            n[17] = m.label;
            n[18] = F;
            n[19] = O;
            n[20] = B;
        } else {
            B = n[20];
        }
        let W;
        if (n[21] !== L || n[22] !== R || n[23] !== index || n[24] !== m.ariaLabel || n[25] !== m.disabled || n[26] !== m.testid || n[27] !== B || n[28] !== N || n[29] !== M) {
            W = <button key={index} {...babelHelpers.extends({
                ref: R,
                "data-testid": m_testid,
                className: N,
                "aria-disabled": m.disabled
            }, L, {
                "aria-label": m.ariaLabel,
                onFocus: k,
                onBlur: T,
                title: M,
                children: B
            })}/>;
            n[21] = L;
            n[22] = R;
            n[23] = index;
            n[24] = m.ariaLabel;
            n[25] = m.disabled;
            n[26] = m.testid;
            n[27] = B;
            n[28] = N;
            n[29] = M;
            n[30] = W;
        } else {
            W = n[30];
        }
        return W;
    }
    function h(theme) {
        if (!theme) {
            return _.disabledActionsBtn;
        }
        switch(theme){
            case p.POLL_RECEIVER:
            case p.POLL_SENDER:
                return _.pollDisabledActionsBtn;
            case p.EVENT_CREATION:
                return _.eventDisabledActionsBtn;
            default:
                return _.disabledActionsBtn;
        }
    }
    l.BubbleActionsTheme = p;
    l.BubbleActions = f;
}, 98);