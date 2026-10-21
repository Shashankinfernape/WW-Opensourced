__d("WASmaxInStatusDeliverStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEncDualEncMediaMixin",
    "WASmaxInStatusDeliverStatusEncDualEncNonMediaMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverStatusEncDualEncNonMediaMixin").parseStatusEncDualEncNonMediaMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusEncDualEncNonMedia",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverStatusEncDualEncMediaMixin").parseStatusEncDualEncMediaMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusEncDualEncMedia",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusEncDualEncNonMedia",
            "StatusEncDualEncMedia"
        ], [
            t,
            n
        ]);
    }
    l.parseStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup = e;
}, 98);