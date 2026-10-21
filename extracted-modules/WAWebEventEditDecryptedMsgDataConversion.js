__d("WAWebEventEditDecryptedMsgDataConversion", [
    "WALongInt",
    "WAWebE2EProtoUtils",
    "WAWebEventsParseEventCreationMessageProto",
    "WAWebEventsValidationError",
    "WAWebMessageEditBotGroupMetadata",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const p = r("nullthrows")(e.protocolMessage, "[Event][Edit] Missing protocol message");
        if (p.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_INVALID_PROTOCOL_MESSAGE_TYPE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.EDIT_TYPE_AND_PROTOCOL_MISMATCH);
        }
        const _ = o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t);
        const f = r("nullthrows")(o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(p.key, _));
        const g = p.editedMessage;
        if (g == null) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_MISSING_EDITED_MESSAGE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const h = o("WALongInt").maybeNumberOrThrowIfTooLarge(p.timestampMs);
        if (h == null) {
            throw new (o("WAWebEventsValidationError")).EncryptedEventEditValidationError(o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode.EVENT_EDIT_MISSING_SENDER_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const y = r("nullthrows")(r("WAWebEventsParseEventCreationMessageProto")({
            messageProtobuf: babelHelpers.extends({}, g, {
                messageContextInfo: {
                    messageSecret: r("nullthrows")(t.messageSecret ?? n).buffer,
                    threadId: []
                }
            }),
            baseMessage: _,
            msgContext: "relay"
        }), "[Event][Edit] Failed to parse edited event fields");
        const C = y.msgData;
        return babelHelpers.extends({}, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message), {
            id: t.id,
            t: Math.floor(r("nullthrows")(h) / 1000),
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            subtype: "event_edit_decrypted",
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
            latestEditSenderTimestampMs: h,
            latestEditMsgKey: t.id,
            protocolMessageKey: f,
            editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
            eventName: r("nullthrows")(C?.eventName),
            eventStartTime: r("nullthrows")(C?.eventStartTime),
            isEventCanceled: C?.isEventCanceled ?? false,
            eventLocation: C?.eventLocation ?? void 0,
            eventDescription: C?.eventDescription ?? void 0,
            eventJoinLink: C?.eventJoinLink ?? void 0,
            eventEndTime: C?.eventEndTime ?? void 0,
            eventIsScheduledCall: C?.eventIsScheduledCall ?? void 0,
            eventExtraGuestsAllowed: C?.eventExtraGuestsAllowed ?? void 0,
            reportingTokenInfo: t.reportingTokenInfo
        }, o("WAWebMessageEditBotGroupMetadata").getReceivedEditBotGroupMetadata(t, e));
    }
    l.protobufToEventEditDecryptedMsgData = e;
}, 98);