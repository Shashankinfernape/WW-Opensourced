__d("WASmaxInStatusDeliverFromBroadcastOrGroupMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverFromBroadcastMixin",
    "WASmaxInStatusDeliverFromGroupMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverFromBroadcastMixin").parseFromBroadcastMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "FromBroadcast",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverFromGroupMixin").parseFromGroupMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "FromGroup",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "FromBroadcast",
            "FromGroup"
        ], [
            t,
            n
        ]);
    }
    l.parseFromBroadcastOrGroupMixinGroup = e;
}, 98);