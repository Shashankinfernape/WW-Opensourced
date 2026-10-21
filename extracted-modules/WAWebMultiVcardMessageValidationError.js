__d("WAWebMultiVcardMessageValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        EMPTY_LIST: "contacts_array_empty_list",
        INVALID_LIST_SIZE: "contacts_array_invalid_list_size"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "MultiVcardMessageValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.MultiVcardValidationErrorCode = e;
    l.MultiVcardMessageValidationError = s;
}, 98);