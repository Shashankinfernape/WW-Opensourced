__d("WAWebNewsletterGetMyAddOnsJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebGetMyAddOnsRPC",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPollOptionHashUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getMyNewsletterAddOns", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebGetMyAddOnsRPC").getMyNewsletterAddOnsRPC(e);
            const t_messagesByNewsletter = t.messagesByNewsletter;
            return u(t_messagesByNewsletter, e.newsletterJid);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = t.reduce((acc, { jid, message })=>{
                const a = jid ?? r;
                if (a != null) {
                    message.forEach((t)=>{
                        const n = d(t, a);
                        if (n != null) {
                            acc.reactions.push(n);
                        }
                        const r = m(t, a);
                        if (r != null) {
                            acc.pollVotes.push(r);
                        }
                    });
                }
                return acc;
            }, {
                reactions: [],
                pollVotes: []
            });
            yield (e || (e = n("Promise"))).all([
                o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(a.reactions),
                o("WAWebCRUDOperationsNewsletterMyVotes").bulkCreateOrUpdateMyVotes(a.pollVotes)
            ]);
            return a;
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        const a = o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(e.serverId, t).toString();
        const reactionText = e?.newsletterMyReactionMixin?.reactionCode;
        const l = e?.newsletterMyReactionMixin?.reactionT;
        if (reactionText == null || l == null) {
            return null;
        }
        return {
            parentMsgKey: a,
            senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
            reactionText,
            timestamp: l * 1000,
            orphan: 0,
            msgKey: a
        };
    }
    function m(e, t) {
        const e_newsletterMyPollVoteMixin = e.newsletterMyPollVoteMixin;
        if (e_newsletterMyPollVoteMixin == null) {
            return null;
        }
        const { votesT, votesVote } = e_newsletterMyPollVoteMixin;
        return {
            chatJid: t,
            msgServerId: e.serverId,
            serverTimestampMs: votesT * 1000,
            t: votesT,
            msgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(e.serverId, t).toString(),
            votes: votesVote.map((e)=>o("WAWebPollOptionHashUtils").bufferToHex(e.elementValue))
        };
    }
    l.getMyNewsletterAddOnsJob = s;
}, 98);