__d("WAWebChangeNumberNotificationBanner.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatSendMessages",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebConversationBanner.react",
    "WAWebFindChatAction",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebWidFormat",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "changeNumberNotificationClick");
            const n_chat = n.chat;
            if (!n_chat.changeNumberOldJid) {
                n_chat.changeNumberOldJid = t;
            }
            n_chat.changeNumberNewJid = undefined;
            yield o("WAWebCmd").Cmd.openChatFromUnread({
                chat: n_chat,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NumberChangeNotificationBanner
            }).then((e)=>{
                if (e) {
                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(n_chat);
                }
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(25);
        const { chat, ref, xstyle } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebChatGetters").getChangeNumberOldJid,
                o("WAWebChatGetters").getChangeNumberNewJid,
                o("WAWebChatGetters").getId
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("useWAWebChatValues").useChatValues(chat.id, l);
        const m = c[0];
        const p = c[1];
        const _ = c[2];
        let f;
        if (t[1] !== p || t[2] !== _) {
            f = function() {
                const e = _;
                d(r("nullthrows")(p), e);
            };
            t[1] = p;
            t[2] = _;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== chat) {
            h = function() {
                o("WAWebChatSendMessages").sendDismissChangeNumber(chat);
            };
            t[4] = chat;
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        const C = m === undefined && p !== undefined;
        const b = m !== undefined && p === undefined;
        let v;
        if (t[6] !== m || t[7] !== _ || t[8] !== b) {
            e: {
                const S = m || _;
                const R = o("WAWebContactCollection").ContactCollection.get(S);
                const L = R != null && (o("WAWebFrontendContactGetters").getIsMyContact(R) || R != null && R.id.isLid()) ? o("WAWebFrontendContactGetters").getFormattedName(R) : o("WAWebWidFormat").widToFormattedUser(S);
                if (b) {
                    v = s._("{name} changed their phone number. You're currently chatting with their new number.", [
                        s._param("name", L)
                    ]);
                    break e;
                }
                v = s._("{name} changed their phone number to a new number.", [
                    s._param("name", L)
                ]);
            }
            t[6] = m;
            t[7] = _;
            t[8] = b;
            t[9] = v;
        } else {
            v = t[9];
        }
        const E = v;
        let k;
        if (t[10] !== C || t[11] !== g) {
            const Component = o("WAWebButton.react").Button;
            k = C ? <div className="x1bc76pt"><Component onClick={g} type="plain-white" nowrap>{s._("Message new number")}</Component></div> : null;
            t[10] = C;
            t[11] = g;
            t[12] = k;
        } else {
            k = t[12];
        }
        const I = k;
        let T;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "x78zum5 x6s0dn4"
            };
            t[13] = T;
        } else {
            T = t[13];
        }
        let D;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                className: "x1iyjqo2 xhslqc4"
            };
            t[14] = D;
        } else {
            D = t[14];
        }
        let x;
        if (t[15] !== E) {
            const Component = r("WDSText.react");
            x = <span {...babelHelpers.extends({
                "data-testid": "change-number-banner-text-container"
            }, D, {
                children: <Component type="Body2" colorName="contentDeemphasized" testid="change-number-banner-text">{E}</Component>
            })}/>;
            t[15] = E;
            t[16] = x;
        } else {
            x = t[16];
        }
        let $;
        if (t[17] !== I || t[18] !== x) {
            $ = <div {...babelHelpers.extends({}, T, {
                children: [
                    x,
                    I
                ]
            })}/>;
            t[17] = I;
            t[18] = x;
            t[19] = $;
        } else {
            $ = t[19];
        }
        let P;
        if (t[20] !== y || t[21] !== ref || t[22] !== $ || t[23] !== xstyle) {
            const Component = r("WAWebConversationBanner.react");
            P = <Component ref={ref} onClose={y} xstyle={xstyle}>{$}</Component>;
            t[20] = y;
            t[21] = ref;
            t[22] = $;
            t[23] = xstyle;
            t[24] = P;
        } else {
            P = t[24];
        }
        return P;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getShowChangeNumberNotification
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebChatValues").useChatValues(e.id, n);
        const a = r[0];
        return a;
    }
    l.onChangeNumberNotificationClick = d;
    l.ChangeNumberNotificationBanner = p;
    l.useChangeNumberNotificationBanner = _;
}, 226);