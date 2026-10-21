__d("WASmaxInMdGetPasskeyRequestOptionsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxInMdPasskeyRequestOptionsMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "passkey_request_options");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMdPasskeyRequestOptionsMixin").parsePasskeyRequestOptionsMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                passkeyRequestOptionsPasskeyRequestOptionsMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseGetPasskeyRequestOptionsResponseSuccess = e;
}, 98);