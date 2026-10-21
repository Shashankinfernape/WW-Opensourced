__d("WAWebConversationPreview.react", [
    "fbt",
    "WAWebAppContext.react",
    "WAWebClock",
    "WAWebConversationBackground.react",
    "WAWebConversationPanelWrapper.stylex",
    "WAWebMessageContainer.react",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSIconWdsIcDelivered.react",
    "WDSIconWdsIcRead.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        previewMessages: {
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            flexBasis: "x1r8uery",
            paddingTop: "x1p57kb1",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "x14hj8or",
            paddingInlineEnd: "xfwifpm",
            paddingLeft: null,
            paddingRight: null,
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        previewBubbleWidth: {
            maxWidth: "xggofmx",
            $$css: true
        },
        spacerCheckIcon: {
            width: "xn6xy2s",
            $$css: true
        },
        previewMeta: {
            position: "x1n2onr6",
            zIndex: "x1n327nk",
            float: "xtrg13t",
            marginTop: "xhsvlbd",
            marginBottom: "xz62fqu",
            marginInlineStart: "x1lziwak",
            marginInlineEnd: "x7g7pl8",
            color: "x1bvqhpb",
            fontSize: "x1ncwhqj",
            height: "xx3o462",
            lineHeight: "x152skdk",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        ackBlue: {
            color: "x1rv0e52",
            $$css: true
        },
        chatHeader: {
            position: "x1n2onr6",
            zIndex: "xfo81ep",
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            width: "xh8yej3",
            height: "x185czh",
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            backgroundColor: "x1280gxy",
            "::after_position": "x1j6awrg",
            "::after_bottom": "x1te75w5",
            "::after_insetInlineStart": "x1iygr5g",
            "::after_width": "x4eaejv",
            "::after_height": "xcock1l",
            "::after_content": "x100rkj9",
            "::after_backgroundColor": "xptwh4s",
            "::after_borderBottomWidth": "x1qj619r",
            "::after_borderBottomStyle": "x1r9ni5o",
            "::after_borderBottomColor": "xb1pvdl",
            $$css: true
        },
        chatHeaderDark: {
            boxShadow: "xu306ak",
            "::after_display": "x1h1zc6f",
            $$css: true
        },
        chatHeaderMaterial: {
            "::after_content": "x100rkj9",
            "::after_display": "x1h1zc6f",
            $$css: true
        },
        chatTitle: {
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1jchvi3",
            fontWeight: "x1fcty0u",
            lineHeight: "xdod15v",
            color: "x14ug900",
            textAlign: "x1yc453h",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        chatTitleDark: {
            fontWeight: "xk50ysn",
            $$css: true
        }
    };
    function m(e, t) {
        const n = new Date;
        n.setHours(e, t, 0, 0);
        return o("WAWebClock").Clock.timestampStr(Math.floor(n.getTime() / 1000));
    }
    function P3Component(t) {
        const n = o("react-compiler-runtime").c(31);
        const { direction, icon, message, time } = t;
        let u;
        if (n[0] !== direction) {
            u = (e || (e = r("stylex"))).props(direction === "incoming" ? o("WDSFlex.stylex").wdsFlex.selfStart : o("WDSFlex.stylex").wdsFlex.selfEnd, d.previewBubbleWidth);
            n[0] = direction;
            n[1] = u;
        } else {
            u = n[1];
        }
        const isSentByMe = direction === "outgoing";
        let p;
        let _;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab"
            };
            _ = {
                className: "xt0psk2"
            };
            n[2] = p;
            n[3] = _;
        } else {
            p = n[2];
            _ = n[3];
        }
        let f;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x1ncwhqj x3nfvp2 xxymvpz xlshs6z xqtp20y xexx8yu x18d9i69 x181vq82 x1uc92m"
            };
            n[4] = f;
        } else {
            f = n[4];
        }
        let g;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            g = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, o("WDSFlex.stylex").wdsFlex.flexShrink0);
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== time) {
            h = <span {...babelHelpers.extends({}, g, {
                children: time
            })}/>;
            n[6] = time;
            n[7] = h;
        } else {
            h = n[7];
        }
        let y;
        if (n[8] !== icon) {
            y = icon != null && <span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.spacerCheckIcon))}/>;
            n[8] = icon;
            n[9] = y;
        } else {
            y = n[9];
        }
        let C;
        if (n[10] !== h || n[11] !== y) {
            C = <span {...babelHelpers.extends({}, f, {
                "aria-hidden": true,
                children: [
                    h,
                    y
                ]
            })}/>;
            n[10] = h;
            n[11] = y;
            n[12] = C;
        } else {
            C = n[12];
        }
        let b;
        if (n[13] !== message || n[14] !== C) {
            const Component = r("WDSText.react");
            b = <div {...babelHelpers.extends({}, _, {
                children: <Component type="Body2" colorName="contentDefault">{message}{C}</Component>
            })}/>;
            n[13] = message;
            n[14] = C;
            n[15] = b;
        } else {
            b = n[15];
        }
        let v;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            v = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter, o("WDSFlex.stylex").wdsFlex.columnGapQuarter, d.previewMeta);
            n[16] = v;
        } else {
            v = n[16];
        }
        let S;
        if (n[17] !== time) {
            S = <span>{time}</span>;
            n[17] = time;
            n[18] = S;
        } else {
            S = n[18];
        }
        let R;
        if (n[19] !== icon || n[20] !== S) {
            R = <div {...babelHelpers.extends({}, v, {
                children: [
                    S,
                    icon
                ]
            })}/>;
            n[19] = icon;
            n[20] = S;
            n[21] = R;
        } else {
            R = n[21];
        }
        let L;
        if (n[22] !== b || n[23] !== R) {
            L = <div {...babelHelpers.extends({}, p, {
                children: [
                    b,
                    R
                ]
            })}/>;
            n[22] = b;
            n[23] = R;
            n[24] = L;
        } else {
            L = n[24];
        }
        let E;
        if (n[25] !== L || n[26] !== isSentByMe) {
            const Component = r("WAWebMessageContainer.react");
            E = <Component isSentByMe={isSentByMe}>{L}</Component>;
            n[25] = L;
            n[26] = isSentByMe;
            n[27] = E;
        } else {
            E = n[27];
        }
        let k;
        if (n[28] !== u || n[29] !== E) {
            k = <div {...babelHelpers.extends({}, u, {
                children: E
            })}/>;
            n[28] = u;
            n[29] = E;
            n[30] = k;
        } else {
            k = n[30];
        }
        return k;
    }
    function _() {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.justifyEnd, o("WDSFlex.stylex").wdsFlex.rowGapSingle, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.flexShrink1, d.previewMessages);
            t[0] = n;
        } else {
            n = t[0];
        }
        let a;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = <P3Component direction="incoming" message={s._("Try out themes! Select one to preview and apply it 🎨✨")} time={m(11, 30)}/>;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = <P3Component direction="outgoing" message={s._("This is what your chats will look like with this theme")} time={m(11, 31)} icon={c.jsx(r("WDSIconWdsIcDelivered.react"), {
                height: 18,
                width: 18,
                testid: "msg-check"
            })}/>;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = <P3Component direction="incoming" message={s._("Selecting a theme replaces your default chat theme")} time={m(11, 32)}/>;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            u = <div {...babelHelpers.extends({}, n, {
                "data-testid": "conversation-preview-messages",
                children: [
                    a,
                    i,
                    l,
                    <P3Component direction="outgoing" message={s._("Only you see your chat themes")} time={m(11, 33)} icon={c.jsx(r("WDSIconWdsIcRead.react"), {
                        height: 18,
                        width: 18,
                        testid: "msg-dblcheck",
                        xstyle: d.ackBlue
                    })}/>
                ]
            })}/>;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function f(t) {
        const n = o("react-compiler-runtime").c(24);
        const { previewType, showDoodle, title, wallpaper } = t;
        const u = o("WAWebAppContext.react").useAppContext();
        const u_rightDrawerOpen = u.rightDrawerOpen;
        const p = o("WAWebThemeContext").useIsDarkTheme();
        let f;
        if (n[0] !== p) {
            f = (e || (e = r("stylex"))).props(d.chatHeader, p && d.chatHeaderDark, d.chatHeaderMaterial, o("WAWebConversationPanelWrapper.stylex").styles.header);
            n[0] = p;
            n[1] = f;
        } else {
            f = n[1];
        }
        let g;
        if (n[2] !== p) {
            g = (e || (e = r("stylex"))).props(d.chatTitle, p && d.chatTitleDark, o("WAWebConversationPanelWrapper.stylex").styles.titleInHeader);
            n[2] = p;
            n[3] = g;
        } else {
            g = n[3];
        }
        let h;
        if (n[4] !== g || n[5] !== title) {
            h = <span {...babelHelpers.extends({}, g, {
                children: title
            })}/>;
            n[4] = g;
            n[5] = title;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== f || n[8] !== h) {
            y = <header {...babelHelpers.extends({}, f, {
                children: h
            })}/>;
            n[7] = f;
            n[8] = h;
            n[9] = y;
        } else {
            y = n[9];
        }
        let C;
        if (n[10] !== showDoodle || n[11] !== wallpaper) {
            C = c.jsx(r("WAWebConversationBackground.react"), {
                wallpaper,
                showDoodle
            });
            n[10] = showDoodle;
            n[11] = wallpaper;
            n[12] = C;
        } else {
            C = n[12];
        }
        let b;
        if (n[13] !== previewType) {
            b = previewType === "theme" && <_/>;
            n[13] = previewType;
            n[14] = b;
        } else {
            b = n[14];
        }
        let v;
        if (n[15] !== u_rightDrawerOpen) {
            v = ({
                0: {},
                1: {
                    className: "x1lun4ml x18b5jzi xbogo7e"
                }
            })[!!u_rightDrawerOpen << 0];
            n[15] = u_rightDrawerOpen;
            n[16] = v;
        } else {
            v = n[16];
        }
        let S;
        if (n[17] !== v) {
            S = <footer {...babelHelpers.extends({}, v)}/>;
            n[17] = v;
            n[18] = S;
        } else {
            S = n[18];
        }
        let R;
        if (n[19] !== y || n[20] !== C || n[21] !== b || n[22] !== S) {
            R = <>{y}{C}{b}{S}</>;
            n[19] = y;
            n[20] = C;
            n[21] = b;
            n[22] = S;
            n[23] = R;
        } else {
            R = n[23];
        }
        return R;
    }
    l.default = f;
}, 226);