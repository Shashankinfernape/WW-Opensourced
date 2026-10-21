__d("WAWebRichResponseValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        INVALID_MESSAGE_TYPE: "rich_response_invalid_name",
        MISSING_MESSAGE_TYPE: "rich_response_missing_message_type",
        INVALID_SENDER: "rich_response_invalid_sender"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "RichResponseValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.RichResponseValidationErrorCode = e;
    l.RichResponseValidationError = s;
}, 98);