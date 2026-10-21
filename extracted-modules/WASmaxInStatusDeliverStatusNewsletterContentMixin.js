__d("WASmaxInStatusDeliverStatusNewsletterContentMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverNewsletterStatusContentTypeMixins",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInStatusDeliverNewsletterStatusContentTypeMixins").parseNewsletterStatusContentTypeMixins(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                newsletterStatusContentTypeMixins: n.value
            });
        }
        return n;
    }
    l.parseStatusNewsletterContentMixin = e;
}, 98);