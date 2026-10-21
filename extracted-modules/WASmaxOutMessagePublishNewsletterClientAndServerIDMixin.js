__d("WASmaxOutMessagePublishNewsletterClientAndServerIDMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageId, messageServerId, newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs }) {
        const a = o("WASmaxOutMessagePublishNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup").mergeNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup(o("WASmaxJsx").smax("message", {
            id: o("WAWap").STANZA_ID(messageId),
            server_id: o("WAWap").INT(messageServerId)
        }), newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs);
        return a;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterClientAndServerIDMixin = s;
}, 98);