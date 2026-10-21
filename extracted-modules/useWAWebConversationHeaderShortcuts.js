__d("useWAWebConversationHeaderShortcuts", [
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebConversationMenus",
    "WAWebHeaderInfoPanelActions",
    "WAWebWamEnumProfileEntryPoint",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const r = o("react-compiler-runtime").c(10);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_chatlist_selection", s);
        let a;
        if (r[0] !== e || r[1] !== t || r[2] !== n) {
            a = function() {
                o("WAWebHeaderInfoPanelActions").openInfoPanel({
                    chat: e,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_HEADER,
                    threadId: t,
                    uim: n
                });
            };
            r[0] = e;
            r[1] = t;
            r[2] = n;
            r[3] = a;
        } else {
            a = r[3];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_current_chat_info", a);
        let i;
        if (r[4] !== e) {
            i = function() {
                o("WAWebBlockContactUtils").handleBlock(e, o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock);
            };
            r[4] = e;
            r[5] = i;
        } else {
            i = r[5];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "block_current_chat", i);
        let l;
        if (r[6] !== e) {
            l = function() {
                o("WAWebCmd").Cmd.clearChat(e);
            };
            r[6] = e;
            r[7] = l;
        } else {
            l = r[7];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "clear_current_chat_conversation_history", l);
        let u;
        if (r[8] !== e) {
            u = function() {
                if (o("WAWebChatGetters").getIsGroup(e)) {
                    o("WAWebConversationMenus").handleDeleteOrExitChat(e);
                }
            };
            r[8] = e;
            r[9] = u;
        } else {
            u = r[9];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "exit_current_group", u);
    }
    function s() {
        return o("WAWebHeaderInfoPanelActions").closeInfoPanel();
    }
    l.default = e;
}, 98);