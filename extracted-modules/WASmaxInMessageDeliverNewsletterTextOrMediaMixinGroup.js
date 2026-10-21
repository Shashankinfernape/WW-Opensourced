__d("WASmaxInMessageDeliverNewsletterTextOrMediaMixinGroup", [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterMediaMixin",
    "WASmaxInMessageDeliverNewsletterTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMessageDeliverNewsletterTextMixin").parseNewsletterTextMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterText",
                value: t.value
            });
        }
        const n = o("WASmaxInMessageDeliverNewsletterMediaMixin").parseNewsletterMediaMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterMedia",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NewsletterText",
            "NewsletterMedia"
        ], [
            t,
            n
        ]);
    }
    l.parseNewsletterTextOrMediaMixinGroup = e;
}, 98);