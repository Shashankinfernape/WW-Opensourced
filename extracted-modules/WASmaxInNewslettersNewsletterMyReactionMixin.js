__d("WASmaxInNewslettersNewsletterMyReactionMixin", [
    "WAResultOrError",
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
        const a = o("WASmaxParseUtils").attrIntRange(n.value, "t", 0, undefined);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                reactionCode: r.value,
                reactionT: a.value
            });
        }
        return a;
    }
    l.parseNewsletterMyReactionMixin = e;
}, 98);