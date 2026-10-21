__d("WAWebParsePinMessageProto", [
    "WALongInt",
    "WAWebAck",
    "WAWebE2EProtoUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgType",
    "WAWebPinInChatValidationError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, editAttr: a, messageProtobuf: i, msgContext: l }) {
        const s = i.pinInChatMessage;
        if (s != null) {
            if (l === "relay" && a !== o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT) {
                throw new (o("WAWebPinInChatValidationError")).PinInChatValidationError(o("WAWebPinInChatValidationError").PinInChatValidationErrorCode.INVALID_EDIT_ATTR, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const u = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(s.key, n);
            if (u == null) {
                throw new (o("WAWebPinInChatValidationError")).PinInChatValidationError(o("WAWebPinInChatValidationError").PinInChatValidationErrorCode.MISSING_PARENT_MSG_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (!r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(u.remote, n.id.remote)) && !u.remote.isBroadcast()) {
                throw new (o("WAWebPinInChatValidationError")).PinInChatValidationError(o("WAWebPinInChatValidationError").PinInChatValidationErrorCode.INVALID_PIN_IN_CHAT_MSG_REMOTE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const c = i.messageContextInfo?.messageAddOnDurationInSecs;
            if (c != null && c < 0) {
                throw new (o("WAWebPinInChatValidationError")).PinInChatValidationError(o("WAWebPinInChatValidationError").PinInChatValidationErrorCode.INVALID_PIN_IN_CHAT_EXPIRY_DURATION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const d = s.type;
            if (d == null) {
                throw new (o("WAWebPinInChatValidationError")).PinInChatValidationError(o("WAWebPinInChatValidationError").PinInChatValidationErrorCode.MISSING_TYPE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const m = o("WALongInt").maybeNumberOrThrowIfTooLarge(s.senderTimestampMs);
            if (m == null) {
                throw new (o("WAWebPinInChatValidationError")).PinInChatValidationError(o("WAWebPinInChatValidationError").PinInChatValidationErrorCode.MISSING_SENDER_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const p = babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
                kind: o("WAWebMsgType").MsgKind.PinInChat,
                pinParentKey: u,
                pinMessageType: d,
                pinSenderTimestampMs: m,
                pinExpiryDuration: c
            });
            return {
                msgData: p,
                contextInfo: null
            };
        }
    }
    l.default = e;
}, 98);