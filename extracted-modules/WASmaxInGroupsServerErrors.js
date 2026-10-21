__d("WASmaxInGroupsServerErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorFallbackServerMixin",
    "WASmaxInGroupsIQErrorInternalServerErrorMixin",
    "WASmaxInGroupsIQErrorPartialServerErrorMixin",
    "WASmaxInGroupsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorPartialServerErrorMixin").parseIQErrorPartialServerErrorMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorPartialServerError",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorFallbackServerMixin").parseIQErrorFallbackServerMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackServer",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorServiceUnavailable",
            "IQErrorPartialServerError",
            "IQErrorFallbackServer"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseServerErrors = e;
}, 98);