__d("WAWebPollsParsePollEditEncryptedMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.secretEncryptedMessage;
        if (!(r == null || r.secretEncType !== o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT)) {
            const { encIv: a, encPayload: i, targetMessageKey: l } = r;
            const s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(l, t);
            if (s == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_TARGET_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (a == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (a.byteLength !== 12) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.INVALID_SIZE_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (i == null) {
                throw new (o("WAWebPollsValidationError")).PollEditValidationError(o("WAWebPollsValidationError").PollEditValidationErrorCode.MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (o("WAWebPollsGatingUtils").isPollCreatorEditReceivingEnabled()) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED,
                        kind: o("WAWebMsgType").MsgKind.PollEditEncrypted,
                        encIv: a,
                        encPayload: i,
                        targetMessageKey: s
                    }),
                    contextInfo: null
                };
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED
                }),
                contextInfo: null
            };
        }
    }
    l.default = e;
}, 98);