__d("WASmaxInPreKeysAddResponseRequestError", [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysRequestErrors",
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
        const a = o("WASmaxInPreKeysIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPreKeysRequestErrors").parseRequestErrors(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorRequestErrors: i.value
            }));
        }
        return i;
    }
    l.parseAddResponseRequestError = e;
}, 98);