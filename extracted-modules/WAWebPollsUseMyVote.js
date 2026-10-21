__d("WAWebPollsUseMyVote", [
    "WAWebNewsletterPollVotesGetters",
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsPollVoteModel",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterPollVotesValues",
    "useWAWebPollVoteValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const a = o("react-compiler-runtime").c(7);
        const { includeUnvote, pollCreationMsg } = e;
        const u = pollCreationMsg?.id;
        let c;
        if (a[0] !== u) {
            c = s(u);
            a[0] = u;
            a[1] = c;
        } else {
            c = a[1];
        }
        const d = c;
        let m;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            a[2] = m;
        } else {
            m = a[2];
        }
        const p = m;
        let _;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                "add",
                "remove",
                "reset"
            ];
            a[3] = _;
        } else {
            _ = a[3];
        }
        let f;
        if (a[4] !== d || a[5] !== u) {
            f = function() {
                if (d instanceof o("WAWebPollsPollVoteCollection").GroupedPollVoteCollection) {
                    return d.getVoteFromSenderAddressingModeInsensitive(p);
                }
                if (u != null) {
                    return d?.get(u);
                }
            };
            a[4] = d;
            a[5] = u;
            a[6] = f;
        } else {
            f = a[6];
        }
        const g = r("useWAWebEventTargetValue")(d, _, f);
        const h = g instanceof o("WAWebPollsPollVoteModel").PollVote ? g : null;
        const y = g instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes ? g : null;
        const C = o("useWAWebNewsletterPollVotesValues").useOptionalNewsletterPollVotesValues(y?.id, [
            o("WAWebNewsletterPollVotesGetters").getIsUnvote
        ]) ?? [];
        const b = C[0];
        const v = o("useWAWebPollVoteValues").useOptionalPollVoteValues(h?.id, [
            o("WAWebPollVoteGetters").getIsUnvote
        ]) ?? [];
        const S = v[0];
        const R = b ?? S;
        if (g == null || R === true && !includeUnvote) {
            return null;
        }
        return g;
    }
    function s(e) {
        if (e == null) {
            return null;
        }
        const t = r("WAWebWid").isNewsletter(e?.remote);
        if (t) {
            return o("WAWebNewsletterPollVotesModelCollection").NewsletterPollVotesModelCollection;
        }
        return o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
            e
        ])[0];
    }
    l.useMyVote = e;
}, 98);