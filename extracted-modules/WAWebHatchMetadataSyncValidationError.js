__d("WAWebHatchMetadataSyncValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        UNEXPECTED_SENDER: "hatch_metadata_unexpected_sender",
        EMPTY_PAYLOAD: "hatch_metadata_empty_payload",
        UNHANDLED_CONTROL: "hatch_metadata_unhandled_control",
        DECODE_FAILURE: "hatch_metadata_decode_failure",
        UNEXPECTED_DECODE_FAILURE: "hatch_metadata_unexpected_decode_failure"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "HatchMetadataSyncValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.HatchMetadataSyncValidationCode = e;
    l.HatchMetadataSyncValidationError = s;
}, 98);