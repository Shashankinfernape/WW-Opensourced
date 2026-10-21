__d("WASmaxInMessagePublishNewsletterResponseSuccess", [
    "WAResultOrError",
    "WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup").parseNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                newsletterQuestionResponseOrNewsletterMessageAckMixinGroup: r.value
            });
        }
        return r;
    }
    l.parseNewsletterResponseSuccess = e;
}, 98);