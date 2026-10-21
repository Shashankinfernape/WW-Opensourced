__d("WASmaxInMessagePublishNewsletterMessageAckMixin", [
    "WAResultOrError",
    "WASmaxInMessagePublishAckMixin",
    "WASmaxInMessagePublishNewsletterSenderRCATAckMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "server_id", 99, 2147476647);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMessagePublishNewsletterSenderRCATAckMixin").parseNewsletterSenderRCATAckMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            serverId: r.value
        }, a.value, {
            newsletterSenderRCATAckMixin: i.success ? i.value : null
        }));
    }
    l.parseNewsletterMessageAckMixin = e;
}, 98);