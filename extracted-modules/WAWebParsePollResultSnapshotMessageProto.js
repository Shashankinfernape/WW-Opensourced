__d("WAWebParsePollResultSnapshotMessageProto", [
    "WALongInt",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ baseMessage: t, messageProtobuf: n, msgContext: r }) {
        const { pollResultSnapshotMessage: a, pollResultSnapshotMessageV3: i } = n;
        const l = a ?? i;
        if (l) {
            if (i && !o("WAWebNewsletterGatingUtils").isNewsletterQuizReceiverEnabled()) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
                    }),
                    contextInfo: l.contextInfo
                };
            }
            const { contextInfo: s, name: u, pollVotes: c } = l;
            if (u == null) {
                throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.MISSING_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (u.length === 0 || u.length > o("WAWebPollsGatingUtils").MAX_POLL_NAME_LENGTH_FOR_INCOMING_MESSAGES) {
                throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.INVALID_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const d = o("WAWebPollCreationUtils").getPollTypeFromE2EValue(l.pollType);
            if (r === "quoted" || r === "history_quoted") {
                const m = babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
                    kind: o("WAWebMsgType").MsgKind.PollResultSnapshot,
                    pollName: u,
                    pollVotesSnapshot: null,
                    pollType: d
                });
                return {
                    msgData: m,
                    contextInfo: s
                };
            }
            if (c == null || c.length === 0) {
                throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.MISSING_POLL_VOTES, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const p = new Set;
            const _ = c.map(({ optionName: t, optionVoteCount: n })=>{
                if (t == null) {
                    throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.MISSING_OPTION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                if (t.length === 0 || t.length > o("WAWebPollsGatingUtils").MAX_POLL_OPTION_LENGTH_FOR_INCOMING_MESSAGES) {
                    throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.INVALID_OPTION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                if (n == null) {
                    throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.MISSING_OPTION_VOTE_COUNT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                const r = o("WALongInt").maybeNumber(n);
                if (r == null) {
                    throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.INVALID_OPTION_VOTE_COUNT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                if (p.has(t)) {
                    throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.DUPLICATE_OPTIONS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                const a = p.size;
                p.add(t);
                return {
                    option: {
                        localId: a,
                        name: t
                    },
                    optionVoteCount: r
                };
            });
            if (_.length < 2 || _.length > o("WAWebPollsGatingUtils").getMaxPollOptionCount()) {
                throw new (o("WAWebPollsValidationError")).PollResultSnapshotValidationError(o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode.INVALID_POLL_VOTES_SNAPSHOTS_COUNT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const f = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
                kind: o("WAWebMsgType").MsgKind.PollResultSnapshot,
                pollName: u,
                pollVotesSnapshot: {
                    pollVotes: _
                },
                pollType: d
            });
            return {
                msgData: f,
                contextInfo: s
            };
        }
    }
    l.default = e;
}, 98);