__d("WAWebBizAIMetadataSyncValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        UNEXPECTED_SENDER: "biz_ai_metadata_sync_unexpected_sender"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "BizAIMetadataSyncValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.BizAIMetadataSyncValidationCode = e;
    l.BizAIMetadataSyncValidationError = s;
}, 98);