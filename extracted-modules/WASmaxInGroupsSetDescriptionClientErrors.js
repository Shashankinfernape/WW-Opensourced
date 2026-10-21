__d("WASmaxInGroupsSetDescriptionClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorConflictMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorConflictMixin").parseIQErrorConflictMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorConflict",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsIQErrorNotAcceptableMixin").parseIQErrorNotAcceptableMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAcceptable",
                value: l.value
            });
        }
        const s = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorLocked",
                value: s.value
            });
        }
        const u = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: u.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorConflict",
            "IQErrorItemNotFound",
            "IQErrorNotAuthorized",
            "IQErrorForbidden",
            "IQErrorNotAcceptable",
            "IQErrorLocked",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u
        ]);
    }
    l.parseSetDescriptionClientErrors = e;
}, 98);