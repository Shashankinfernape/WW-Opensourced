__d("WAWebCommentMessageValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_COMMENT_ENC_IV: "comment_missing_enc_iv",
        MISSING_COMMENT_ENC_PAYLOAD: "comment_missing_enc_payload",
        MISSING_COMMENT_MESSAGE_KEY: "comment_missing_target_message_key",
        INVALID_COMMENT_ENC_IV: "comment_invalid_enc_iv",
        MISSING_COMMENT_SENDER: "comment_missing_sender",
        MISSING_MESSAGE_SECRET: "comment_parent_missing_message_secret",
        MISSING_ORIGINAL_MESSAGE_SENDER: "comment_missing_original_message_sender",
        MISSING_COMMENT_CONTENT: "comment_missing_comment_content"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "CommentMessageValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.CommentMessageValidationErrorCode = e;
    l.CommentMessageValidationError = s;
}, 98);