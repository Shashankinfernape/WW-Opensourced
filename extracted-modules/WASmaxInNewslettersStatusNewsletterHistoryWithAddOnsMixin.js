__d("WASmaxInNewslettersStatusNewsletterHistoryWithAddOnsMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersStatusNewsletterHistoryMixin",
    "WASmaxInNewslettersStatusNewsletterReactionsMixin",
    "WASmaxInNewslettersStatusNewsletterResponsesCountMixin",
    "WASmaxInNewslettersStatusNewsletterViewsCountsMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersStatusNewsletterHistoryMixin").parseStatusNewsletterHistoryMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersStatusNewsletterReactionsMixin").parseStatusNewsletterReactionsMixin(e);
        const a = o("WASmaxInNewslettersStatusNewsletterViewsCountsMixin").parseStatusNewsletterViewsCountsMixin(e);
        const i = o("WASmaxInNewslettersStatusNewsletterResponsesCountMixin").parseStatusNewsletterResponsesCountMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
            statusNewsletterReactionsMixin: r.success ? r.value : null,
            statusNewsletterViewsCountsMixin: a.success ? a.value : null,
            statusNewsletterResponsesCountMixin: i.success ? i.value : null
        }));
    }
    l.parseStatusNewsletterHistoryWithAddOnsMixin = e;
}, 98);