__d("WAWebCommentToCommentMsgData", [
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return babelHelpers.extends({
            id: e.id
        }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(e.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
            type: o("WAWebMsgType").MSG_TYPE.COMMENT,
            kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            parentMsgKey: e.parentMsgKey,
            body: e.body,
            t: e.t,
            read: e.read,
            ack: e.ack ?? undefined,
            messageSecret: e.messageSecret
        });
    }
    l.commentToCommentMsgData = e;
}, 98);