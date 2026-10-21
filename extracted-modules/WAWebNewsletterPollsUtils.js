__d("WAWebNewsletterPollsUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebIdentityFunction",
    "WAWebNewsletterGatingUtils",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        const l = new Map;
        const s = Array.from(e?.pollVotesCountMap?.values() ?? []);
        const u = r("sumBy")(s, o("WAWebIdentityFunction").identityFunction);
        const d = Math.max(...s);
        const m = e?.pollVotersMap;
        for (const p of t){
            let _;
            const isVotedForByMe = !!(!(e == null || (_ = e.myVote) == null) && _.has(p.localId));
            const v = Math.max(e?.pollVotesCountMap?.get(p.localId) ?? 0, isVotedForByMe ? 1 : 0);
            const S = m?.get(p.localId);
            const R = isVotedForByMe ? c(n, e?.myVoteTs) : null;
            const contactVoters = (R != null ? [
                R
            ] : []).concat(S?.contacts ?? []);
            l.set(p, {
                isVotedForByMe,
                isCurrentLeader: d > 0 && v === d,
                percentageOfAll: u === 0 ? 0 : v / u,
                percentageOfMostVotedForOption: d === 0 ? 0 : v / d,
                votes: o("WAWebNewsletterGatingUtils").isNewsletterPollsVotersEnabled() ? contactVoters.concat(S?.others ?? []) : [],
                count: v,
                mode: "newsletter",
                contactVoters,
                otherVoters: S?.others ?? []
            });
        }
        return l;
    }
    function u(e) {
        return {
            parentMsgKey: e.parentMsgKey.toString(),
            serverTimestamp: e.serverTimestamp,
            votesMap: e.voteCountMap
        };
    }
    function c(t, n) {
        if (t == null) {
            return null;
        }
        if (!t.id.isLid() || t.id.getDeviceId() !== 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter] my poll voter id is not a user lid: ",
                ""
            ])), t.id.toLogString()).sendLogs("newsletter-pollvoter-not-user-lid");
            return null;
        }
        return {
            contact: t,
            id: t.id,
            time: o("WATimeUtils").castMillisTimeToUnixTime(n) ?? o("WATimeUtils").unixTime()
        };
    }
    l.aggregateNewsletterVotes = s;
    l.mapNewsletterVoteToDbRecord = u;
}, 98);