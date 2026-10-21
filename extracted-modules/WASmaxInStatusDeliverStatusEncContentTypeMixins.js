__d("WASmaxInStatusDeliverStatusEncContentTypeMixins", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
    "WASmaxInStatusDeliverStatusContentTypeReactionMixin",
    "WASmaxInStatusDeliverStatusContentTypeTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverStatusContentTypeTextMixin").parseStatusContentTypeTextMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusContentTypeText",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverStatusContentTypeMediaMixin").parseStatusContentTypeMediaMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusContentTypeMedia",
                value: n.value
            });
        }
        const r = o("WASmaxInStatusDeliverStatusContentTypeReactionMixin").parseStatusContentTypeReactionMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusContentTypeReaction",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusContentTypeText",
            "StatusContentTypeMedia",
            "StatusContentTypeReaction"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseStatusEncContentTypeMixins = e;
}, 98);