__d("WASmaxInMessageDeliverNewsletterPollVoteMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypePollVoteMixin",
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
        const a = o("WASmaxInMessageDeliverContentTypePollVoteMixin").parseContentTypePollVoteMixin(t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "vote", 0, 1000, e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                votesVote: i.value
            }));
        }
        return i;
    }
    l.parseNewsletterPollVoteVotesVote = e;
    l.parseNewsletterPollVoteMixin = s;
}, 98);