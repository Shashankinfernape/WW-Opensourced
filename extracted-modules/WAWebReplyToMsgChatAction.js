__d("WAWebReplyToMsgChatAction", [
    "WATimeUtils",
    "WAWebChatEntryPoint",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentOneToOneContact",
    "WAWebMsgModelUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")(e.author);
            const n = o("WAWebGroupAgentOneToOneContact").getGroupAgentAwareOneToOneContact(t, o("WAWebFrontendMsgGetters").getChat(e), "private_reply");
            if (n != null) {
                const a = yield o("WAWebFindChatAction").findOrCreateLatestChat(n, "privateReplyToMsg");
                const i = a.chat;
                const l = yield o("WAWebCmd").Cmd.openChatBottom({
                    chat: i,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply
                });
                if (l) {
                    o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(i, {
                        handleMultiple: function() {
                            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                                {
                                    activityType: "groupPrivateReplies",
                                    ts: o("WATimeUtils").unixTime(),
                                    chatId: i.id
                                }
                            ]);
                        }
                    });
                    i.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(e);
                    if (o("WAWebFrontendMsgGetters").getChat(e)) {
                        i.composeQuotedMsgRemoteJid = o("WAWebFrontendMsgGetters").getChat(e).id;
                    }
                }
            }
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);