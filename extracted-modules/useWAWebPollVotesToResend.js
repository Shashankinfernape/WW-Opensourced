__d("useWAWebPollVotesToResend", [
    "WAWebFrontendMsgGetters",
    "WAWebFrontendNewsletterPollVotesGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebNewsletterPollVotesModel",
    "WAWebPollsPollVoteModel",
    "WAWebPollsUseMyVote",
    "react-compiler-runtime",
    "useWAWebNewsletterPollVotesValues",
    "useWAWebPollVoteValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const a = o("react-compiler-runtime").c(7);
        let i;
        if (a[0] !== e) {
            i = e != null ? o("WAWebFrontendMsgGetters").getAsPollCreation(e) : null;
            a[0] = e;
            a[1] = i;
        } else {
            i = a[1];
        }
        const pollCreationMsg = i;
        let s;
        if (a[2] !== pollCreationMsg) {
            s = {
                pollCreationMsg,
                includeUnvote: true
            };
            a[2] = pollCreationMsg;
            a[3] = s;
        } else {
            s = a[3];
        }
        const u = o("WAWebPollsUseMyVote").useMyVote(s);
        const c = u instanceof o("WAWebPollsPollVoteModel").PollVote ? u : null;
        const d = u instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes ? u : null;
        const m = o("useWAWebNewsletterPollVotesValues").useOptionalNewsletterPollVotesValues(d?.id, [
            o("WAWebFrontendNewsletterPollVotesGetters").getIsFailed
        ])?.[0];
        const p = o("useWAWebPollVoteValues").useOptionalPollVoteValues(c?.id, [
            o("WAWebFrontendPollVoteGetters").getIsFailed
        ])?.[0];
        const _ = m ?? p ?? false;
        let f;
        if (a[4] !== u || a[5] !== _) {
            f = _ && u != null ? [
                u
            ] : [];
            a[4] = u;
            a[5] = _;
            a[6] = f;
        } else {
            f = a[6];
        }
        return f;
    }
    l.default = e;
}, 98);