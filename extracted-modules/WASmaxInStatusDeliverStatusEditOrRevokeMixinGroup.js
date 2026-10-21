__d("WASmaxInStatusDeliverStatusEditOrRevokeMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEditMixin",
    "WASmaxInStatusDeliverStatusRevokeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusDeliverStatusEditMixin").parseStatusEditMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusEdit",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusDeliverStatusRevokeMixin").parseStatusRevokeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusRevoke",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusEdit",
            "StatusRevoke"
        ], [
            t,
            n
        ]);
    }
    l.parseStatusEditOrRevokeMixinGroup = e;
}, 98);