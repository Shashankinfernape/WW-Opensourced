__d("WASmaxInStatusDeliverStatusNewsletterReactionMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusContentTypeReactionMixin",
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
        const r = o("WASmaxParseUtils").attrString(n.value, "code");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInStatusDeliverStatusContentTypeReactionMixin").parseStatusContentTypeReactionMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                reactionCode: r.value
            }, a.value));
        }
        return a;
    }
    l.parseStatusNewsletterReactionMixin = e;
}, 98);