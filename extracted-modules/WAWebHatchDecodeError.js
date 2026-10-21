__d("WAWebHatchDecodeError", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum")({
        PARSE_FAILURE: "hatch_metadata_parse_failure",
        INVALID_VERSION: "hatch_metadata_invalid_version",
        INVALID_PAYLOAD: "hatch_metadata_invalid_payload",
        INVALID_OP_KEY: "hatch_metadata_invalid_op_key",
        INVALID_STATUS: "hatch_metadata_invalid_status"
    });
    const l = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `HatchDecodeError: ${String(t)}`) || this;
            n.reason = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    i.HatchDecodeReason = e;
    i.HatchDecodeError = l;
}, 66);