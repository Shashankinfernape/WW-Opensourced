__d("WAWebPaymentReminderHeader.react", [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebPaymentReminder",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconIcSchedule.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
    "wdsWidth"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const m = {
        wrapper: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            paddingTop: "x96k8nx",
            paddingInlineEnd: "xrw5ot4",
            paddingBottom: "xdvlbce",
            paddingInlineStart: "x7coems",
            cursor: "x1ypdohk",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x6egj2d",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        iconContainer: {
            width: "x1useyqa",
            height: "xsdox4t",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        iconContainerDark: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        iconContainerLight: {
            backgroundColor: "x16w0wmm",
            $$css: true
        },
        warningIconColor: {
            color: "x30a034",
            $$css: true
        },
        contentWrapper: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        divider: {
            height: "xqtp20y",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "xlya59e",
            borderTopColor: "x1uebkx7",
            opacity: "xz5rk10",
            marginTop: "x1xmf6yo",
            marginBottom: "x1e56ztr",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(56);
        const t_msgKey = t.msgKey;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getInteractivePayload,
                l.getInteractiveType,
                l.getIsNewsletterMsg,
                l.getIsSentByMe,
                l.getNativeFlowName,
                l.getType
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(t_msgKey, i);
        const p = u[0];
        const _ = u[1];
        const f = u[2];
        const g = u[3];
        const h = u[4];
        const y = u[5];
        const C = o("WAWebPaymentReminder").getPaymentReminderInfoFor({
            interactivePayload: p,
            interactiveType: _,
            nativeFlowName: h,
            type: y
        });
        let b;
        if (n[1] !== f || n[2] !== t_msgKey) {
            b = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t_msgKey, f);
            n[1] = f;
            n[2] = t_msgKey;
            n[3] = b;
        } else {
            b = n[3];
        }
        const v = b;
        const S = o("WAWebThemeContext").useIsDarkTheme();
        if (C == null || v == null) {
            return null;
        }
        const R = o("WAWebCurrencyUtils").formatAmount({
            amount: C.amountDue.value / C.amountDue.offset,
            currency: C.amountDueCurrency
        });
        const L = d.format(new Date(C.dueDateMs));
        let E;
        if (n[4] !== C.daysOverdue || n[5] !== C.isOverdue) {
            E = C.isOverdue ? s._("_j{\"*\":\"Payment overdue by {days} days\",\"_1\":\"Payment overdue by {days} day\"}", [
                s._plural(C.daysOverdue ?? 0),
                s._param("days", C.daysOverdue ?? 0)
            ]) : s._("Payment due");
            n[4] = C.daysOverdue;
            n[5] = C.isOverdue;
            n[6] = E;
        } else {
            E = n[6];
        }
        const T = E;
        let D = null;
        if (C.accountName != null) {
            let x;
            if (n[7] !== C.accountName) {
                x = s._("Account: {accountName}", [
                    s._param("accountName", C.accountName)
                ]);
                n[7] = C.accountName;
                n[8] = x;
            } else {
                x = n[8];
            }
            D = x;
        } else if (C.cardNumber != null) {
            let $;
            if (n[9] !== C.cardNumber) {
                $ = s._("Card • • • • {cardNumber}", [
                    s._param("cardNumber", C.cardNumber)
                ]);
                n[9] = C.cardNumber;
                n[10] = $;
            } else {
                $ = n[10];
            }
            D = $;
        }
        let P;
        if (n[11] !== C.url) {
            P = function() {
                if (C.url != null) {
                    o("WAWebExternalLink.react").openExternalLink(C.url);
                }
            };
            n[11] = C.url;
            n[12] = P;
        } else {
            P = n[12];
        }
        const N = P;
        let M;
        if (n[13] !== N) {
            M = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    N();
                }
            };
            n[13] = N;
            n[14] = M;
        } else {
            M = n[14];
        }
        const w = M;
        let A;
        if (n[15] !== g) {
            A = (e || (e = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSFlex.stylex").wdsFlex.flexColumn, m.wrapper, g ? m.bubbleOut : m.bubbleIn);
            n[15] = g;
            n[16] = A;
        } else {
            A = n[16];
        }
        let F;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            F = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle);
            n[17] = F;
        } else {
            F = n[17];
        }
        let O;
        if (n[18] !== S) {
            O = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexShrink0, m.iconContainer, S ? m.iconContainerDark : m.iconContainerLight);
            n[18] = S;
            n[19] = O;
        } else {
            O = n[19];
        }
        let B;
        if (n[20] !== C.isOverdue) {
            B = C.isOverdue ? c.jsx(r("WDSIconIcWarning.react"), {
                width: 24,
                height: 24,
                iconXstyle: m.warningIconColor
            }) : c.jsx(r("WDSIconIcSchedule.react"), {
                width: 24,
                height: 24
            });
            n[20] = C.isOverdue;
            n[21] = B;
        } else {
            B = n[21];
        }
        let W;
        if (n[22] !== O || n[23] !== B) {
            W = <div {...babelHelpers.extends({}, O, {
                children: B
            })}/>;
            n[22] = O;
            n[23] = B;
            n[24] = W;
        } else {
            W = n[24];
        }
        let q;
        if (n[25] === Symbol.for("react.memo_cache_sentinel")) {
            q = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, m.contentWrapper);
            n[25] = q;
        } else {
            q = n[25];
        }
        let U;
        if (n[26] !== T) {
            const Component = r("WDSText.react");
            U = <Component type="Body2Emphasized" colorName="contentDefault">{T}</Component>;
            n[26] = T;
            n[27] = U;
        } else {
            U = n[27];
        }
        let V;
        if (n[28] !== v) {
            const Component = r("WDSText.react");
            V = <Component type="Body3" colorName="contentDefault">{c.jsx(o("WAWebName.react").Name, {
                chat: v,
                ellipsify: true
            })}</Component>;
            n[28] = v;
            n[29] = V;
        } else {
            V = n[29];
        }
        let H;
        if (n[30] !== D) {
            const Component = r("WDSText.react");
            H = D != null && <Component type="Body3" colorName="contentDeemphasized">{D}</Component>;
            n[30] = D;
            n[31] = H;
        } else {
            H = n[31];
        }
        let G;
        if (n[32] !== U || n[33] !== V || n[34] !== H) {
            G = <div {...babelHelpers.extends({}, q, {
                children: [
                    U,
                    V,
                    H
                ]
            })}/>;
            n[32] = U;
            n[33] = V;
            n[34] = H;
            n[35] = G;
        } else {
            G = n[35];
        }
        let z;
        if (n[36] !== W || n[37] !== G) {
            z = <div {...babelHelpers.extends({}, F, {
                children: [
                    W,
                    G
                ]
            })}/>;
            n[36] = W;
            n[37] = G;
            n[38] = z;
        } else {
            z = n[38];
        }
        let j;
        let K;
        if (n[39] === Symbol.for("react.memo_cache_sentinel")) {
            j = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("wdsWidth").wdsWidth.fullWidth, m.divider))}/>;
            K = e.props(o("WDSFlex.stylex").wdsFlex.flexRow, o("WDSFlex.stylex").wdsFlex.justifyBetween, o("wdsWidth").wdsWidth.fullWidth);
            n[39] = j;
            n[40] = K;
        } else {
            j = n[39];
            K = n[40];
        }
        let Q;
        if (n[41] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            Q = <Component type="Body2" colorName="contentDefault">{s._("Due date")}</Component>;
            n[41] = Q;
        } else {
            Q = n[41];
        }
        let X;
        if (n[42] !== L) {
            const Component = r("WDSText.react");
            X = <div {...babelHelpers.extends({}, K, {
                children: [
                    Q,
                    <Component type="Body2" colorName="contentDefault">{L}</Component>
                ]
            })}/>;
            n[42] = L;
            n[43] = X;
        } else {
            X = n[43];
        }
        let Y;
        let J;
        if (n[44] === Symbol.for("react.memo_cache_sentinel")) {
            Y = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("wdsWidth").wdsWidth.fullWidth, m.divider))}/>;
            J = e.props(o("WDSFlex.stylex").wdsFlex.flexRow, o("WDSFlex.stylex").wdsFlex.justifyBetween, o("wdsWidth").wdsWidth.fullWidth);
            n[44] = Y;
            n[45] = J;
        } else {
            Y = n[44];
            J = n[45];
        }
        let Z;
        if (n[46] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            Z = <Component type="Body2" colorName="contentDefault">{s._("Amount due")}</Component>;
            n[46] = Z;
        } else {
            Z = n[46];
        }
        let ee;
        if (n[47] !== R) {
            const Component = r("WDSText.react");
            ee = <div {...babelHelpers.extends({}, J, {
                children: [
                    Z,
                    <Component type="Body2Emphasized" colorName="contentDefault">{R}</Component>
                ]
            })}/>;
            n[47] = R;
            n[48] = ee;
        } else {
            ee = n[48];
        }
        let te;
        if (n[49] !== N || n[50] !== w || n[51] !== z || n[52] !== X || n[53] !== ee || n[54] !== A) {
            te = <div {...babelHelpers.extends({
                onClick: N,
                onKeyDown: w,
                role: "button",
                tabIndex: 0
            }, A, {
                children: [
                    z,
                    j,
                    X,
                    Y,
                    ee
                ]
            })}/>;
            n[49] = N;
            n[50] = w;
            n[51] = z;
            n[52] = X;
            n[53] = ee;
            n[54] = A;
            n[55] = te;
        } else {
            te = n[55];
        }
        return te;
    }
    l.default = p;
}, 226);