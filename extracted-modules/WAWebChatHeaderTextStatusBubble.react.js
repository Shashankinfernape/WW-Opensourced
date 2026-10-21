__d("WAWebChatHeaderTextStatusBubble.react", [
    "fbt",
    "WATimeUtils",
    "WAWebAboutDailyUtils",
    "WAWebAboutWamLogger",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotUtils",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebTextStatusAction",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebSetModelValue"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect, useRef, useState } = c;
    const f = 12;
    const g = 6;
    const h = 12;
    const y = 60;
    const C = 450;
    const b = 200;
    const v = "xj0yvnm-B";
    const S = "xuza879-B";
    const R = "xwdlab6-B";
    const L = "inset(-12px -12px -12px -12px)";
    const E = "inset(-12px -12px 58% -12px)";
    const k = "x1fc32xu-B";
    const I = "xlx4h74-B";
    const T = {
        text: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            fontSize: "x1nxh6w3",
            lineHeight: "xd4r4e8",
            color: "x14ug900",
            $$css: true
        }
    };
    function D(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = useState(e ? "entering" : "hidden");
        const phase = n[0];
        const a = n[1];
        const i = useState(e);
        const l = i[0];
        const s = i[1];
        if (e !== l) {
            s(e);
            if (e) {
                a("entering");
            } else if (phase === "visible" || phase === "entering") {
                a("leaving");
            }
        }
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = function(t) {
                if (t.target === t.currentTarget) {
                    a($);
                }
            };
            t[0] = u;
        } else {
            u = t[0];
        }
        const handleEnterComplete = u;
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = function(t) {
                if (t.target === t.currentTarget) {
                    a(x);
                }
            };
            t[1] = d;
        } else {
            d = t[1];
        }
        const handleExitComplete = d;
        const isRendered = phase !== "hidden";
        let f;
        if (t[2] !== phase || t[3] !== isRendered) {
            f = {
                isRendered,
                phase,
                handleEnterComplete,
                handleExitComplete
            };
            t[2] = phase;
            t[3] = isRendered;
            t[4] = f;
        } else {
            f = t[4];
        }
        return f;
    }
    function x(e) {
        if (e === "leaving") {
            return "hidden";
        }
        return e;
    }
    function $(e) {
        if (e === "entering") {
            return "visible";
        }
        return e;
    }
    function P(e) {
        const t = o("react-compiler-runtime").c(74);
        const { chat, contactId, selectable } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let c;
            l = [
                o("WAWebContactGetters").getNotifyName,
                (c = o("WAWebFrontendContactGetters")).getTextStatusString,
                c.getTextStatusEmoji,
                c.getTextStatusLastUpdateTime,
                c.getTextStatusExpiryTs,
                c.getTextStatusEphemeralDuration
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = o("useWAWebContactValues").useContactValues(contactId, l);
        const f = d[0];
        const g = d[1];
        const textStatusEmoji = d[2];
        const textStatusLastUpdateTime = d[3];
        const textStatusExpiryTs = d[4];
        const textStatusEphemeralDuration = d[5];
        const v = o("useWAWebSetModelValue").useSetModelValue(chat, "composeQuotedMsg");
        const S = o("WAWebThemeContext").useIsDarkTheme();
        const R = useState(true);
        const L = R[0];
        const E = R[1];
        let k;
        if (t[1] !== chat.id) {
            k = function(t, r) {
                if (t.equals(chat.id)) {
                    E(r);
                }
            };
            t[1] = chat.id;
            t[2] = k;
        } else {
            k = t[2];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "conversation_near_bottom_changed", k);
        let x;
        if (t[3] !== textStatusEmoji || t[4] !== textStatusEphemeralDuration || t[5] !== textStatusExpiryTs || t[6] !== textStatusLastUpdateTime || t[7] !== g) {
            x = o("WAWebTextStatusUtils").shouldDisplayTextStatus({
                textStatusEmoji,
                textStatusEphemeralDuration,
                textStatusExpiryTs,
                textStatusLastUpdateTime,
                textStatusString: g
            });
            t[3] = textStatusEmoji;
            t[4] = textStatusEphemeralDuration;
            t[5] = textStatusExpiryTs;
            t[6] = textStatusLastUpdateTime;
            t[7] = g;
            t[8] = x;
        } else {
            x = t[8];
        }
        const $ = x;
        let P;
        if (t[9] !== $ || t[10] !== L || t[11] !== selectable || t[12] !== textStatusEphemeralDuration) {
            P = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() && $ && L && selectable !== true && o("WAWebTextStatusUtils").isEphemeralTextStatus(textStatusEphemeralDuration);
            t[9] = $;
            t[10] = L;
            t[11] = selectable;
            t[12] = textStatusEphemeralDuration;
            t[13] = P;
        } else {
            P = t[13];
        }
        const N = P;
        let M;
        if (t[14] !== chat.id || t[15] !== N) {
            M = function(t) {
                if (N && t.id.equals(chat.id)) {
                    o("WAWebAboutDailyUtils").incrementAboutMessageSend();
                }
            };
            t[14] = chat.id;
            t[15] = N;
            t[16] = M;
        } else {
            M = t[16];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_message_sent", M);
        let A;
        let F;
        if (t[17] !== contactId || t[18] !== textStatusLastUpdateTime) {
            A = function() {
                if (o("WAWebTextStatusUtils").isTextStatusNotFetched(textStatusLastUpdateTime)) {
                    o("WAWebTextStatusAction").getTextStatus(contactId);
                }
            };
            F = [
                contactId,
                textStatusLastUpdateTime
            ];
            t[17] = contactId;
            t[18] = textStatusLastUpdateTime;
            t[19] = A;
            t[20] = F;
        } else {
            A = t[19];
            F = t[20];
        }
        useEffect(A, F);
        const O = D(N);
        const { handleEnterComplete, handleExitComplete, isRendered, phase } = O;
        const VRef = useRef(undefined);
        let H;
        let G;
        if (t[21] !== N || t[22] !== textStatusLastUpdateTime) {
            H = function() {
                if (N && textStatusLastUpdateTime !== VRef.current) {
                    VRef.current = textStatusLastUpdateTime;
                    o("WAWebAboutWamLogger").logAboutConsumption({
                        aboutConsumptionSurface: o("WAWebAboutWamLogger").ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT
                    });
                    o("WAWebAboutDailyUtils").incrementAboutChatConsumption();
                }
            };
            G = [
                N,
                textStatusLastUpdateTime
            ];
            t[21] = N;
            t[22] = textStatusLastUpdateTime;
            t[23] = H;
            t[24] = G;
        } else {
            H = t[23];
            G = t[24];
        }
        useEffect(H, G);
        if (!isRendered) {
            return null;
        }
        let z;
        if (t[25] !== chat || t[26] !== contactId || t[27] !== f || t[28] !== v || t[29] !== textStatusEmoji || t[30] !== g) {
            z = function() {
                const e = [];
                if (textStatusEmoji != null) {
                    e.push(textStatusEmoji);
                }
                if (g != null && g !== "") {
                    e.push(g);
                }
                const t = e.join(" ");
                if (t !== "") {
                    const i = new (o("WAWebMsgModel")).Msg({
                        id: new (r("WAWebMsgKey"))({
                            fromMe: false,
                            remote: contactId,
                            id: r("WAWebMsgKey").newId_DEPRECATED()
                        }),
                        type: o("WAWebMsgType").MSG_TYPE.CHAT,
                        kind: o("WAWebMsgType").MsgKind.Chat,
                        body: t,
                        t: o("WATimeUtils").unixTime(),
                        from: contactId,
                        to: chat.id,
                        notifyName: f ?? "",
                        isNewMsg: false,
                        local: true,
                        ack: 0
                    });
                    o("WAWebMsgCollection").MsgCollection.add(i);
                    v(o("WAWebMsgModelUtils").createMsgSnapshot(i));
                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                    o("WAWebAboutWamLogger").logAboutInteraction({
                        aboutConsumptionSurface: o("WAWebAboutWamLogger").ABOUT_CONSUMPTION_SURFACE_TYPE.ONE_ON_ONE_CHAT
                    });
                    o("WAWebAboutDailyUtils").incrementAboutChatBubbleTap();
                }
            };
            t[25] = chat;
            t[26] = contactId;
            t[27] = f;
            t[28] = v;
            t[29] = textStatusEmoji;
            t[30] = g;
            t[31] = z;
        } else {
            z = t[31];
        }
        const j = z;
        let K;
        if (textStatusEmoji != null) {
            let Q;
            if (t[32] !== textStatusEmoji) {
                Q = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(textStatusEmoji);
                t[32] = textStatusEmoji;
                t[33] = Q;
            } else {
                Q = t[33];
            }
            const emoji = Q;
            if (emoji != null) {
                let Y;
                if (t[34] === Symbol.for("react.memo_cache_sentinel")) {
                    Y = {
                        className: "x11lfxj5 x2lah0s"
                    };
                    t[34] = Y;
                } else {
                    Y = t[34];
                }
                let J;
                if (t[35] !== emoji) {
                    J = <div {...babelHelpers.extends({}, Y, {
                        children: u.jsx(r("WAWebEmoji.react"), {
                            emoji,
                            size: "small"
                        }, "low-res")
                    })}/>;
                    t[35] = emoji;
                    t[36] = J;
                } else {
                    J = t[36];
                }
                K = J;
            }
        }
        let Z;
        if (t[37] === Symbol.for("react.memo_cache_sentinel")) {
            Z = s._("Quote text status");
            t[37] = Z;
        } else {
            Z = t[37];
        }
        const ariaLabel = Z;
        let te;
        let ne;
        if (t[38] !== chat || t[39] !== S) {
            te = o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(chat) || o("WAWebBotUtils").isHatchBot(chat.id);
            ne = ({
                0: {
                    className: "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx x78zum5 x6s0dn4 x1ypdohk x1dsg9wm"
                },
                2: {
                    className: "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx x78zum5 x6s0dn4 x1ypdohk x1dsg9wm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9"
                },
                1: {
                    className: "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx x78zum5 x6s0dn4 x1dsg9wm xt0e3qv"
                },
                3: {
                    className: "x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab xpr29tx x78zum5 x6s0dn4 x1dsg9wm x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xt0e3qv"
                }
            })[!!S << 1 | !!te << 0];
            t[38] = chat;
            t[39] = S;
            t[40] = te;
            t[41] = ne;
        } else {
            te = t[40];
            ne = t[41];
        }
        let re;
        if (t[42] !== g) {
            re = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: T.text,
                direction: "inherit",
                text: g,
                selectable: false
            });
            t[42] = g;
            t[43] = re;
        } else {
            re = t[43];
        }
        let oe;
        if (t[44] !== K || t[45] !== ne || t[46] !== re) {
            oe = <div {...babelHelpers.extends({}, ne, {
                children: [
                    K,
                    re
                ]
            })}/>;
            t[44] = K;
            t[45] = ne;
            t[46] = re;
            t[47] = oe;
        } else {
            oe = t[47];
        }
        const ae = oe;
        let ie;
        if (t[48] === Symbol.for("react.memo_cache_sentinel")) {
            ie = {
                className: "x10l6tqk x1ts3d7w x1r4y97 x18b33ah x78zum5 xdt5ytf x1cy8zhl"
            };
            t[48] = ie;
        } else {
            ie = t[48];
        }
        let le;
        if (t[49] !== S || t[50] !== phase) {
            le = ({
                0: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7"
                },
                4: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9"
                },
                2: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf"
                },
                6: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x91b5q4 x1ykxiw6 xa3vuyk x1u6ievf"
                },
                1: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2"
                },
                5: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2"
                },
                3: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2"
                },
                7: {
                    className: "x1n2onr6 x1v4s8kt xols6we x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx xyqm7xq xjpr12u x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xocyte x5hsz1j xn0cd8s x1u6ievf x1vwdvh2"
                }
            })[!!S << 2 | (phase === "entering") << 1 | (phase === "leaving") << 0];
            t[49] = S;
            t[50] = phase;
            t[51] = le;
        } else {
            le = t[51];
        }
        const se = phase === "leaving" ? handleExitComplete : undefined;
        let ue;
        if (t[52] !== le || t[53] !== se) {
            ue = <div {...babelHelpers.extends({}, le, {
                onAnimationEnd: se
            })}/>;
            t[52] = le;
            t[53] = se;
            t[54] = ue;
        } else {
            ue = t[54];
        }
        let ce;
        if (t[55] !== S || t[56] !== phase) {
            ce = ({
                0: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7"
                },
                4: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9"
                },
                2: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x1hha2om x1ykxiw6 xa3vuyk x1u6ievf xreyxwi"
                },
                6: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1hha2om x1ykxiw6 xa3vuyk x1u6ievf xreyxwi"
                },
                1: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi"
                },
                5: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi"
                },
                3: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi"
                },
                7: {
                    className: "x1n2onr6 xsmyaan x1kpxq89 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpr29tx x1y3qizg x1wsgfga x1rzzxd5 x1al4vs7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1npxeiq x5hsz1j xn0cd8s x1u6ievf xreyxwi"
                }
            })[!!S << 2 | (phase === "entering") << 1 | (phase === "leaving") << 0];
            t[55] = S;
            t[56] = phase;
            t[57] = ce;
        } else {
            ce = t[57];
        }
        let de;
        if (t[58] !== ce) {
            de = <div {...babelHelpers.extends({}, ce)}/>;
            t[58] = ce;
            t[59] = de;
        } else {
            de = t[59];
        }
        let me;
        if (t[60] !== phase) {
            me = ({
                0: {
                    className: "x193iq5w"
                },
                2: {
                    className: "x193iq5w x1oyg3g3 x1ykxiw6 xa3vuyk x1u6ievf x1vwdvh2 x1al4vs7"
                },
                1: {
                    className: "x193iq5w xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7"
                },
                3: {
                    className: "x193iq5w x1vwdvh2 xocyte x5hsz1j xn0cd8s x1u6ievf x1al4vs7"
                }
            })[(phase === "entering") << 1 | (phase === "leaving") << 0];
            t[60] = phase;
            t[61] = me;
        } else {
            me = t[61];
        }
        const pe = phase === "entering" ? handleEnterComplete : undefined;
        let _e;
        if (t[62] !== ae || t[63] !== j || t[64] !== te) {
            const Component = o("WAWebClickable.react").Clickable;
            _e = te ? ae : <Component onClick={j} ariaLabel={ariaLabel}>{ae}</Component>;
            t[62] = ae;
            t[63] = j;
            t[64] = te;
            t[65] = _e;
        } else {
            _e = t[65];
        }
        let fe;
        if (t[66] !== me || t[67] !== pe || t[68] !== _e) {
            fe = <div {...babelHelpers.extends({}, me, {
                onAnimationEnd: pe,
                children: _e
            })}/>;
            t[66] = me;
            t[67] = pe;
            t[68] = _e;
            t[69] = fe;
        } else {
            fe = t[69];
        }
        let ge;
        if (t[70] !== ue || t[71] !== de || t[72] !== fe) {
            ge = <div {...babelHelpers.extends({}, ie, {
                "data-testid": "chat-header-text-status-bubble",
                children: [
                    ue,
                    de,
                    fe
                ]
            })}/>;
            t[70] = ue;
            t[71] = de;
            t[72] = fe;
            t[73] = ge;
        } else {
            ge = t[73];
        }
        return ge;
    }
    l.default = P;
}, 226);