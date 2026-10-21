__d("WASmaxInMdGetPasskeyRequestOptionsResponseError", [
    "WAResultOrError",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMdIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorInternalServerErrorMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseGetPasskeyRequestOptionsResponseError = e;
}, 98);