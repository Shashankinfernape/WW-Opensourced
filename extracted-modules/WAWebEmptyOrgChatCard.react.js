__d("WAWebEmptyOrgChatCard.react", [
    "JSResourceForInteraction",
    "WAWebAppContext.react",
    "WAWebChatThemeModeContext",
    "WAWebEmbeddedChatContext",
    "WAWebFrontendContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebMsgGetters",
    "WAWebSystemMessageStyles.stylex",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
    "useWAWebPrimaryOrgMembershipForContact"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useContext, useMemo } = c;
    const P1 = r("WAWebLoadable")({
        loading: function() {
            return <></>;
        },
        loader: r("WAWebLazyLoadedRetriable")(function() {
            return r("JSResourceForInteraction")("WAWebContactInfoCard.react").__setRef("WAWebEmptyOrgChatCard.react").load();
        }, "EmptyOrgContactInfoCard")
    });
    function _(t) {
        const i = o("react-compiler-runtime").c(25);
        const { chat, threadId } = t;
        const c = o("WAWebAppContext.react").useAppContext();
        const c_rightDrawerOpen = c.rightDrawerOpen;
        const _ = o("WAWebEmbeddedChatContext").useIsEmbeddedChat();
        const g = useContext(r("WAWebChatThemeModeContext"));
        const g_bubbleStyle = g.bubbleStyle;
        const y = o("useWAWebContactValues").useOptionalContactValues(chat.contact?.id, [
            o("WAWebFrontendContactGetters").getIsMyContact
        ]) ?? [
            true
        ];
        const C = y[0];
        let b;
        if (i[0] !== chat.msgs.msgLoadState) {
            b = function() {
                return chat.msgs.msgLoadState;
            };
            i[0] = chat.msgs.msgLoadState;
            i[1] = b;
        } else {
            b = i[1];
        }
        let v;
        if (i[2] !== chat) {
            v = [
                chat
            ];
            i[2] = chat;
            i[3] = v;
        } else {
            v = i[3];
        }
        const S = r("useWAWebEventTargetValue")(chat.msgs, "bulk_add", b, v);
        let R;
        if (i[4] !== chat || i[5] !== S) {
            R = [
                chat,
                chat.msgs,
                S
            ];
            i[4] = chat;
            i[5] = S;
            i[6] = R;
        } else {
            R = i[6];
        }
        const L = R;
        let E;
        if (i[7] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                "add",
                "remove",
                "reset",
                "bulk_add",
                "change"
            ];
            i[7] = E;
        } else {
            E = i[7];
        }
        let k;
        if (i[8] !== chat.accountLid || i[9] !== chat.id || i[10] !== chat.msgs || i[11] !== C || i[12] !== S || i[13] !== threadId) {
            k = function() {
                if (threadId != null || C || !chat.id.isRegularUser() || o("WAWebUserPrefsMeUser").isMeAccount(chat.id)) {
                    return null;
                }
                const e = S.noEarlierMsgs && !S.isLoadingAroundMsgs && !S.isLoadingRecentMsgs && chat.msgs.every(f);
                if (e && chat.accountLid != null) {
                    return o("WAWebWidToJid").userLidtoLidUserJid(chat.accountLid);
                }
                return null;
            };
            i[8] = chat.accountLid;
            i[9] = chat.id;
            i[10] = chat.msgs;
            i[11] = C;
            i[12] = S;
            i[13] = threadId;
            i[14] = k;
        } else {
            k = i[14];
        }
        let I;
        if (i[15] !== chat || i[16] !== C || i[17] !== S || i[18] !== threadId) {
            I = [
                chat,
                C,
                S,
                threadId
            ];
            i[15] = chat;
            i[16] = C;
            i[17] = S;
            i[18] = threadId;
            i[19] = I;
        } else {
            I = i[19];
        }
        const T = r("useWAWebEventTargetValue")(L, E, k, I);
        const D = r("useWAWebPrimaryOrgMembershipForContact")(_ ? null : T);
        let x;
        if (i[20] !== g_bubbleStyle || i[21] !== chat || i[22] !== c_rightDrawerOpen || i[23] !== D) {
            x = D == null ? null : <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebSystemMessageStyles.stylex").systemMessageStyles.messageRow), {
                "data-testid": "fmx-empty-org-chat-card-row",
                children: <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgSystem, o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncement, c_rightDrawerOpen ? o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncementProportionalThree : o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncementProportionalTwo, c_rightDrawerOpen && o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncementThree), {
                    "data-testid": "fmx-empty-org-chat-card",
                    children: <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebSystemMessageStyles.stylex").systemMessageStyles.message, o("WAWebSystemMessageStyles.stylex").systemMessageStyles.messageSystem, g_bubbleStyle), {
                        "data-testid": "fmx-empty-org-chat-card-surface",
                        children: <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebSystemMessageStyles.stylex").systemMessageStyles.messageBackground), {
                            "data-testid": "fmx-empty-org-chat-card-content",
                            children: <P1 chat={chat}/>
                        })}/>
                    })}/>
                })}/>
            })}/>;
            i[20] = g_bubbleStyle;
            i[21] = chat;
            i[22] = c_rightDrawerOpen;
            i[23] = D;
            i[24] = x;
        } else {
            x = i[24];
        }
        return x;
    }
    function f(e) {
        return o("WAWebMsgGetters").getIsInitialE2ENotification(e) || o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(e);
    }
    l.default = _;
}, 98);