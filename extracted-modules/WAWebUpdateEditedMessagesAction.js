__d("WAWebUpdateEditedMessagesAction", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiChat",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatMessageSearch",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebFrontendMsgGetters",
    "WAWebGroupUnreadMessageType",
    "WAWebHatchAboutManager",
    "WAWebHatchFrontendGating",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoCollection",
    "WAWebMsgNotification",
    "WAWebMsgType",
    "WAWebMuteGetters",
    "WAWebNotificationController",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(chat, msg) {
        const unreadEditTimestampMs = o("WATimeUtils").unixTimeMs();
        chat.unreadEditTimestampMs = unreadEditTimestampMs;
        const r = o("WAWebThreadMsgUtils").getMsgAiThread(msg);
        if (r != null) {
            const i = chat.aiThreads?.get(r);
            if (i != null) {
                i.set({
                    unreadEditTimestampMs
                });
            }
        }
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield (d || (d = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        yield f(e);
                    } catch (error) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-edit] failed to apply edit for ",
                            ""
                        ])), e.parentMsg.id.toString()).catching(r("getErrorSafe")(error)).sendLogs("update-edited-message-failed");
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            o("WAWebMsgCollection").MsgCollection.processEditedMessages(e.map(({ parentMsg })=>o("WAWebMsgCollection").MsgCollection.get(parentMsg.id)));
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ editedMsgData, mentionOfMe, parentMsg, protocolMsg }) {
            const l = o("WAWebMsgCollection").MsgCollection.get(parentMsg.id);
            if (l) {
                const s = editedMsgData.mediaKey !== l.mediaKey;
                if (s) {
                    l.thumbnailHQ = "";
                }
                if (o("WAWebBotGating").shouldAnimateAsBotStream(l) || l.botEditType != null) {
                    editedMsgData.lastBotEditBodyLength = o("WAWebBotFrontendUtils").getBotMsgBodyLength(l);
                }
                const u = new (o("WAWebMsgNotification")).WAMsgNotification({
                    msg: l
                }).buildKey();
                if (parentMsg.type === o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA && editedMsgData.type !== o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA) {
                    yield l.registerAndPrepMedia(editedMsgData);
                }
                const c = h(l, editedMsgData.viewMode);
                l.set(editedMsgData);
                y(c);
                const d = editedMsgData.unifiedResponse;
                if (o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() && o("WAWebBotUtils").isHatchBot(parentMsg.id.remote) && d != null) {
                    const m = parentMsg.id.remote.toString();
                    if (editedMsgData.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST || editedMsgData.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER) {
                        r("WAWebHatchAboutManager").feedUnifiedResponse(m, d);
                    } else if (editedMsgData.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST) {
                        r("WAWebHatchAboutManager").clearAboutText(m);
                    }
                }
                const p = o("WAWebFrontendMsgGetters").getMaybeChat(l);
                if (p != null) {
                    o("WAWebChatMessageSearch").clearFtsCache(p);
                    C(l, p, u, mentionOfMe);
                    b({
                        chat: p,
                        mentionOfMe,
                        msg: l,
                        protocolMsg
                    });
                }
                l.clearRawLinks();
                l.clearRawPhoneNumbers();
                const _ = o("WAWebMsgCollection").MsgCollection.get(protocolMsg.id);
                if (_ && _.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                    _.delete();
                }
                o("WAWebMsgInfoCollection").MsgInfoCollection.remove(l.id);
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, viewMode) {
        const n = o("WAWebFrontendMsgGetters").getMaybeChat(e);
        if (n == null || viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN) {
            return null;
        }
        return {
            chat: n,
            isActiveUnread: n.isActiveUnreadMsg(e),
            isUnread: n.isUnreadMsg(e)
        };
    }
    function y(t) {
        if (t != null) {
            const { chat, isActiveUnread, isUnread } = t;
            if (isUnread) {
                chat.unreadCount = Math.max(chat.unreadCount - 1, 0);
                o("WAWebApiChat").reduceChatUnreadCount(chat.id.toString(), 1, false).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-edit] failed to reduce unread count for hidden msg"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("update-edited-message-hidden-unread-failed");
                });
            }
            if (isActiveUnread) {
                chat.activeUnreadCount = Math.max(chat.activeUnreadCount - 1, 0);
            }
        }
    }
    function C(e, t, n, mentionOfMe) {
        const i = o("WAWebNotificationController").WANotificationController.getNotification(n);
        const l = new (o("WAWebMsgNotification")).WAMsgNotification({
            msg: e
        });
        if (i && o("WAWebMsgGetters").getIsMetaBotResponse(e)) {
            if (e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST) {
                o("WAWebNotificationController").WANotificationController.triggerNotification(l);
            }
            return;
        }
        if (i) {
            o("WAWebNotificationController").WANotificationController.triggerNotification(l).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] failed to trigger notification for edited msg"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("update-edited-message-notification-failed");
            });
        }
        if (o("WAWebMuteGetters").getIsMuted(t.mute) && mentionOfMe != null) {
            switch(mentionOfMe){
                case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
                    if (t.isUnreadMsg(e)) {
                        o("WAWebNotificationController").WANotificationController.triggerNotification(l).catch((e)=>{
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[message-edit] failed to trigger notification for added mention of me"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("update-edited-message-mention-notification-failed");
                        });
                    }
                    break;
                case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
                    i?.closeBanner();
                    break;
            }
        }
    }
    function b({ chat, mentionOfMe, msg, protocolMsg }) {
        if (!o("WAWebMsgGetters").getIsSentByMe(protocolMsg)) {
            m(chat, msg);
        }
        if (mentionOfMe != null) {
            v(chat, msg, mentionOfMe);
        }
    }
    function v(chat, msg, mentionOfMe) {
        switch(mentionOfMe){
            case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Added:
                if (chat.isUnreadMsg(msg)) {
                    const a = new (r("WAWebUnreadMentionModel"))({
                        id: msg.id,
                        timestamp: msg.latestEditSenderTimestampMs
                    });
                    chat.unreadMentionMetadata.addUnreadMentions([
                        a
                    ], o("WAWebGroupUnreadMessageType").UnreadMessageType.NEW_MESSAGE);
                }
                break;
            case o("WAWebDBProcessEditProtocolMsgs").EditedMentionOfMe.Removed:
                chat.unreadMentionMetadata.removeUnreadMentions(msg.id.toString());
                break;
        }
    }
    l.updateEditedMessagesAction = p;
}, 98);