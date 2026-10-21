__d("WASmaxInMdCompanionHelloResponseError", [
    "WAResultOrError",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxInMdIqMixinErrors",
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
        const a = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMdIqMixinErrors").parseIqMixinErrors(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorIqMixinErrors: i.value
            }));
        }
        return i;
    }
    l.parseCompanionHelloResponseError = e;
}, 98);