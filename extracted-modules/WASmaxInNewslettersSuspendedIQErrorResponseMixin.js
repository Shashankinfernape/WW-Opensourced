__d("WASmaxInNewslettersSuspendedIQErrorResponseMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersIQErrorLockedMixin",
    "WASmaxInNewslettersIQErrorResponseMixin",
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
        const a = o("WASmaxInNewslettersIQErrorLockedMixin").parseIQErrorLockedMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInNewslettersIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorLockedMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseSuspendedIQErrorResponseMixin = e;
}, 98);