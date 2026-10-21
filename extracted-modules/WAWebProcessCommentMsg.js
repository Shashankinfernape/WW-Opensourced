__d("WAWebProcessCommentMsg", [
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebCommentMessageValidationError",
    "WAWebHandleMsgValidate",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { encIv, encPayload, targetMessageKey } = e;
            if (encIv == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (encPayload == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (targetMessageKey == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const s = e.author ? e.author : e.id.participant;
            const originalMessageSender = o("WAWebMsgGetters").getOriginalSender(t);
            if (s == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_COMMENT_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (originalMessageSender == null) {
                throw new (o("WAWebCommentMessageValidationError")).CommentMessageValidationError(o("WAWebCommentMessageValidationError").CommentMessageValidationErrorCode.MISSING_ORIGINAL_MESSAGE_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const c = {
                type: o("WAWebMsgType").MsgKind.CommentEncrypted,
                encryptedAddOn: encPayload
            };
            const d = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.CommentEncrypted, t);
            const m = yield o("WAWebAddonEncryption").decryptAddOn(c, {
                messageSecret: d,
                iv: encIv,
                stanzaId: t.id.id,
                originalMessageSender,
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(s)
            });
            const p = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, m);
            const _ = p.messageContextInfo?.messageSecret ?? e.messageSecret;
            const f = babelHelpers.extends({}, e, {
                plainProtobufBytes: new Uint8Array(m)
            });
            if (_ != null) {
                f.messageSecret = new Uint8Array(_);
            }
            yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                renderableMsgs: [
                    f
                ],
                forceDualEncryptedValidation: true
            });
            return p;
        });
        return s.apply(this, arguments);
    }
    l.processEncCommentMsg = e;
}, 98);