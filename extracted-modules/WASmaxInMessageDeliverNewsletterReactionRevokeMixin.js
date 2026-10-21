__d("WASmaxInMessageDeliverNewsletterReactionRevokeMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeReactionMixin",
    "WASmaxInMessageDeliverRevokeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessageDeliverContentTypeReactionMixin").parseContentTypeReactionMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, a.value));
        }
        return a;
    }
    l.parseNewsletterReactionRevokeMixin = e;
}, 98);