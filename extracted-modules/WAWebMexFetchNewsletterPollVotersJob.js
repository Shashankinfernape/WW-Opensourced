__d("WAWebMexFetchNewsletterPollVotersJob", [
    "WALogger",
    "WATimeUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterPollVotersJobQuery.graphql",
    "WAWebPollOptionHashUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexFetchNewsletterPollVotersJobQuery.graphql");
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ limit, newsletterId, serverId, voteHash }) {
            const l = {
                input: {
                    limit,
                    server_id: serverId.toString(10),
                    newsletter_id: newsletterId,
                    vote_hash: voteHash
                }
            };
            const s = yield o("WAWebMexClient").fetchQuery(u, l);
            const s_voter_list = s.voter_list;
            const d = new Map;
            if (s_voter_list?.votes == null) {
                return d;
            }
            return s_voter_list.votes.reduce((acc, vote)=>{
                if (vote.vote_hash == null) {
                    return acc;
                }
                return acc.set(o("WAWebPollOptionHashUtils").base64ToHex(vote.vote_hash), r("compactMap")(vote.voter_list.edges, m));
            }, d);
        });
        return d.apply(this, arguments);
    }
    function m({ action_time, node }) {
        const r = node?.id;
        if (r == null || action_time == null) {
            return null;
        }
        const a = o("WAWebWidFactory").createWid(r);
        if (!a.isLid() || a.getDeviceId() !== 0) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter] poll voter id is not a user lid: ",
                ""
            ])), a.toLogString()).sendLogs("newsletter-pollvoter-not-user-lid");
            return null;
        }
        const i = parseInt(action_time, 10) / 1000000;
        return {
            id: a,
            time: o("WATimeUtils").castToUnixTime(i)
        };
    }
    l.default = c;
}, 98);