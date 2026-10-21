__d("WASmaxInNewslettersNewsletterReactionsMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "reaction");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "code");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "count", 1, undefined);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                code: n.value,
                count: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "message");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "reactions");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "reaction", 0, 1000, e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                reactionsReaction: a.value
            });
        }
        return a;
    }
    l.parseNewsletterReactionsReactionsReaction = e;
    l.parseNewsletterReactionsMixin = s;
}, 98);