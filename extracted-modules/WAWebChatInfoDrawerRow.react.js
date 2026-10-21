__d("WAWebChatInfoDrawerRow.react", [
    "WAWebChatInfoDrawerBlock.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSFocusStateStyles",
    "WDSIconIcChevronRight.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    const e = [
        "icon",
        "secondaryTitle",
        "side",
        "spaced",
        "title",
        "xstyle"
    ];
    const s = [
        "containerXstyle",
        "icon",
        "secondaryTitle",
        "side",
        "title",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useRef, useState } = m;
    const f = {
        paddingTop5: {
            paddingTop: "x123j3cw",
            $$css: true
        },
        marginInlineEnd14: {
            marginInlineEnd: "x1my54xf",
            $$css: true
        },
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        marginInline10: {
            marginInlineStart: "x1hm9lzh",
            marginInlineEnd: "x1sa5p1d",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        paddingBottom10: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        marginInlineStart14: {
            marginInlineStart: "xcev3uh",
            $$css: true
        }
    };
    const g = {
        iconContainer: {
            marginInlineEnd: "x1xegmmw",
            width: "x100vrsf",
            height: "xxk0z11",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            $$css: true
        },
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        },
        iconContainerRefreshed: {
            width: "x100vrsf",
            height: "x16wdlz0",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            color: "xhslqc4",
            $$css: true
        },
        contentRefreshed: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            minWidth: "xeuugli",
            overflowWrap: "x1mzt3pk",
            $$css: true
        },
        drawerSide: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            width: "x14qfxbe",
            $$css: true
        },
        drawerSideRefreshed: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            $$css: true
        },
        hoverStateRefreshed: {
            borderStartStartRadius: "x7zqoo0",
            borderStartEndRadius: "xt1g1te",
            borderEndEndRadius: "x1iz9ej4",
            borderEndStartRadius: "x1ga13z8",
            ":hover_backgroundColor": "x1n67ipk",
            $$css: true
        },
        suppressOutlineRefreshed: {
            backgroundColor: "xjbqb8w",
            outlineStyle: "xi5y0ii",
            $$css: true
        },
        focusOffsetInset: {
            outlineOffset: "x9gec7p",
            outlineWidth: "xgf5m5d",
            $$css: true
        }
    };
    function HComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_title = e.title;
        let r;
        if (t[0] !== e_title) {
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            r = <Component>{e_title}</Component>;
            t[0] = e_title;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const { testid, title } = e;
        let a;
        if (t[0] !== testid || t[1] !== title) {
            const Component = o("WAWebText.react").WAWebTextMutedRefreshed;
            a = <Component testid={testid}>{title}</Component>;
            t[0] = testid;
            t[1] = title;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, hasSecondaryTitle, isRefresh } = e;
        let i;
        if (t[0] !== hasSecondaryTitle || t[1] !== isRefresh) {
            i = isRefresh === true ? [
                g.iconContainerRefreshed,
                hasSecondaryTitle === true && f.paddingTop5,
                f.marginInlineEnd14
            ] : g.iconContainer;
            t[0] = hasSecondaryTitle;
            t[1] = isRefresh;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== children || t[4] !== i) {
            const Component = o("WAWebFlex.react").FlexRow;
            l = <Component align="center" justify="center" xstyle={i}>{children}</Component>;
            t[3] = children;
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    function BComponent(t) {
        const n = o("react-compiler-runtime").c(27);
        let a;
        let i;
        let l;
        let rightSide;
        let u;
        let c;
        let m;
        if (n[0] !== t) {
            i = t.icon;
            l = t.secondaryTitle;
            rightSide = t.side;
            u = t.spaced;
            c = t.title;
            m = t.xstyle;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = rightSide;
            n[5] = u;
            n[6] = c;
            n[7] = m;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            rightSide = n[4];
            u = n[5];
            c = n[6];
            m = n[7];
        }
        const p = u === undefined ? false : u;
        let _;
        if (n[8] !== i || n[9] !== rightSide || n[10] !== c) {
            _ = SComponent({
                icon: i,
                title: c,
                rightSide
            });
            n[8] = i;
            n[9] = rightSide;
            n[10] = c;
            n[11] = _;
        } else {
            _ = n[11];
        }
        const f = _;
        let g;
        if (n[12] !== p) {
            g = ({
                0: {},
                1: {
                    className: "xymharo x2pibh5"
                }
            })[!!p << 0];
            n[12] = p;
            n[13] = g;
        } else {
            g = n[13];
        }
        let h;
        if (n[14] !== f) {
            h = ({
                0: {},
                1: {
                    className: "x19wmrak x2pibh5"
                }
            })[(f != null) << 0];
            n[14] = f;
            n[15] = h;
        } else {
            h = n[15];
        }
        let y;
        if (n[16] !== l || n[17] !== h) {
            y = <div {...babelHelpers.extends({}, h, {
                children: l
            })}/>;
            n[16] = l;
            n[17] = h;
            n[18] = y;
        } else {
            y = n[18];
        }
        let C;
        if (n[19] !== f || n[20] !== g || n[21] !== y) {
            C = <div {...babelHelpers.extends({}, g, {
                children: [
                    f,
                    y
                ]
            })}/>;
            n[19] = f;
            n[20] = g;
            n[21] = y;
            n[22] = C;
        } else {
            C = n[22];
        }
        let b;
        if (n[23] !== a || n[24] !== C || n[25] !== m) {
            b = d.jsx(r("WAWebChatInfoDrawerBlock.react"), babelHelpers.extends({
                xstyle: m
            }, a, {
                multiline: true,
                children: C
            }));
            n[23] = a;
            n[24] = C;
            n[25] = m;
            n[26] = b;
        } else {
            b = n[26];
        }
        return b;
    }
    function VComponent(e) {
        const t = o("react-compiler-runtime").c(46);
        let n;
        let a;
        let i;
        let l;
        let c;
        let m;
        let h;
        if (t[0] !== e) {
            n = e.containerXstyle;
            i = e.icon;
            l = e.secondaryTitle;
            c = e.side;
            m = e.title;
            h = e.xstyle;
            a = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = c;
            t[6] = m;
            t[7] = h;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
            l = t[4];
            c = t[5];
            m = t[6];
            h = t[7];
        }
        const y = a.onClick != null;
        const b = r("useWAWebIsKeyboardUser")();
        const b_isKeyboardUser = b.isKeyboardUser;
        const SRef = useRef(null);
        const R = useState(false);
        const L = R[0];
        const E = R[1];
        const k = y && b_isKeyboardUser && L;
        let I;
        let T;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = function() {
                return E(true);
            };
            T = function({ relatedTarget }) {
                if (SRef.current != null && (!(relatedTarget instanceof Element) || !SRef.current.contains(relatedTarget))) {
                    E(false);
                }
            };
            t[8] = I;
            t[9] = T;
        } else {
            I = t[8];
            T = t[9];
        }
        const D = y && g.suppressOutlineRefreshed;
        let x;
        if (t[10] !== D || t[11] !== h) {
            x = [
                h,
                D
            ];
            t[10] = D;
            t[11] = h;
            t[12] = x;
        } else {
            x = t[12];
        }
        let $;
        if (t[13] !== n || t[14] !== y || t[15] !== k) {
            $ = (u || (u = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor20, f.paddingBlock10, f.marginInline10, y && g.hoverStateRefreshed, k && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, k && g.focusOffsetInset, n);
            t[13] = n;
            t[14] = y;
            t[15] = k;
            t[16] = $;
        } else {
            $ = t[16];
        }
        let P;
        if (t[17] !== i || t[18] !== l) {
            P = i != null ? <C hasSecondaryTitle={l != null} isRefresh>{i}</C> : null;
            t[17] = i;
            t[18] = l;
            t[19] = P;
        } else {
            P = t[19];
        }
        let N;
        if (t[20] !== l) {
            N = l == null && [
                o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                f.paddingBottom10
            ];
            t[20] = l;
            t[21] = N;
        } else {
            N = t[21];
        }
        let M;
        if (t[22] !== N) {
            M = [
                g.contentRefreshed,
                N
            ];
            t[22] = N;
            t[23] = M;
        } else {
            M = t[23];
        }
        let w;
        if (t[24] !== M || t[25] !== m) {
            const Component = o("WAWebFlex.react").FlexRow;
            w = <Component align="center" xstyle={M} grow={1}>{m}</Component>;
            t[24] = M;
            t[25] = m;
            t[26] = w;
        } else {
            w = t[26];
        }
        let A;
        if (t[27] !== l) {
            const Component = o("WAWebFlex.react").FlexRow;
            A = <Component>{l}</Component>;
            t[27] = l;
            t[28] = A;
        } else {
            A = t[28];
        }
        let F;
        if (t[29] !== A || t[30] !== w) {
            const Component = o("WAWebFlex.react").FlexColumn;
            F = <Component grow={1}>{w}{A}</Component>;
            t[29] = A;
            t[30] = w;
            t[31] = F;
        } else {
            F = t[31];
        }
        let O;
        if (t[32] === Symbol.for("react.memo_cache_sentinel")) {
            O = [
                g.drawerSideRefreshed,
                f.marginInlineStart14
            ];
            t[32] = O;
        } else {
            O = t[32];
        }
        let B;
        if (t[33] !== c) {
            const Component = o("WAWebFlex.react").FlexRow;
            B = <Component align="center" justify="end" xstyle={O}>{c}</Component>;
            t[33] = c;
            t[34] = B;
        } else {
            B = t[34];
        }
        let W;
        if (t[35] !== F || t[36] !== B || t[37] !== P) {
            const Component = o("WAWebFlex.react").FlexRow;
            W = <Component align="stretch">{P}{F}{B}</Component>;
            t[35] = F;
            t[36] = B;
            t[37] = P;
            t[38] = W;
        } else {
            W = t[38];
        }
        let q;
        if (t[39] !== W || t[40] !== $) {
            q = <div {...babelHelpers.extends({}, $, {
                children: W
            })}/>;
            t[39] = W;
            t[40] = $;
            t[41] = q;
        } else {
            q = t[41];
        }
        let U;
        if (t[42] !== a || t[43] !== q || t[44] !== x) {
            U = <div ref={SRef} role="none" onFocus={I} onBlur={T}>{d.jsx(r("WAWebChatInfoDrawerBlock.react"), babelHelpers.extends({
                isRefresh: true,
                multiline: true,
                xstyle: x
            }, a, {
                children: q
            }))}</div>;
            t[42] = a;
            t[43] = q;
            t[44] = x;
            t[45] = U;
        } else {
            U = t[45];
        }
        return U;
    }
    function SComponent({ icon, rightSide, title }) {
        if (icon == null && title == null && rightSide == null) {
            return null;
        }
        let i = rightSide ?? "";
        if (i === "chevron") {
            i = d.jsx(r("WDSIconIcChevronRight.react"), {
                iconXstyle: g.secondaryColor,
                directional: true,
                height: 21
            });
        }
        const l = icon != null ? <C>{icon}</C> : null;
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        return <Component_1 align="center" justify="start">{l}<div className="x1iyjqo2 xs83m0k xeuugli x1mzt3pk x1u7k74">{title}</div><Component align="center" justify="end" xstyle={g.drawerSide}>{i}</Component></Component_1>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    l.DrawerRowTitleRefreshed = HComponent;
    l.DrawerRowSecondaryTitleRefreshed = YComponent;
    l.ChatInfoDrawerRow = BComponent;
    l.ChatInfoDrawerRowRefreshed = VComponent;
}, 98);