__d("WAWebParseMessageEditEncryptedMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditValidationError",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.secretEncryptedMessage;
        if (!(r == null || r.secretEncType !== o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT) && o("WAWebMessageEditGatingUtils").isMessageEditToMessageSecretReceiverEnabled()) {
            const { encIv: a, encPayload: i, targetMessageKey: l } = r;
            const s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(l, t);
            if (!s) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_TARGET_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
            }
            if (!i) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
            }
            if (!a) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
            }
            const u = new Uint8Array(a);
            if (u.length !== 12) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.INVALID_IV_LENGTH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
                    subtype: "message_edit",
                    kind: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
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