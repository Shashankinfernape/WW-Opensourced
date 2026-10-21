__d("WAWebParentMsgKeyValidation", [
    "$InternalEnum",
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_PARENT_MESSAGE_KEY: "missing_parent_message_key"
    });
    const s = ((e)=>{
        function t(t, n) {
            let r;
            let o = `errorCode: ${String(t)}`;
            if (n != null) {
                o += ` comment: ${n}`;
            }
            r = e.call(this, o) || this;
            r.name = "ParentMsgKeyValidationError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.ParentMsgKeyValidationErrorCode = e;
    l.ParentMsgKeyValidationError = s;
}, 98);