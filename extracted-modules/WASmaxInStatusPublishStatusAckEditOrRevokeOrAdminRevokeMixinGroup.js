__d("WASmaxInStatusPublishStatusAckEditOrRevokeOrAdminRevokeMixinGroup", [
    "WAResultOrError",
    "WASmaxInStatusPublishStatusAckAdminRevokeMixin",
    "WASmaxInStatusPublishStatusAckEditMixin",
    "WASmaxInStatusPublishStatusAckRevokeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInStatusPublishStatusAckEditMixin").parseStatusAckEditMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusAckEdit",
                value: t.value
            });
        }
        const n = o("WASmaxInStatusPublishStatusAckRevokeMixin").parseStatusAckRevokeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusAckRevoke",
                value: n.value
            });
        }
        const r = o("WASmaxInStatusPublishStatusAckAdminRevokeMixin").parseStatusAckAdminRevokeMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "StatusAckAdminRevoke",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "StatusAckEdit",
            "StatusAckRevoke",
            "StatusAckAdminRevoke"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseStatusAckEditOrRevokeOrAdminRevokeMixinGroup = e;
}, 98);