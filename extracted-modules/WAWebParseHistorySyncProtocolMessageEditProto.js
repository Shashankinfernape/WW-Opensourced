__d("WAWebParseHistorySyncProtocolMessageEditProto", [
    "WALogger",
    "WALongInt",
    "WAWebE2EProtoParser",
    "WAWebMessageEditValidationError",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: n, messageProtobuf: a, msgContext: i }) {
        const l = a.protocolMessage;
        if (!(l == null || l?.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) && !(i !== "history" && i !== "history_quoted")) {
            try {
                const d = babelHelpers.extends({}, n, {
                    latestEditSenderTimestampMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(l.timestampMs),
                    latestEditMsgKey: n.id
                });
                const m = l.editedMessage;
                if (m == null) {
                    throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_EDITED_MESSAGE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                const p = l.key;
                if (p == null) {
                    throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_PROTOCOL_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                const _ = a.messageContextInfo?.messageAssociation;
                const f = m.messageContextInfo;
                const g = _ == null ? m : babelHelpers.extends({}, m, {
                    messageContextInfo: babelHelpers.extends({}, f, {
                        messageAssociation: f?.messageAssociation ?? _,
                        threadId: f?.threadId ?? []
                    })
                });
                Object.assign(d, o("WAWebE2EProtoParser").parseMsgProto({
                    messageProtobuf: g,
                    message: d,
                    msgContext: i
                }));
                d.id = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(p, d.author);
                return {
                    msgData: d,
                    contextInfo: null
                };
            } catch (t) {
                const h = r("getErrorSafe")(t);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseHistorySyncEditedMessageProto] err=",
                    " msg=",
                    " stack=",
                    ""
                ])), h.name, h.message, h.stack).tags("messaging").sendLogs("parseHistorySyncEditedMessageProto: EditParseError");
                throw h;
            }
        }
    }
    l.default = s;
}, 98);