__d("WAWebSendCommentMessageActionUtils", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommentUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, conversation) {
            return o("WAWebCommentUtils").getEncCommentsFields(e, t, {
                conversation
            });
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            return o("WAWebCommentUtils").getEncCommentsFields(e, t, {
                extendedTextMessage: {
                    text: n,
                    endCardTiles: []
                }
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return babelHelpers.extends({
                id: t
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
                type: o("WAWebMsgType").MSG_TYPE.COMMENT,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.CommentEncrypted,
                t: o("WATimeUtils").unixTime(),
                addonEncrypted: true,
                ack: o("WAWebAck").ACK.CLOCK
            }, e, {
                messageSecret: self.crypto.getRandomValues(new Uint8Array(32))
            });
        });
        return m.apply(this, arguments);
    }
    function p({ msgKey, parentMsgKey, text }) {
        return babelHelpers.extends({
            id: msgKey
        }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(msgKey, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
            type: o("WAWebMsgType").MSG_TYPE.COMMENT,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
            t: o("WATimeUtils").unixTime(),
            ack: o("WAWebAck").ACK.CLOCK,
            parentMsgKey,
            body: text,
            read: true,
            messageSecret: self.crypto.getRandomValues(new Uint8Array(32))
        });
    }
    l.encryptConversationComment = e;
    l.encryptExtendedTextComment = u;
    l.createCommentMsgData = d;
    l.createCommentDecryptedMsgData = p;
}, 98);