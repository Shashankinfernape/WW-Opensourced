__d("WASmaxInStatusDeliverStatusContentTypeTextOrReactionMixinGroup", [
    "WAResultOrError",
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
        const n = o("WASmaxInStatusDeliverStatusContentTypeReactionMixin").parseStatusContentTypeReactionMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusContentTypeReaction",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusContentTypeText",
            "StatusContentTypeReaction"
        ], [
            t,
            n
        ]);
    }
    l.parseStatusContentTypeTextOrReactionMixinGroup = e;
}, 98);