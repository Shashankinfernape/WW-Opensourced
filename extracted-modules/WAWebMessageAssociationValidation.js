__d("WAWebMessageAssociationValidation", [
    "$InternalEnum",
    "WACustomError",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_PARENT_MESSAGE_KEY: "missing_parent_message_key",
        INVALID_PARENT_MESSAGE_KEY: "invalid_parent_message_key",
        MISSING_ASSOCIATION_TYPE: "missing_association_type",
        MISMATCH_SENDER: "mismatch_sender",
        UNSUPPORTED_ASSOCIATION_TYPE: "unsupported_association_type",
        INVALID_CHILD_MESSAGE: "invalid_child_message",
        INVALID_ASSOCIATION_TYPE: "invalid_association_type"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "MessageAssociationValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    const u = n("$InternalEnum")({
        MESSAGE_ASSOCIATIONS_MISMATCH: "message_associations_mismatch"
    });
    const c = ((e)=>{
        function t(t, n) {
            let r;
            let o = `errorCode: ${String(t)}`;
            if (n != null) {
                o += ` comment: ${n}`;
            }
            r = e.call(this, o) || this;
            r.name = "MessageAssociationInfraError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.MessageAssociationValidationErrorCode = e;
    l.MessageAssociationValidationError = s;
    l.MessageAssociationInfraErrorCode = u;
    l.MessageAssociationInfraError = c;
}, 98);