__d("WASmaxInNewslettersContentTypeTextOrMediaMixinGroup", [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeMediaMixin",
    "WASmaxInNewslettersContentTypeTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInNewslettersContentTypeTextMixin").parseContentTypeTextMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeText",
                value: t.value
            });
        }
        const n = o("WASmaxInNewslettersContentTypeMediaMixin").parseContentTypeMediaMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeMedia",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ContentTypeText",
            "ContentTypeMedia"
        ], [
            t,
            n
        ]);
    }
    l.parseContentTypeTextOrMediaMixinGroup = e;
}, 98);