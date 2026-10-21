__d("WASmaxInGroupsGetLinkedGroupClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorItemNotFound",
            "IQErrorForbidden",
            "IQErrorBadRequest",
            "IQErrorNotAllowed",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parseGetLinkedGroupClientErrors = e;
}, 98);