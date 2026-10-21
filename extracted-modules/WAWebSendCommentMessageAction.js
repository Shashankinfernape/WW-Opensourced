__d("WAWebSendCommentMessageAction", [
    "WAWebAddonDBTable",
    "WAWebAddonSendMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendCommentMessageActionUtils",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const a = o("WAWebFrontendMsgGetters").getChat(e);
            const i = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: a.id,
                participant: n,
                fromMe: true
            });
            const l = o("WAWebSendCommentMessageActionUtils").createCommentDecryptedMsgData({
                parentMsgKey: e.id,
                msgKey: i,
                text: t
            });
            const s = o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit({
                body: t,
                type: o("WAWebMsgType").MSG_TYPE.COMMENT
            }, a.id);
            let u;
            if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(l)) {
                u = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(l);
            } else {
                const c = yield o("WAWebSendCommentMessageActionUtils").createCommentMsgData((yield o("WAWebSendCommentMessageActionUtils").encryptExtendedTextComment(o("WAWebMsgDataFromModel").msgDataFromMsgModel(e), n, t)), i);
                u = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(c);
            }
            if (u.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                if (s != null) {
                    s();
                }
            }
            return u;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebAddonDBTable").addonDBTable.getByMsgKey(o("WAWebMsgType").MSG_TYPE.COMMENT, e.id);
            if (t != null) {
                yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(t);
            }
        });
        return c.apply(this, arguments);
    }
    l.sendCommentMessage = e;
    l.resendComment = u;
}, 98);