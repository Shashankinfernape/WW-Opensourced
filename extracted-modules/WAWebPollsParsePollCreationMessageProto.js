__d("WAWebPollsParsePollCreationMessageProto", [
    "WALongInt",
    "WAWebIsPhotoPollReceiverEnabled",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebNewsletterQuizOptionShuffler",
    "WAWebPollCreationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType",
    "compactMap",
    "isStringNullOrEmpty",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: l, messageProtobuf: s, msgContext: u }) {
        const { pollCreationMessage: c, pollCreationMessageV2: d, pollCreationMessageV3: m, pollCreationMessageV5: p, pollCreationMessageV6: _ } = s;
        const f = c ?? d ?? m ?? p ?? _;
        const g = r("WAWebNewsletterIsNewsletterMsg")(l);
        const h = !g;
        if (f == null) {
            return null;
        }
        const { contextInfo: y, correctAnswer: C, name: b, options: v, selectableOptionsCount: S } = f;
        const R = o("WAWebPollCreationUtils").getPollContentTypeFromE2EValue(f.pollContentType);
        const L = o("WAWebPollCreationUtils").getPollTypeFromE2EValue(f.pollType);
        const E = R === o("WAWebPollCreationUtils").PollContentType.IMAGE;
        const k = o("WALongInt").maybeNumber(f.endTime);
        const I = f.hideParticipantName != null;
        const T = f.allowAddOption != null;
        const D = k != null || I || T;
        if (D) {
            const x = k != null && !o("WAWebPollsGatingUtils").isPollEndTimeReceivingEnabled();
            const $ = I && !o("WAWebPollsGatingUtils").isPollHideVotersReceivingEnabled();
            const P = T && !o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled();
            if (x || $ || P) {
                return {
                    msgData: babelHelpers.extends({}, l, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION
                    }),
                    contextInfo: y
                };
            }
        }
        if (E && !o("WAWebIsPhotoPollReceiverEnabled").isPhotoPollReceiverEnabled(l)) {
            return {
                msgData: babelHelpers.extends({}, l, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION
                }),
                contextInfo: y
            };
        }
        if (b == null) {
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.MISSING_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (b.length === 0 || b.length > o("WAWebPollsGatingUtils").MAX_POLL_NAME_LENGTH_FOR_INCOMING_MESSAGES) {
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.INVALID_NAME, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (u === "quoted" || u === "history_quoted") {
            const N = babelHelpers.extends({}, l, {
                type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
                kind: o("WAWebMsgType").MsgKind.PollCreation,
                pollName: b,
                pollOptions: null,
                pollSelectableOptionsCount: null,
                pollContentType: R,
                pollType: L
            });
            return {
                msgData: N,
                contextInfo: y
            };
        }
        const M = s.messageContextInfo?.messageSecret;
        if (h && M == null) {
            new (o("WAWebMessageSecretErrorsWamEvent")).MessageSecretErrorsWamEvent({
                messageSecretAllowedList: o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
                messageSecretError: o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET
            }).commit();
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.MISSING_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET);
        }
        if (h && M?.byteLength !== 32) {
            new (o("WAWebMessageSecretErrorsWamEvent")).MessageSecretErrorsWamEvent({
                messageSecretAllowedList: o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
                messageSecretError: o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.WRONG_LENGTH
            }).commit();
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.INVALID_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
        }
        if (v.length === 0) {
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.MISSING_OPTIONS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (S == null) {
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.MISSING_SELECTABLE_OPTIONS_COUNT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const w = new Set;
        const A = new Set;
        let F;
        const O = o("WAWebNewsletterQuizOptionShuffler").applyViewerQuizOptionOrder(v, {
            isFromMe: l.id.fromMe,
            isNewsletter: g,
            isQuiz: L === o("WAWebPollCreationUtils").PollType.QUIZ,
            stanzaId: l.id.id
        });
        const B = r("compactMap")(O, function({ optionHash: t, optionName: n }) {
            if (n == null || n.length === 0 || n.length > o("WAWebPollsGatingUtils").MAX_POLL_OPTION_LENGTH_FOR_INCOMING_MESSAGES) {
                throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.INVALID_OPTION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (w.has(n)) {
                throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.DUPLICATE_OPTIONS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (E) {
                if (r("isStringNullOrEmpty")(t)) {
                    throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.INVALID_OPTION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                if (A.has(t)) {
                    throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.DUPLICATE_OPTIONS, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                A.add(t);
            }
            const a = w.size;
            w.add(n);
            if (C?.optionName === n) {
                F = a;
            }
            if (E) {
                return {
                    name: n,
                    hash: o("WAWebPollOptionHashUtils").createOptionHashHexFromString(r("nullthrows")(t)),
                    localId: a
                };
            }
            return {
                name: n,
                localId: a
            };
        });
        if (B.length < 2 || B.length > o("WAWebPollsGatingUtils").getMaxPollOptionCount()) {
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.INVALID_OPTIONS_COUNT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (S < 0 || S > B.length) {
            throw new (o("WAWebPollsValidationError")).PollCreationValidationError(o("WAWebPollsValidationError").PollCreationValidationErrorCode.INVALID_SELECTABLE_OPTIONS_COUNT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const W = babelHelpers.extends({}, l, {
            type: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
            kind: o("WAWebMsgType").MsgKind.PollCreation,
            pollName: b,
            pollOptions: B,
            pollSelectableOptionsCount: S,
            pollContentType: R,
            pollType: L,
            correctOptionIndex: F,
            pollEndTime: k,
            pollHideVoterNames: f.hideParticipantName,
            pollAllowAddOption: f.allowAddOption
        });
        return {
            msgData: W,
            contextInfo: y
        };
    }
    l.default = e;
}, 98);