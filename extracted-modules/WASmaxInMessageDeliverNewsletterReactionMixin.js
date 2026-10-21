__d("WASmaxInMessageDeliverNewsletterReactionMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeReactionMixin",
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
        const r = o("WASmaxParseUtils").attrString(n.value, "code");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessageDeliverContentTypeReactionMixin").parseContentTypeReactionMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                reactionCode: r.value
            }, a.value));
        }
        return a;
    }
    l.parseNewsletterReactionMixin = e;
}, 98);