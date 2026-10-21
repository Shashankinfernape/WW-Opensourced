__d("WASmaxInNewslettersNewsletterTextOrMediaMixinGroup", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterMediaMixin",
    "WASmaxInNewslettersNewsletterTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInNewslettersNewsletterTextMixin").parseNewsletterTextMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterText",
                value: t.value
            });
        }
        const n = o("WASmaxInNewslettersNewsletterMediaMixin").parseNewsletterMediaMixin(e);
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