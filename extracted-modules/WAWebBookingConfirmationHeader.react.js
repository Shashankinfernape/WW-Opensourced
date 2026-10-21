__d("WAWebBookingConfirmationHeader.react", [
    "fbt",
    "WAWebBizOpenBookingConfirmationDrawer.react",
    "WAWebBookingConfirmation",
    "WAWebFormatEventDateString",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconIcCalendarMonth.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
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
        iconColor: {
            color: "x14ug900",
            $$css: true
        },
        contentWrapper: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    function m(t) {
        const u = o("react-compiler-runtime").c(41);
        const t_msgKey = t.msgKey;
        let p;
        if (u[0] === Symbol.for("react.memo_cache_sentinel")) {
            let _;
            p = [
                (_ = o("WAWebMsgGetters")).getInteractiveHeader,
                _.getInteractivePayload,
                _.getInteractiveType,
                _.getIsSentByMe,
                _.getNativeFlowName,
                _.getType
            ];
            u[0] = p;
        } else {
            p = u[0];
        }
        const f = o("useWAWebMsgValues").useMsgValues(t_msgKey, p);
        const g = f[0];
        const h = f[1];
        const y = f[2];
        const C = f[3];
        const b = f[4];
        const v = f[5];
        const S = o("WAWebBookingConfirmation").getBookingConfirmationInfoFor({
            interactivePayload: h,
            interactiveType: y,
            nativeFlowName: b,
            type: v
        });
        const R = o("WAWebThemeContext").useIsDarkTheme();
        if (S == null) {
            return null;
        }
        const L = g?.title;
        const E = Math.floor(Date.parse(S.startDatetime) / 1000);
        const k = S.endDatetime != null ? Math.floor(Date.parse(S.endDatetime) / 1000) : null;
        let I;
        if (u[1] !== k || u[2] !== E) {
            I = o("WAWebFormatEventDateString").getEventDateStringFor(E, k);
            u[1] = k;
            u[2] = E;
            u[3] = I;
        } else {
            I = u[3];
        }
        const T = I;
        const D = S.location ?? S.bookingUrl ?? S.phoneNumber ?? null;
        const x = S.bookingUrl != null;
        const $ = S.phoneNumber != null && S.location == null && S.bookingUrl == null;
        let P;
        if (u[4] !== S || u[5] !== t_msgKey) {
            P = function() {
                const t = o("WAWebMsgCollection").MsgCollection.get(t_msgKey)?.safe();
                if (!(t == null || t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE)) {
                    o("WAWebBizOpenBookingConfirmationDrawer.react").openBookingConfirmationDrawer(S, t);
                }
            };
            u[4] = S;
            u[5] = t_msgKey;
            u[6] = P;
        } else {
            P = u[6];
        }
        const N = P;
        let M;
        if (u[7] !== N) {
            M = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    N();
                }
            };
            u[7] = N;
            u[8] = M;
        } else {
            M = u[8];
        }
        const w = M;
        let A;
        if (u[9] !== C) {
            A = (e || (e = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSFlex.stylex").wdsFlex.flexColumn, d.wrapper, C ? d.bubbleOut : d.bubbleIn);
            u[9] = C;
            u[10] = A;
        } else {
            A = u[10];
        }
        let F;
        if (u[11] === Symbol.for("react.memo_cache_sentinel")) {
            F = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle);
            u[11] = F;
        } else {
            F = u[11];
        }
        let O;
        if (u[12] !== R) {
            O = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.iconContainer, R ? d.iconContainerDark : d.iconContainerLight);
            u[12] = R;
            u[13] = O;
        } else {
            O = u[13];
        }
        let B;
        if (u[14] === Symbol.for("react.memo_cache_sentinel")) {
            B = c.jsx(r("WDSIconIcCalendarMonth.react"), {
                width: 24,
                height: 24,
                iconXstyle: d.iconColor
            });
            u[14] = B;
        } else {
            B = u[14];
        }
        let W;
        if (u[15] !== O) {
            W = <div {...babelHelpers.extends({}, O, {
                children: B
            })}/>;
            u[15] = O;
            u[16] = W;
        } else {
            W = u[16];
        }
        let q;
        if (u[17] === Symbol.for("react.memo_cache_sentinel")) {
            q = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, d.contentWrapper);
            u[17] = q;
        } else {
            q = u[17];
        }
        let U;
        if (u[18] !== L) {
            const Component = r("WDSText.react");
            U = L != null && <Component type="Body2Emphasized" colorName="contentDefault" testid="booking-confirmation-header-title">{L}</Component>;
            u[18] = L;
            u[19] = U;
        } else {
            U = u[19];
        }
        let V;
        if (u[20] !== T) {
            const Component = r("WDSText.react");
            V = <Component type="Body3" colorName="contentDefault" maxLines={1}>{T}</Component>;
            u[20] = T;
            u[21] = V;
        } else {
            V = u[21];
        }
        let H;
        if (u[22] !== D) {
            const Component = r("WDSText.react");
            H = D != null && <Component type="Body3" colorName="contentDeemphasized" maxLines={1} testid="booking-confirmation-header-contact">{D}</Component>;
            u[22] = D;
            u[23] = H;
        } else {
            H = u[23];
        }
        let G;
        if (u[24] !== S.displayContent?.displayMeetingType || u[25] !== $ || u[26] !== x) {
            const Component = r("WDSText.react");
            G = (x || $ || S.displayContent?.displayMeetingType != null) && <Component type="Body3" colorName="contentDeemphasized">{S.displayContent?.displayMeetingType ?? (x ? s._("Video call") : s._("Phone call"))}</Component>;
            u[24] = S.displayContent?.displayMeetingType;
            u[25] = $;
            u[26] = x;
            u[27] = G;
        } else {
            G = u[27];
        }
        let X;
        if (u[28] !== U || u[29] !== V || u[30] !== H || u[31] !== G) {
            X = <div {...babelHelpers.extends({}, q, {
                children: [
                    U,
                    V,
                    H,
                    G
                ]
            })}/>;
            u[28] = U;
            u[29] = V;
            u[30] = H;
            u[31] = G;
            u[32] = X;
        } else {
            X = u[32];
        }
        let Y;
        if (u[33] !== X || u[34] !== W) {
            Y = <div {...babelHelpers.extends({}, F, {
                children: [
                    W,
                    X
                ]
            })}/>;
            u[33] = X;
            u[34] = W;
            u[35] = Y;
        } else {
            Y = u[35];
        }
        let J;
        if (u[36] !== N || u[37] !== w || u[38] !== Y || u[39] !== A) {
            J = <div {...babelHelpers.extends({
                "data-testid": "booking-confirmation-header",
                onClick: N,
                onKeyDown: w,
                role: "button",
                tabIndex: 0
            }, A, {
                children: Y
            })}/>;
            u[36] = N;
            u[37] = w;
            u[38] = Y;
            u[39] = A;
            u[40] = J;
        } else {
            J = u[40];
        }
        return J;
    }
    l.default = m;
}, 226);