__d("WAWebReactionsValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        INVALID_REACTION_TEXT_LENGTH: "reaction_invalid_text_length",
        MISSING_PARENT_MSG_KEY: "reaction_missing_parent_msg_key",
        MISSING_TIMESTAMP: "reaction_missing_timestamp"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "ReactionValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.ReactionValidationErrorCode = e;
    l.ReactionValidationError = s;
}, 98);