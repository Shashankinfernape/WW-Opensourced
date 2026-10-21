__d("WASmaxInStatusDeliverEncTypeIndividualOrSenderKeyMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncTypeIndividualMixin",
    "WASmaxInStatusDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverEncTypeIndividualMixin").parseEncTypeIndividualMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "EncTypeIndividual",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverEncTypeSenderKeyMixin").parseEncTypeSenderKeyMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "EncTypeSenderKey",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "EncTypeIndividual",
            "EncTypeSenderKey"
        ], [
            t,
            n
        ]);
    }
    l.parseEncTypeIndividualOrSenderKeyMixinGroup = e;
}, 98);