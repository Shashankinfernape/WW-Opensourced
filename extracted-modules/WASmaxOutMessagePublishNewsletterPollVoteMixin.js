__d("WASmaxOutMessagePublishNewsletterPollVoteMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypePollVoteMixin"
], function(t, n, r, o, a, i, l) {
    function e({ voteElementValue }) {
        const n = o("WASmaxJsx").smax("vote", null, voteElementValue);
        return n;
    }
    function s(t) {
        const t_voteArgs = t.voteArgs;
        const r = o("WASmaxOutMessagePublishContentTypePollVoteMixin").mergeContentTypePollVoteMixin(o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("votes", null, o("WASmaxChildren").REPEATED_CHILD(e, t_voteArgs, 0, 1000))), t);
        return r;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeNewsletterPollVoteVotesVote = e;
    l.mergeNewsletterPollVoteMixin = u;
}, 98);