__d("WASmaxInWaffleGetCertificateResponseSuccess", [
    "WAResultOrError",
    "WASmaxInWaffleGetCertificateResponseMixin",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "reply");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInWaffleGetCertificateResponseMixin").parseGetCertificateResponseMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInWaffleIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                replyGetCertificateResponseMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseGetCertificateResponseSuccess = e;
}, 98);