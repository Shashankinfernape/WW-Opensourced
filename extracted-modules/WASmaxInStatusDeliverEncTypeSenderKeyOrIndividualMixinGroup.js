__d("WASmaxInStatusDeliverEncTypeSenderKeyOrIndividualMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncTypeIndividualMixin",
    "WASmaxInStatusDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverEncTypeSenderKeyMixin").parseEncTypeSenderKeyMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "EncTypeSenderKey",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverEncTypeIndividualMixin").parseEncTypeIndividualMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "EncTypeIndividual",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "EncTypeSenderKey",
            "EncTypeIndividual"
        ], [
            t,
            n
        ]);
    }
    l.parseEncTypeSenderKeyOrIndividualMixinGroup = e;
}, 98);