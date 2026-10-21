__d("WASmaxInStatusDeliverStatusEditOrRevokeOrAdminRevokeMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusAdminRevokeMixin",
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
        const r = o("WASmaxInStatusDeliverStatusAdminRevokeMixin").parseStatusAdminRevokeMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusAdminRevoke",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusEdit",
            "StatusRevoke",
            "StatusAdminRevoke"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseStatusEditOrRevokeOrAdminRevokeMixinGroup = e;
}, 98);