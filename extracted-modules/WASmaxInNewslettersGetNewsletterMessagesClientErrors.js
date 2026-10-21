__d("WASmaxInNewslettersGetNewsletterMessagesClientErrors", [
    "WAResultOrError",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersNotAllowedIQErrorResponseMixin",
    "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
    "WASmaxInNewslettersSuspendedIQErrorResponseMixin",
    "WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin",
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
        const r = o("WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin").parseUnavailableForLegalReasonsResponseMixin(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "UnavailableForLegalReasonsResponse",
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
        const i = o("WASmaxInNewslettersSuspendedIQErrorResponseMixin").parseSuspendedIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "SuspendedIQErrorResponse",
                value: i.value
            });
        }
        const l = o("WASmaxInNewslettersRateLimitedIQErrorResponseMixin").parseRateLimitedIQErrorResponseMixin(e, t);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "RateLimitedIQErrorResponse",
                value: l.value
            });
        }
        const s = o("WASmaxInNewslettersNotAllowedIQErrorResponseMixin").parseNotAllowedIQErrorResponseMixin(e, t);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "NotAllowedIQErrorResponse",
                value: s.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "BadRequestIQErrorResponse",
            "UnavailableForLegalReasonsResponse",
            "ItemNotFoundIQErrorResponse",
            "SuspendedIQErrorResponse",
            "RateLimitedIQErrorResponse",
            "NotAllowedIQErrorResponse"
        ], [
            n,
            r,
            a,
            i,
            l,
            s
        ]);
    }
    l.parseGetNewsletterMessagesClientErrors = e;
}, 98);