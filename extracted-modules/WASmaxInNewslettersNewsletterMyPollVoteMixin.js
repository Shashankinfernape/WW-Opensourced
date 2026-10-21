__d("WASmaxInNewslettersNewsletterMyPollVoteMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "vote");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
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
        const a = o("WASmaxParseUtils").attrIntRange(r.value, "t", 0, undefined);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "vote", 0, 1000, e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                votesT: a.value,
                votesVote: i.value
            });
        }
        return i;
    }
    l.parseNewsletterMyPollVoteVotesVote = e;
    l.parseNewsletterMyPollVoteMixin = s;
}, 98);