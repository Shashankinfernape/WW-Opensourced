__d("WAWebReactionsParseReactionMessageProto", [
    "WALongInt",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebReactionsBEUtils",
    "WAWebReactionsValidationError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    const e = 30;
    function s({ baseMessage: t, messageProtobuf: n }) {
        const r = n.reactionMessage;
        if (r != null) {
            const a = u(r);
            const i = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(r.key, t);
            const l = o("WALongInt").maybeNumberOrThrowIfTooLarge(r.senderTimestampMs);
            if (i == null) {
                throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.MISSING_PARENT_MSG_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (l == null) {
                throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.MISSING_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.REACTION,
                    kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                    reactionParentKey: i,
                    reactionText: a,
                    reactionTimestamp: l,
                    read: false
                }),
                contextInfo: null
            };
        }
    }
    function u({ text: r }) {
        if (r != null && r.length > e) {
            throw new (o("WAWebReactionsValidationError")).ReactionValidationError(o("WAWebReactionsValidationError").ReactionValidationErrorCode.INVALID_REACTION_TEXT_LENGTH, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_REACTION_TEXT);
        }
        return o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(r) ?? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
    }
    l.default = s;
}, 98);