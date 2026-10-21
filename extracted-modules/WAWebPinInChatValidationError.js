__d("WAWebPinInChatValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        INVALID_PIN_IN_CHAT_EXPIRY_DURATION: "pin_in_chat_invalid_expiry_duration",
        INVALID_PIN_IN_CHAT_MSG_REMOTE: "pin_in_chat_invalid_msg_remote",
        MISSING_PARENT_MSG_KEY: "pin_in_chat_missing_parent_msg_key",
        MISSING_TYPE: "pin_in_chat_missing_type",
        MISSING_SENDER_TIMESTAMP: "pin_in_chat_missing_timestamp",
        INVALID_EDIT_ATTR: "invalid_edit_attr"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "PinInChatValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.PinInChatValidationErrorCode = e;
    l.PinInChatValidationError = s;
}, 98);