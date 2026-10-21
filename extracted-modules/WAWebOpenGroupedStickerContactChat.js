__d("WAWebOpenGroupedStickerContactChat", [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentOneToOneContact"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        const t_author = t.author;
        if (t_author != null) {
            const r = t.unsafe();
            const a = o("WAWebGroupAgentOneToOneContact").getGroupAgentAwareOneToOneContact(t_author, o("WAWebFrontendMsgGetters").getChat(r), "handle_open_contact_chat");
            if (a != null) {
                o("WAWebFindChatAction").findOrCreateLatestChat(a, "messageGroupedSticker").then(({ chat })=>{
                    o("WAWebCmd").Cmd.openChatFromUnread({
                        chat,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage
                    }).then((e)=>{
                        if (e) {
                            o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                        }
                    }).catch(()=>o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[contact chat] failed to open chat from unread"
                        ]))).sendLogs("failed-to-open-chat-from-unread"));
                }).catch(()=>o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[contact chat] failed to find or create latest chat"
                    ]))).sendLogs("failed-to-find-or-create-latest-chat"));
            }
        }
    }
    l.default = u;
}, 98);