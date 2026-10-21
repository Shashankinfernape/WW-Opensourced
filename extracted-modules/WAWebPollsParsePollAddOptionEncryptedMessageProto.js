__d("WAWebPollsParsePollAddOptionEncryptedMessageProto", [
    "WAWebAssociationProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationValidation",
    "WAWebMsgType",
    "WAWebPollAddOptionAssociationProcessor",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageAssociation: n, messageProtobuf: r, msgContext: a }) {
        const i = r.secretEncryptedMessage;
        if (!(i == null || i.secretEncType !== o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_ADD_OPTION)) {
            const { encIv: l, encPayload: u, targetMessageKey: c } = i;
            const d = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(c, t);
            if (d == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_TARGET_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (l == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (l.byteLength !== 12) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.INVALID_SIZE_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (u == null) {
                throw new (o("WAWebPollsValidationError")).PollAddOptionValidationError(o("WAWebPollsValidationError").PollAddOptionValidationErrorCode.MISSING_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const m = s({
                baseMessage: t,
                messageAssociation: n,
                msgContext: a,
                pollCreationMessageKey: d
            });
            const { associationParentMsgKey: p, associationType: _, viewMode: f } = m;
            if (_ !== o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION) {
                throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.INVALID_ASSOCIATION_TYPE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const g = {
                encIv: l,
                encPayload: u,
                targetMessageKey: d,
                parentMsgKey: p,
                associationType: _,
                viewMode: f
            };
            if (o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled()) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
                        kind: o("WAWebMsgType").MsgKind.PollAddOptionEncrypted
                    }, g),
                    contextInfo: null
                };
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.AssociatedUnknown,
                    futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED
                }, g),
                contextInfo: null
            };
        }
    }
    function s({ baseMessage: t, messageAssociation: n, msgContext: a, pollCreationMessageKey: i }) {
        if (n == null) {
            return {
                associationParentMsgKey: i,
                associationType: o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION,
                viewMode: r("WAWebPollAddOptionAssociationProcessor").viewMode
            };
        }
        return o("WAWebAssociationProtoUtils").getValidatedAssociationFieldsFromProto(n, t, a);
    }
    l.default = e;
}, 98);