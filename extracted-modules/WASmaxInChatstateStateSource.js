__d("WASmaxInChatstateStateSource", [
    "WAResultOrError",
    "WASmaxInChatstateFromGroupMixin",
    "WASmaxInChatstateFromUserMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInChatstateFromUserMixin").parseFromUserMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "FromUser",
                value: t.value
            });
        }
        const n = o("WASmaxInChatstateFromGroupMixin").parseFromGroupMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "FromGroup",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "FromUser",
            "FromGroup"
        ], [
            t,
            n
        ]);
    }
    l.parseStateSource = e;
}, 98);