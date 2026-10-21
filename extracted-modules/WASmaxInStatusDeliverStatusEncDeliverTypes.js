__d("WASmaxInStatusDeliverStatusEncDeliverTypes", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEncDualEncMixin",
    "WASmaxInStatusDeliverStatusEncSingleEncMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverStatusEncDualEncMixin").parseStatusEncDualEncMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusEncDualEnc",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverStatusEncSingleEncMixin").parseStatusEncSingleEncMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusEncSingleEnc",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusEncDualEnc",
            "StatusEncSingleEnc"
        ], [
            t,
            n
        ]);
    }
    l.parseStatusEncDeliverTypes = e;
}, 98);