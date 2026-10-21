__d("WAWebAddonInfraError", [
    "$InternalEnum",
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        UnexpectedError: "unexpected_error",
        NotSupportedFeature: "not_supported_feature",
        NotSupportedMsgType: "not_supported_msg_type",
        UnexpectedMsgType: "unexpected_msg_type",
        InvalidParentMsgKey: "invalid_parent_msg_key",
        MissingParentMsg: "missing_parent_msg"
    });
    const s = ((e)=>{
        function t(t, n) {
            let r;
            let o = `errorCode: ${String(t)}`;
            if (n != null) {
                o += ` comment: ${n}`;
            }
            r = e.call(this, o) || this;
            r.name = "AddonInfraError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.AddonInfraErrorCode = e;
    l.AddonInfraError = s;
}, 98);