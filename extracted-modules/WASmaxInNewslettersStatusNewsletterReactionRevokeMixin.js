__d("WASmaxInNewslettersStatusNewsletterReactionRevokeMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersStatusContentTypeReactionMixin",
    "WASmaxInNewslettersStatusRevokeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersStatusRevokeMixin").parseStatusRevokeMixin(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersStatusContentTypeReactionMixin").parseStatusContentTypeReactionMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, a.value));
        }
        return a;
    }
    l.parseStatusNewsletterReactionRevokeMixin = e;
}, 98);