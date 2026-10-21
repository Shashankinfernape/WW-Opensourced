__d("WAWebComposeBoxPanelsMenu.react", [
    "fbt",
    "$InternalEnum",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxPanelTypes",
    "WAWebComposeBoxPanelsMenuButton.react",
    "WAWebL10N",
    "WAWebTabOrder",
    "WAWebUserPrefsGeneral",
    "WDSIconIcClose.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcSticker.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useRef = u.useRef;
    const m = 26;
    const p = 16;
    const _ = {
        menu: {
            position: "x1n2onr6",
            display: "x78zum5",
            height: "x1dxfi9l",
            transition: "x15cnf4b",
            ":hover_willChange": "x1v3ui1v",
            $$css: true
        },
        menuOpenStatusReply: {
            width: "x1j5n0mt",
            $$css: true
        },
        menuOpen: {
            width: "x1ohurxr",
            $$css: true
        },
        menuFull: {
            width: "x1t741oc",
            $$css: true
        },
        menuClosedStatusReply: {
            width: "x72722d",
            $$css: true
        },
        menuOpenStatusReplyMediaProtected: {
            width: "xue0253",
            $$css: true
        },
        menuClosedStatusReplyMediaProtected: {
            width: "xqr7jod",
            $$css: true
        },
        menuClosed: {
            width: "xpjhzmb",
            $$css: true
        },
        button: {
            transition: "xl0co6n",
            transform: null,
            $$css: true
        },
        statusReplyButton: {
            alignItems: "x6s0dn4",
            bottom: null,
            display: "x78zum5",
            height: "x1vqgdyp",
            justifyContent: "xl56j7k",
            top: "xnfr1j",
            width: "x100vrsf",
            $$css: true
        },
        visible: {
            opacity: "x1hc1fzr",
            $$css: true
        },
        invisible: {
            opacity: "xg01cxk",
            $$css: true
        },
        marginHoriz8: {
            marginInlineStart: "x150mmf0",
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    const f = n("$InternalEnum").Mirrored([
        "ChatComposeBox",
        "StatusReplyComposeBox"
    ]);
    const g = 48;
    const h = ({ isMediaProtected, isPanelOpen, isStickerButtonShowing, theme })=>{
        switch(theme){
            case f.ChatComposeBox:
                if (isPanelOpen) {
                    return {
                        button: null,
                        menu: isStickerButtonShowing ? _.menuFull : _.menuOpen
                    };
                }
                return {
                    button: null,
                    menu: _.menuClosed
                };
            case f.StatusReplyComposeBox:
                if (isMediaProtected) {
                    return {
                        button: _.statusReplyButton,
                        menu: isPanelOpen ? _.menuOpenStatusReplyMediaProtected : _.menuClosedStatusReplyMediaProtected
                    };
                }
                return {
                    button: null,
                    menu: isPanelOpen ? _.menuOpenStatusReply : _.menuClosedStatusReply
                };
        }
    };
    const y = (t, isPanelOpen, theme, i)=>{
        const e = theme === f.StatusReplyComposeBox && i ? g : m + p;
        let l = 0;
        switch(t){
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
                l = isPanelOpen ? e : 0;
                break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
                switch(theme){
                    case f.ChatComposeBox:
                        l = isPanelOpen ? 3 * e : 0;
                        break;
                    case f.StatusReplyComposeBox:
                        l = isPanelOpen ? 2 * e : e;
                        break;
                }
                break;
            default:
                break;
        }
        const s = (r("WAWebL10N").isRTL() ? -1 : 1) * l;
        return {
            transform: `translateX(${s}px)`
        };
    };
    function C(t) {
        const i = o("react-compiler-runtime").c(65);
        const l = u_useRef();
        const u = u_useRef();
        const m = u_useRef();
        const p = u_useRef();
        const g = t.theme === f.StatusReplyComposeBox;
        const C = o("useWAWebChatValues").useOptionalChatValues(t.chat?.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebChatGetters").getId,
            o("WAWebChatGetters").getId
        ]) ?? [];
        const b = C[0];
        let v;
        if (i[0] !== t) {
            v = function(n) {
                t.onChange(n);
            };
            i[0] = t;
            i[1] = v;
        } else {
            v = i[1];
        }
        const S = v;
        let R;
        if (i[2] !== t) {
            R = function() {
                t.onChange(null);
            };
            i[2] = t;
            i[3] = R;
        } else {
            R = i[3];
        }
        const L = R;
        let E;
        if (i[4] !== S || i[5] !== b || i[6] !== g || i[7] !== t) {
            E = function() {
                const e = !!t.selectedExpressionPanel;
                if (!e && !g) {
                    t.onChange(!b && o("WAWebUserPrefsGeneral").getLastComposeBoxExpressionPanel() || o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
                    return;
                }
                S(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
            };
            i[4] = S;
            i[5] = b;
            i[6] = g;
            i[7] = t;
            i[8] = E;
        } else {
            E = i[8];
        }
        const k = E;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_compose_box_panel", S);
        let I;
        if (i[9] === Symbol.for("react.memo_cache_sentinel")) {
            I = function(t) {
                p.current = t;
            };
            i[9] = I;
        } else {
            I = i[9];
        }
        const T = I;
        const t_readOnly = t.readOnly;
        const isPanelOpen = !!t.selectedExpressionPanel;
        const isStickerButtonShowing = !b && t.isMessageToBot !== true;
        const P = t.isMediaProtected === true;
        let N;
        if (i[10] !== t.buttonStyle) {
            N = [
                _.button,
                t.buttonStyle
            ];
            i[10] = t.buttonStyle;
            i[11] = N;
        } else {
            N = i[11];
        }
        const M = N;
        let w;
        if (i[12] !== M || i[13] !== t.openButtonStyle) {
            w = [
                M,
                t.openButtonStyle
            ];
            i[12] = M;
            i[13] = t.openButtonStyle;
            i[14] = w;
        } else {
            w = i[14];
        }
        const A = w;
        const t_buttonProps = t.buttonProps;
        let O;
        let B;
        let W;
        let q;
        if (i[15] !== P || i[16] !== isPanelOpen || i[17] !== t.theme || i[18] !== isStickerButtonShowing) {
            O = h({
                isMediaProtected: P,
                isPanelOpen,
                isStickerButtonShowing,
                theme: t.theme
            });
            B = isPanelOpen ? "open" : "closed";
            W = T;
            q = (e || (e = r("stylex"))).props(_.menu, _.marginHoriz8, O.menu);
            i[15] = P;
            i[16] = isPanelOpen;
            i[17] = t.theme;
            i[18] = isStickerButtonShowing;
            i[19] = O;
            i[20] = B;
            i[21] = W;
            i[22] = q;
        } else {
            O = i[19];
            B = i[20];
            W = i[21];
            q = i[22];
        }
        let U;
        if (i[23] === Symbol.for("react.memo_cache_sentinel")) {
            U = s._("Close panel");
            i[23] = U;
        } else {
            U = i[23];
        }
        const V = isPanelOpen ? _.visible : _.invisible;
        let H;
        if (i[24] !== M || i[25] !== V) {
            H = [
                M,
                V
            ];
            i[24] = M;
            i[25] = V;
            i[26] = H;
        } else {
            H = i[26];
        }
        const G = isPanelOpen ? 0 : -1;
        const z = isPanelOpen && !t_readOnly ? o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON : null;
        const j = t_buttonProps?.closePanel;
        let K;
        if (i[27] !== L || i[28] !== O.button || i[29] !== H || i[30] !== G || i[31] !== z || i[32] !== j) {
            K = c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
                "aria-label": U,
                xstyle: H,
                tabIndex: G,
                "data-tab": z,
                Icon: r("WDSIconIcClose.react"),
                isActive: false,
                testid: "emoji-picker-close-btn",
                onClick: L,
                ref: l,
                size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE24,
                containerXstyle: O.button
            }, j));
            i[27] = L;
            i[28] = O.button;
            i[29] = H;
            i[30] = G;
            i[31] = z;
            i[32] = j;
            i[33] = K;
        } else {
            K = i[33];
        }
        let Q;
        if (i[34] === Symbol.for("react.memo_cache_sentinel")) {
            Q = s._("Open emojis panel, message compose");
            i[34] = Q;
        } else {
            Q = i[34];
        }
        const X = isPanelOpen || t_readOnly ? null : o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON;
        const Y = t.selectedExpressionPanel === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI;
        const O_button = O.button;
        let Z;
        if (i[35] !== P || i[36] !== isPanelOpen || i[37] !== t.theme) {
            Z = y(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI, isPanelOpen, t.theme, P);
            i[35] = P;
            i[36] = isPanelOpen;
            i[37] = t.theme;
            i[38] = Z;
        } else {
            Z = i[38];
        }
        const ee = t_buttonProps?.openEmoji;
        let te;
        if (i[39] !== k || i[40] !== O.button || i[41] !== A || i[42] !== X || i[43] !== Y || i[44] !== Z || i[45] !== ee) {
            te = c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
                "aria-label": Q,
                xstyle: A,
                testid: "compose-btn-emoji",
                "data-tab": X,
                Icon: r("WDSIconIcMood.react"),
                isActive: Y,
                isMain: true,
                onClick: k,
                ref: u,
                size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
                containerXstyle: O_button,
                style: Z
            }, ee));
            i[39] = k;
            i[40] = O.button;
            i[41] = A;
            i[42] = X;
            i[43] = Y;
            i[44] = Z;
            i[45] = ee;
            i[46] = te;
        } else {
            te = i[46];
        }
        let ne;
        if (i[47] !== t_buttonProps?.openSticker || i[48] !== S || i[49] !== P || i[50] !== isPanelOpen || i[51] !== g || i[52] !== O.button || i[53] !== A || i[54] !== t.selectedExpressionPanel || i[55] !== t.theme || i[56] !== isStickerButtonShowing) {
            ne = isStickerButtonShowing && c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
                "aria-label": s._("Open sticker panel"),
                xstyle: [
                    A,
                    isPanelOpen || g ? _.visible : _.invisible
                ],
                testid: "compose-btn-sticker",
                Icon: r("WDSIconWdsIcSticker.react"),
                isActive: t.selectedExpressionPanel === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER,
                onClick: function() {
                    return S(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
                },
                ref: m,
                size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
                containerXstyle: O.button,
                style: y(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER, isPanelOpen, t.theme, P)
            }, t_buttonProps?.openSticker));
            i[47] = t_buttonProps?.openSticker;
            i[48] = S;
            i[49] = P;
            i[50] = isPanelOpen;
            i[51] = g;
            i[52] = O.button;
            i[53] = A;
            i[54] = t.selectedExpressionPanel;
            i[55] = t.theme;
            i[56] = isStickerButtonShowing;
            i[57] = ne;
        } else {
            ne = i[57];
        }
        let re;
        if (i[58] !== K || i[59] !== te || i[60] !== ne || i[61] !== B || i[62] !== W || i[63] !== q) {
            re = <div {...babelHelpers.extends({
                "data-state": B,
                ref: W
            }, q, {
                children: [
                    K,
                    te,
                    ne
                ]
            })}/>;
            i[58] = K;
            i[59] = te;
            i[60] = ne;
            i[61] = B;
            i[62] = W;
            i[63] = q;
            i[64] = re;
        } else {
            re = i[64];
        }
        return re;
    }
    l.PanelsTheme = f;
    l.ComposeBoxExpressionPanelsMenu = C;
}, 226);