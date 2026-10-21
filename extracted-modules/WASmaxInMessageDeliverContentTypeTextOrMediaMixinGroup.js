__d("WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMessageDeliverContentTypeTextMixin").parseContentTypeTextMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ContentTypeText",
                value: t.value
            });
        }
        const n = o("WASmaxInMessageDeliverContentTypeMediaMixin").parseContentTypeMediaMixin(e);
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