__d("WAWebQuestionsProtoUtils", [
    "WALogger",
    "WAWebE2EProtoParser",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebQuestionValidationError",
    "WAWebQuestionsGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s({ message, questionReplyQuotedMessage }) {
        const questionReplyQuotedMessage_quotedQuestion = questionReplyQuotedMessage.quotedQuestion;
        if (questionReplyQuotedMessage_quotedQuestion == null) {
            throw new (o("WAWebQuestionValidationError")).QuestionReplyValidationError(o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode.MISSING_QUOTED_QUESTION, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const quotedQuestion = o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: questionReplyQuotedMessage_quotedQuestion,
            msgContext: "quoted",
            message
        });
        const s = questionReplyQuotedMessage.quotedResponse?.questionResponseMessage;
        const c = u(s?.key);
        if (!s || !c) {
            throw new (o("WAWebQuestionValidationError")).QuestionReplyValidationError(o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode.MISSING_QUOTED_RESPONSE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        if (r("isStringNullOrEmpty")(s.text)) {
            throw new (o("WAWebQuestionValidationError")).QuestionReplyValidationError(o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode.EMPTY_RESPONSE_TEXT, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        const questionReplyQuotedMessage_serverQuestionId = questionReplyQuotedMessage.serverQuestionId;
        if (questionReplyQuotedMessage_serverQuestionId == null) {
            throw new (o("WAWebQuestionValidationError")).QuestionReplyValidationError(o("WAWebQuestionValidationError").QuestionReplyValidationErrorCode.MISSING_QUESTION_SERVER_ID, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        return {
            quotedQuestion,
            questionServerId: questionReplyQuotedMessage_serverQuestionId,
            quotedResponse: {
                id: c,
                type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
                body: s.text,
                from: quotedQuestion.from,
                to: quotedQuestion.to,
                parentMsgKey: quotedQuestion.id,
                parentServerId: questionReplyQuotedMessage_serverQuestionId,
                questionResponseInfo: {
                    starred: false
                },
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
            }
        };
    }
    function u(e) {
        if (!(e?.id == null || e.remoteJid == null)) {
            return new (r("WAWebMsgKey"))({
                id: e.id,
                fromMe: e.fromMe ?? false,
                remote: o("WAWebWidFactory").createWid(e.remoteJid)
            });
        }
    }
    function c(t, questionReplyQuotedMessage) {
        if (questionReplyQuotedMessage) {
            try {
                t.questionReplyQuotedMessage = s({
                    questionReplyQuotedMessage,
                    message: {
                        from: t.from,
                        to: t.to,
                        id: babelHelpers.extends({}, t.id, {
                            id: `${t.id.id}_quoted_question`
                        }),
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                        count: null
                    }
                });
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[questions][replies] Invalid question reply quoted message"
                ]))).tags("questions", "replies").sendLogs("questions-invalid-question-reply-quoted-msg");
            }
        }
    }
    function d(e) {
        if (!r("WAWebNewsletterIsNewsletterMsg")(e.msgData)) {
            return false;
        }
        const a = e.contextInfo?.isQuestion === true && !o("WAWebQuestionsGatingUtils").isQuestionReceiverEnabledForMsg(e.msgData);
        const i = e.contextInfo?.questionReplyQuotedMessage != null && !o("WAWebQuestionsGatingUtils").isQuestionReplyReceiverEnabledForMsg(e.msgData);
        return a || i;
    }
    l.getValidatedQuestionReplyQuotedMessage = s;
    l.maybeAddQuestionReplyQuotedMessage = c;
    l.shouldFutureProofQuestionMessage = d;
}, 98);