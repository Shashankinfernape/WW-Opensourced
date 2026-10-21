__d("WASmaxInNewslettersNewsletterViewsCountViewsOrDeprecatedMixinGroup", [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin",
    "WASmaxInNewslettersNewsletterViewsCountViewsMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInNewslettersNewsletterViewsCountViewsMixin").parseNewsletterViewsCountViewsMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterViewsCountViews",
                value: t.value
            });
        }
        const n = o("WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin").parseNewsletterViewsCountDeprecatedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterViewsCountDeprecated",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NewsletterViewsCountViews",
            "NewsletterViewsCountDeprecated"
        ], [
            t,
            n
        ]);
    }
    l.parseNewsletterViewsCountViewsOrDeprecatedMixinGroup = e;
}, 98);