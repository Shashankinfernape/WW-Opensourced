__d("WASmaxInNewslettersNewsletterMessageMyAddOnsMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterMyPollVoteMixin",
    "WASmaxInNewslettersNewsletterMyReactionMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "server_id", 99, 2147476647);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersNewsletterMyReactionMixin").parseNewsletterMyReactionMixin(e);
        const a = o("WASmaxInNewslettersNewsletterMyPollVoteMixin").parseNewsletterMyPollVoteMixin(e);
        return o("WAResultOrError").makeResult({
            serverId: n.value,
            newsletterMyReactionMixin: r.success ? r.value : null,
            newsletterMyPollVoteMixin: a.success ? a.value : null
        });
    }
    l.parseNewsletterMessageMyAddOnsMixin = e;
}, 98);