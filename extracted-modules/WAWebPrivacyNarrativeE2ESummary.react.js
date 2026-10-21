__d("WAWebPrivacyNarrativeE2ESummary.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebPrinaUtils",
    "WAWebText.react",
    "WDSIconIcCall.react",
    "WDSIconIcFilter.react",
    "WDSIconIcLocationOn.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcStatus.react",
    "WDSIllustrationWdsPictoChatsLockAndroid.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        textAlignStart: {
            textAlign: "x1yc453h",
            $$css: true
        },
        iconContainer: {
            paddingTop: "xyamay9",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "xq1608w",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        horizontalPadding: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1xnnf8n",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x106a9eq",
            $$css: true
        },
        title: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        listItem: {
            height: "xsdox4t",
            $$css: true
        },
        minHeight: {
            minHeight: "xgujvf1",
            $$css: true
        }
    };
    function D1(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = e.id;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                xstyle: o("WDSPaddings.stylex").wdsPaddings.padding8,
                width: 24,
                height: 24
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        switch(n){
            case "text":
                {
                    let l;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        l = u.jsx(r("WDSIconWdsIcChat.react"), babelHelpers.extends({}, i));
                        t[1] = l;
                    } else {
                        l = t[1];
                    }
                    return l;
                }
            case "calls":
                {
                    let s;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        s = u.jsx(r("WDSIconIcCall.react"), babelHelpers.extends({}, i));
                        t[2] = s;
                    } else {
                        s = t[2];
                    }
                    return s;
                }
            case "media":
                {
                    let c;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        c = u.jsx(r("WDSIconIcFilter.react"), babelHelpers.extends({}, i));
                        t[3] = c;
                    } else {
                        c = t[3];
                    }
                    return c;
                }
            case "location":
                {
                    let d;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        d = u.jsx(r("WDSIconIcLocationOn.react"), babelHelpers.extends({}, i, {
                            testid: "location-refreshed-outline"
                        }));
                        t[4] = d;
                    } else {
                        d = t[4];
                    }
                    return d;
                }
            case "status":
                {
                    let m;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        m = u.jsx(r("WDSIconWdsIcStatus.react"), babelHelpers.extends({
                            height: 24,
                            width: 24,
                            testid: "status-refreshed"
                        }, i));
                        t[5] = m;
                    } else {
                        m = t[5];
                    }
                    return m;
                }
        }
    }
    const color = "wdsContentDefault";
    function P1() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u.jsx(r("WDSIllustrationWdsPictoChatsLockAndroid.react"), {
                testid: "security-message-lock-illustration"
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(35);
        const { icon, isMessageYourselfChat, subTitle, textAlignment, title, xstyle } = e;
        const p = isMessageYourselfChat === undefined ? false : isMessageYourselfChat;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                id: "text",
                icon: <D1 id="text"/>,
                text: s._("Text and voice messages")
            };
            t[0] = _;
        } else {
            _ = t[0];
        }
        let g;
        if (t[1] !== p) {
            g = p ? null : {
                id: "calls",
                icon: <D1 id="calls"/>,
                text: s._("Audio and video calls")
            };
            t[1] = p;
            t[2] = g;
        } else {
            g = t[2];
        }
        let h;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                id: "media",
                icon: <D1 id="media"/>,
                text: s._("Photos, videos and documents")
            };
            t[3] = h;
        } else {
            h = t[3];
        }
        let y;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                id: "location",
                icon: <D1 id="location"/>,
                text: s._("Location sharing")
            };
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] !== p) {
            C = p ? null : {
                id: "status",
                icon: <D1 id="status"/>,
                text: s._("Statuses")
            };
            t[5] = p;
            t[6] = C;
        } else {
            C = t[6];
        }
        let b;
        if (t[7] !== g || t[8] !== C) {
            b = [
                _,
                g,
                h,
                y,
                C
            ].filter(Boolean);
            t[7] = g;
            t[8] = C;
            t[9] = b;
        } else {
            b = t[9];
        }
        const v = b;
        let S;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "xqy66fx x1pic42t xr1496l x1onr9mi"
            };
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] !== icon) {
            const Component = o("WAWebFlex.react").FlexItem;
            R = <Component align="center" xstyle={c.iconContainer}><div {...babelHelpers.extends({}, S, {
                children: icon
            })}/></Component>;
            t[11] = icon;
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            L = [
                c.horizontalPadding,
                c.title
            ];
            t[13] = L;
        } else {
            L = t[13];
        }
        let E;
        if (t[14] !== textAlignment) {
            E = [
                textAlignment,
                L
            ];
            t[14] = textAlignment;
            t[15] = E;
        } else {
            E = t[15];
        }
        let margin;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            margin = [
                16,
                0
            ];
            t[16] = margin;
        } else {
            margin = t[16];
        }
        let I;
        if (t[17] !== E || t[18] !== title) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            I = <Component xstyle={E} margin={margin} weight="medium" as="h1">{title}</Component>;
            t[17] = E;
            t[18] = title;
            t[19] = I;
        } else {
            I = t[19];
        }
        let T;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            T = [
                c.horizontalPadding,
                o("WDSMargins.stylex").wdsMargins.marginBottom0
            ];
            t[20] = T;
        } else {
            T = t[20];
        }
        let D;
        if (t[21] !== textAlignment) {
            D = [
                textAlignment,
                T
            ];
            t[21] = textAlignment;
            t[22] = D;
        } else {
            D = t[22];
        }
        let x;
        if (t[23] !== subTitle || t[24] !== D) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            x = <Component xstyle={D} marginBottom={8} color="wdsContentDefault">{subTitle}</Component>;
            t[23] = subTitle;
            t[24] = D;
            t[25] = x;
        } else {
            x = t[25];
        }
        let $;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            $ = {
                className: "xyamay9 xf159sx x1l90r2v xmzvs34"
            };
            t[26] = $;
        } else {
            $ = t[26];
        }
        let P;
        if (t[27] !== v) {
            P = <ul {...babelHelpers.extends({}, $, {
                children: v.map(f)
            })}/>;
            t[27] = v;
            t[28] = P;
        } else {
            P = t[28];
        }
        let N;
        if (t[29] !== I || t[30] !== x || t[31] !== P || t[32] !== R || t[33] !== xstyle) {
            const Component = o("WAWebFlex.react").FlexColumn;
            N = <Component xstyle={xstyle} justify="center" align="stretch">{R}{I}{x}{P}</Component>;
            t[29] = I;
            t[30] = x;
            t[31] = P;
            t[32] = R;
            t[33] = xstyle;
            t[34] = N;
        } else {
            N = t[34];
        }
        return N;
    }
    function f(e) {
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        return <Component_1 key={e.id} as="li" margin={0} padding={[
            0,
            16,
            0,
            12
        ]} align="center" xstyle={c.listItem}>{e.icon}<Component color={color}>{e.text}</Component></Component_1>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function GComponent() {
        const e = o("react-compiler-runtime").c(6);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Your chats and calls are private");
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let r;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("End-to-end encryption keeps your personal messages and calls between you and the people you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them. This includes your:");
            e[1] = r;
        } else {
            r = e[1];
        }
        const a = r;
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Learn more");
            e[2] = i;
        } else {
            i = e[2];
        }
        const l = i;
        let d;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = <_ icon=<P1/> textAlignment={c.textAlignStart} title={n} subTitle={a}/>;
            e[3] = d;
        } else {
            d = e[3];
        }
        let m;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                c.horizontalPadding,
                c.minHeight
            ];
            e[4] = m;
        } else {
            m = e[4];
        }
        let f;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            f = <>{d}<Component_1 xstyle={m}><Component href={o("WAWebPrinaUtils").securityUrl()}>{l}</Component></Component_1></>;
            e[5] = f;
        } else {
            f = e[5];
        }
        return f;
    }
    l.E2eSummary = _;
    l.E2eSummarySecurityDrawer = GComponent;
}, 226);