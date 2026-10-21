__d("WASmaxInNewslettersStatusNewsletterRevokeMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersStatusAdminRevokeMixin",
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
        const r = o("WASmaxInNewslettersStatusAdminRevokeMixin").parseStatusAdminRevokeMixin(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersStatusContentTypeTextMixin").parseStatusContentTypeTextMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, a.value));
        }
        return a;
    }
    l.parseStatusNewsletterRevokeMixin = e;
}, 98);