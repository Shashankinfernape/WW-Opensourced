__d("WASmaxInPreKeysFetchKeyBundlesResponseRequestError", [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysRequestErrorsFetch",
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
        const i = o("WASmaxInPreKeysRequestErrorsFetch").parseRequestErrorsFetch(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorRequestErrorsFetch: i.value
            }));
        }
        return i;
    }
    l.parseFetchKeyBundlesResponseRequestError = e;
}, 98);