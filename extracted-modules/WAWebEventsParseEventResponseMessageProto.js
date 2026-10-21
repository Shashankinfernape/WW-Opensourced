__d("WAWebEventsParseEventResponseMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebEventsValidationError",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.encEventResponseMessage;
        if (r == null) {
            return null;
        }
        const { encIv: a, encPayload: i, eventCreationMessageKey: l } = r;
        const s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(l, t);
        if (s == null) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_MISSING_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (a == null) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (a.byteLength !== 12) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_INVALID_SIZE_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (i == null) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventResponseValidationError(o("WAWebEventsValidationError").EncryptedEventResponseValidationErrorCode.EVENT_RESPONSE_MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        return {
            msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.EventResponseEncrypted,
                addonEncrypted: true,
                encIv: a,
                encPayload: i,
                targetMessageKey: s
            }),
            contextInfo: null
        };
    }
    l.default = e;
}, 98);