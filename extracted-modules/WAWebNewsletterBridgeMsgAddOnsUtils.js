__d("WAWebNewsletterBridgeMsgAddOnsUtils", [
    "Promise",
    "WAWebMsgCollection",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterReactionCollection",
    "WAWebNoop",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (e != null && e.size > 0) {
            for (const [n, r] of e.entries()){
                const a = o("WAWebMsgCollection").MsgCollection.get(n);
                a?.set("viewCount", r);
            }
        }
    }
    function u(e) {
        if (e != null && e.size > 0) {
            for (const [n, r] of e.entries()){
                const a = o("WAWebMsgCollection").MsgCollection.get(n);
                a?.set("questionResponsesCount", r);
            }
        }
    }
    function c(e) {
        if (e != null && e.size > 0) {
            for (const [n, r] of e.entries()){
                const a = o("WAWebMsgCollection").MsgCollection.get(n);
                if (a != null) {
                    const l = a.forwardsCount ?? 0;
                    a.set("forwardsCount", Math.max(l, r));
                }
            }
        }
    }
    function d(reactionIdsToRemove) {
        const t = [];
        for (const n of reactionIdsToRemove){
            const r = o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.get(n);
            if (r != null) {
                if (r.myReaction == null) {
                    t.push(n);
                } else {
                    r.set("reactionCountMap", new Map);
                }
            }
        }
        o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.remove(t);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ids, reactionIdsToRemove, reactions }) {
            if (reactionIdsToRemove != null) {
                d(reactionIdsToRemove);
            }
            yield (e || (e = n("Promise"))).all(ids.map((e)=>o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.find(e.toString()).catch(r("WAWebNoop"))) ?? []);
            o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.add(reactions.map((e)=>({
                    id: e.parentMsgKey,
                    reactionCountMap: e.emojiCountMap,
                    reactionCountMapTs: e.serverTimestamp
                })), {
                merge: true
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ids, pollVotes }) {
            yield (e || (e = n("Promise"))).all(ids.map((e)=>o("WAWebNewsletterPollVotesModelCollection").NewsletterPollVotesModelCollection.find(e).catch(r("WAWebNoop"))) ?? []);
            const s = yield e.all(pollVotes.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey);
                    const n = t?.pollOptions;
                    if (n != null) {
                        const r = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(n);
                        return {
                            id: e.parentMsgKey,
                            pollVotesCountMap: g(e.voteCountMap, r),
                            pollVotesCountMapTs: e.serverTimestamp
                        };
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            o("WAWebNewsletterPollVotesModelCollection").NewsletterPollVotesModelCollection.add(s.filter(Boolean), {
                merge: true
            });
        });
        return f.apply(this, arguments);
    }
    function g(voteCountMap, t) {
        const n = new Map;
        for (const [o, a] of voteCountMap.entries()){
            n.set(t.getLocalIdForHexHash(o), a);
        }
        return n;
    }
    function h(e, t) {
        if (t != null) {
            e.forEach((e)=>{
                const n = o("WAWebMsgCollection").MsgCollection.get(e);
                n?.set("lastUpdateFromServerTs", t);
            });
        }
    }
    l.updateViewCounts = s;
    l.updateQuestionResponsesCounts = u;
    l.updateForwardCounts = c;
    l.updateReactions = m;
    l.updatePollVotes = _;
    l.updateLastUpdateTs = h;
}, 98);