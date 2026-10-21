__d("WAWebParseMultiVcardMessageProto", [
    "WAWebMsgType",
    "WAWebMultiVcardMessageValidationError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n, msgContext: r }) {
        const a = n.contactsArrayMessage;
        if (a != null) {
            const { contacts: i, contextInfo: l, displayName: s } = a;
            if ((r === "relay" || r === "outgoing") && (i == null || i.length === 0)) {
                throw new (o("WAWebMultiVcardMessageValidationError")).MultiVcardMessageValidationError(o("WAWebMultiVcardMessageValidationError").MultiVcardValidationErrorCode.EMPTY_LIST, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
            }
            const u = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.MULTI_VCARD,
                kind: o("WAWebMsgType").MsgKind.MultiVcard,
                vcardFormattedName: s,
                vcardList: Array.isArray(i) ? i.map((e)=>({
                        displayName: e.displayName,
                        vcard: e.vcard,
                        isMultiVcard: false
                    })) : []
            });
            return {
                msgData: u,
                contextInfo: l
            };
        }
    }
    l.default = e;
}, 98);