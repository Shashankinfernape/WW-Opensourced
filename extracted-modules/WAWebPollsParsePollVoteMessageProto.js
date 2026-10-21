__d("WAWebPollsParsePollVoteMessageProto", [
    "WALongInt",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.pollUpdateMessage;
        if (!r) {
            return null;
        }
        const a = r.$$unknownFieldCount;
        const i = a === void 0 ? 0 : a;
        const { metadata: l, pollCreationMessageKey: s, senderTimestampMs: u, vote: c } = r;
        if (i > 0) {
            return null;
        }
        if (s == null) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.MISSING_POLL_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const d = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(s, t);
        if (d == null) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.MISSING_POLL_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (u == null) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.MISSING_SENDER_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (c == null) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.MISSING_UPDATE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const { encIv: m, encPayload: p } = c;
        if (p == null) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.MISSING_VOTE_ENC_PAYLOAD, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (m == null) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.MISSING_VOTE_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (m.byteLength !== 12) {
            throw new (o("WAWebPollsValidationError")).PollUpdateValidationError(o("WAWebPollsValidationError").PollUpdateValidationErrorCode.INVALID_VOTE_ENC_IV, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        return {
            msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
                subtype: "poll_vote",
                addonEncrypted: true,
                pollUpdateParentKey: d,
                encPollVote: {
                    encPayload: p,
                    encIv: m
                },
                senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(u),
                pollUpdateMessageMetadata: o("WAWebPollVoteTCMetadata").pollVoteTCMetadataFromProto(l)
            }),
            contextInfo: null
        };
    }
    l.default = e;
}, 98);