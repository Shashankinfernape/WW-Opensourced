__d("WASmaxInNewslettersStatusNewsletterTextMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterPlaintextPayloadMixin",
    "WASmaxInNewslettersStatusContentTypeTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersNewsletterPlaintextPayloadMixin").parseNewsletterPlaintextPayloadMixin(n.value);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersStatusContentTypeTextMixin").parseStatusContentTypeTextMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                plaintextNewsletterPlaintextPayloadMixin: r.value
            }, a.value));
        }
        return a;
    }
    l.parseStatusNewsletterTextMixin = e;
}, 98);