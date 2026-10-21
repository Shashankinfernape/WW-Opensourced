__d("WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersIQErrorResponseMixin",
    "WASmaxInNewslettersIQErrorUnavailableForLegalReasonsGenericMixin",
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
        const a = o("WASmaxInNewslettersIQErrorUnavailableForLegalReasonsGenericMixin").parseIQErrorUnavailableForLegalReasonsGenericMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInNewslettersIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorUnavailableForLegalReasonsGenericMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseUnavailableForLegalReasonsResponseMixin = e;
}, 98);