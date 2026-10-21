__d("WAWebToastbar.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebTabOrder",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useHoverState",
    "useWAWebFocusState"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        paddingBottom10: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        marginInlineStart13: {
            marginInlineStart: "x2kejxg",
            $$css: true
        }
    };
    const m = 24;
    const p = {
        container: {
            position: "x10l6tqk",
            bottom: "x1ey2m1c",
            zIndex: "xoz0ns6",
            width: "xh8yej3",
            backgroundColor: "x1280gxy",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        childrenContainer: {
            display: "x3nfvp2",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(35);
        const { alwaysShowDismissBtn, children, childrenXStyle, dismissible, dismissXstyle, hidden, onClick, onDismiss, wrapperXstyle } = e;
        const C = hidden === undefined ? false : hidden;
        const b = e_useState(false);
        const v = b[0];
        const S = b[1];
        const R = r("useHoverState")();
        const { isHovered, onMouseEnter, onMouseLeave } = R;
        const I = r("useWAWebFocusState")();
        const T = I[0];
        const D = I[1];
        const x = r("useWAWebFocusState")();
        const $ = x[0];
        const P = x[1];
        let N;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            N = s._("Dismiss");
            t[0] = N;
        } else {
            N = t[0];
        }
        const M = N;
        let w;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSTooltip.react");
            w = <Component label={M}>{u.jsx(r("WDSIconIcClose.react"), {
                height: m,
                "aria-label": M,
                xstyle: p.icon
            })}</Component>;
            t[1] = w;
        } else {
            w = t[1];
        }
        const A = w;
        let F = null;
        if (!v && !C) {
            let O;
            if (t[2] !== alwaysShowDismissBtn || t[3] !== $ || t[4] !== P || t[5] !== isHovered || t[6] !== D || t[7] !== onDismiss) {
                const Component = o("WAWebClickable.react").Clickable;
                O = !alwaysShowDismissBtn && !isHovered && !D && !P ? null : <Component ref={$} data-tab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} onClick={function(t) {
                    t?.preventDefault();
                    t?.stopPropagation();
                    S(true);
                    onDismiss?.();
                }}>{A}</Component>;
                t[2] = alwaysShowDismissBtn;
                t[3] = $;
                t[4] = P;
                t[5] = isHovered;
                t[6] = D;
                t[7] = onDismiss;
                t[8] = O;
            } else {
                O = t[8];
            }
            const B = O;
            let W;
            if (t[9] !== wrapperXstyle) {
                W = [
                    o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
                    d.paddingBottom10,
                    p.container,
                    wrapperXstyle
                ];
                t[9] = wrapperXstyle;
                t[10] = W;
            } else {
                W = t[10];
            }
            const q = D && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus;
            let U;
            if (t[11] !== childrenXStyle || t[12] !== q) {
                U = [
                    d.marginInlineStart13,
                    p.childrenContainer,
                    q,
                    childrenXStyle
                ];
                t[11] = childrenXStyle;
                t[12] = q;
                t[13] = U;
            } else {
                U = t[13];
            }
            let V;
            if (t[14] !== children || t[15] !== U) {
                const Component = o("WAWebFlex.react").FlexRow;
                V = <Component xstyle={U} align="center" justify="center" grow={1}>{children}</Component>;
                t[14] = children;
                t[15] = U;
                t[16] = V;
            } else {
                V = t[16];
            }
            let H;
            if (t[17] !== B || t[18] !== dismissXstyle || t[19] !== dismissible) {
                const Component = r("WAWebVelocityTransitionGroup");
                const Component_1 = o("WAWebFlex.react").FlexItem;
                H = dismissible === true && <Component_1 xstyle={[
                    o("WDSMargins.stylex").wdsMargins.marginEnd20,
                    dismissXstyle
                ]} grow={0} shrink={0} basis={m}><Component transitionName="noop">{B}</Component></Component_1>;
                t[17] = B;
                t[18] = dismissXstyle;
                t[19] = dismissible;
                t[20] = H;
            } else {
                H = t[20];
            }
            let G;
            if (t[21] !== W || t[22] !== V || t[23] !== H) {
                const Component = o("WAWebFlex.react").FlexRow;
                G = <Component align="center" justify="all" xstyle={W}>{V}{H}</Component>;
                t[21] = W;
                t[22] = V;
                t[23] = H;
                t[24] = G;
            } else {
                G = t[24];
            }
            F = G;
        }
        let z;
        if (t[25] !== F) {
            const Component = r("WAWebVelocityTransitionGroup");
            z = <Component component="div" transitionName="toast-transition">{F}</Component>;
            t[25] = F;
            t[26] = z;
        } else {
            z = t[26];
        }
        let j;
        if (t[27] !== onMouseEnter || t[28] !== onMouseLeave || t[29] !== z) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            j = <Component onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{z}</Component>;
            t[27] = onMouseEnter;
            t[28] = onMouseLeave;
            t[29] = z;
            t[30] = j;
        } else {
            j = t[30];
        }
        const K = j;
        if (F != null) {
            let Q;
            if (t[31] !== K || t[32] !== T || t[33] !== onClick) {
                const Component = o("WAWebClickable.react").Clickable;
                Q = <Component ref={T} data-tab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} onClick={onClick}>{K}</Component>;
                t[31] = K;
                t[32] = T;
                t[33] = onClick;
                t[34] = Q;
            } else {
                Q = t[34];
            }
            return Q;
        }
        return K;
    }
    l.default = _;
}, 226);