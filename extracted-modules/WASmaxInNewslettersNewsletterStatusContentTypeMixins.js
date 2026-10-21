__d("WASmaxInNewslettersNewsletterStatusContentTypeMixins", [
    "WAResultOrError",
    "WASmaxInNewslettersStatusNewsletterMediaMixin",
    "WASmaxInNewslettersStatusNewsletterReactionMixin",
    "WASmaxInNewslettersStatusNewsletterReactionRevokeMixin",
    "WASmaxInNewslettersStatusNewsletterRevokeMixin",
    "WASmaxInNewslettersStatusNewsletterTextMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInNewslettersStatusNewsletterRevokeMixin").parseStatusNewsletterRevokeMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusNewsletterRevoke",
                value: t.value
            });
        }
        const n = o("WASmaxInNewslettersStatusNewsletterTextMixin").parseStatusNewsletterTextMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusNewsletterText",
                value: n.value
            });
        }
        const r = o("WASmaxInNewslettersStatusNewsletterMediaMixin").parseStatusNewsletterMediaMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusNewsletterMedia",
                value: r.value
            });
        }
        const a = o("WASmaxInNewslettersStatusNewsletterReactionMixin").parseStatusNewsletterReactionMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusNewsletterReaction",
                value: a.value
            });
        }
        const i = o("WASmaxInNewslettersStatusNewsletterReactionRevokeMixin").parseStatusNewsletterReactionRevokeMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusNewsletterReactionRevoke",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusNewsletterRevoke",
            "StatusNewsletterText",
            "StatusNewsletterMedia",
            "StatusNewsletterReaction",
            "StatusNewsletterReactionRevoke"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parseNewsletterStatusContentTypeMixins = e;
}, 98);