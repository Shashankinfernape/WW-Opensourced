__d("WASmaxInStatusDeliverEncStateOrSessionTypeMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncSessionTypeMixin",
    "WASmaxInStatusDeliverEncStateMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverEncStateMixin").parseEncStateMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "EncState",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverEncSessionTypeMixin").parseEncSessionTypeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "EncSessionType",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "EncState",
            "EncSessionType"
        ], [
            t,
            n
        ]);
    }
    l.parseEncStateOrSessionTypeMixinGroup = e;
}, 98);