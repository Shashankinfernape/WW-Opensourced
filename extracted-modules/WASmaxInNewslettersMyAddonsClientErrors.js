__d("WASmaxInNewslettersMyAddonsClientErrors", [
    "WAResultOrError",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
    "WASmaxInNewslettersUnauthorizedIQErrorResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxInNewslettersBadRequestIQErrorResponseMixin").parseBadRequestIQErrorResponseMixin(e, t);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "BadRequestIQErrorResponse",
                value: n.value
            });
        }
        const r = o("WASmaxInNewslettersUnauthorizedIQErrorResponseMixin").parseUnauthorizedIQErrorResponseMixin(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "UnauthorizedIQErrorResponse",
                value: r.value
            });
        }
        const a = o("WASmaxInNewslettersItemNotFoundIQErrorResponseMixin").parseItemNotFoundIQErrorResponseMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "ItemNotFoundIQErrorResponse",
                value: a.value
            });
        }
        const i = o("WASmaxInNewslettersRateLimitedIQErrorResponseMixin").parseRateLimitedIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "RateLimitedIQErrorResponse",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "BadRequestIQErrorResponse",
            "UnauthorizedIQErrorResponse",
            "ItemNotFoundIQErrorResponse",
            "RateLimitedIQErrorResponse"
        ], [
            n,
            r,
            a,
            i
        ]);
    }
    l.parseMyAddonsClientErrors = e;
}, 98);