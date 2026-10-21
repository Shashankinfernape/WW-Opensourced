__d("WAWebQuestionValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_QUOTED_QUESTION: "missing_quoted_question",
        MISSING_QUOTED_RESPONSE: "missing_quoted_response",
        EMPTY_RESPONSE_TEXT: "empty_response_text",
        MISSING_QUESTION_SERVER_ID: "missing_question_server_id"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "QuestionReplyValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.QuestionReplyValidationErrorCode = e;
    l.QuestionReplyValidationError = s;
}, 98);