__d("WAWebParseEncCommentMessageProto", [
    "WAWebCommentMessageValidationError",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.encCommentMessage;
        if (r != null) {
            const { encIv: a, encPayload: i, targetMessageKey: l } = r;
            if (a == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (i == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(l, t);
            if (s == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (a.byteLength !== 12) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.INVALID_COMMENT_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.COMMENT,
                    kind: o("WAWebMsgType").MsgKind.CommentEncrypted,
                    addonEncrypted: true,
                    encIv: a,
                    encPayload: i,
                    targetMessageKey: s
                }),
                contextInfo: null
            };
        }
    }
    l.default = e;
}, 98);