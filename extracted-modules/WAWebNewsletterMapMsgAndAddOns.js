__d("WAWebNewsletterMapMsgAndAddOns", [
    "Promise",
    "WAWebBackendApi",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = yield o("WAWebBackendApi").frontendSendAndReceive("findMsgKeyFromServerId", {
                from: t,
                serverId: r
            });
            if (a != null) {
                return (e || (e = n("Promise"))).resolve(a);
            }
            const i = yield o("WAWebNewsletterDBUtils").getMessageByServerId(r, t.toJid());
            return i?.id;
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, lastUpdateFromServerTs) {
            const f = e.newsletterReactionsMixin?.reactionsReaction;
            const g = e.newsletterPollVotesMixin?.votesVote;
            const h = o("WAWebNewsletterMsgUtils").mapNewsletterMsgToMsgData({
                from: t,
                hasReaction: (f?.length ?? 0) > 0,
                lastUpdateFromServerTs,
                message: e
            });
            const y = h?.id ?? (yield s(t, e.serverId));
            const viewCount = o("WAWebNewsletterMsgUtils").getNewsletterViewCount(e.newsletterViewsCountViewsOrDeprecatedMixinGroup);
            const forwardsCount = e.newsletterForwardsCountMixin?.forwardsCountCount ?? 0;
            const questionResponsesCount = e.newsletterResponsesCountMixin?.responsesCountCount ?? 0;
            return {
                msgData: h,
                reactionData: m(f, y, lastUpdateFromServerTs),
                pollVoteData: p(g, y, lastUpdateFromServerTs),
                id: y,
                viewCount,
                questionResponsesCount,
                forwardsCount
            };
        });
        return d.apply(this, arguments);
    }
    function m(e, t, lastUpdateFromServerTs) {
        if (t != null && e != null && e.length > 0) {
            return {
                parentMsgKey: t,
                serverTimestamp: lastUpdateFromServerTs,
                emojiCountMap: e.reduce((acc, item)=>acc.set(item.code, item.count), new Map)
            };
        }
        return null;
    }
    function p(e, t, lastUpdateFromServerTs) {
        if (t == null || e == null || e.length === 0) {
            return null;
        }
        return {
            parentMsgKey: t,
            serverTimestamp: lastUpdateFromServerTs,
            voteCountMap: e.reduce((acc, item)=>acc.set(o("WAWebPollOptionHashUtils").bufferToHex(item.elementValue), item.count), new Map)
        };
    }
    l.mapMsgAndAddOns = c;
}, 98);