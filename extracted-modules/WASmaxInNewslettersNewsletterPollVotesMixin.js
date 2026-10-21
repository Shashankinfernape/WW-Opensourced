__d("WASmaxInNewslettersNewsletterPollVotesMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "vote");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "count", 1, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                count: n.value,
                elementValue: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "message");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "votes");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "vote", 0, 1000, e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                votesVote: a.value
            });
        }
        return a;
    }
    l.parseNewsletterPollVotesVotesVote = e;
    l.parseNewsletterPollVotesMixin = s;
}, 98);