__d("WASmaxInWaffleRefreshAccessTokensErrors", [
    "WAResultOrError",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorConflictMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorNotAuthorizedMixin",
    "WASmaxInWaffleIQErrorPayloadEncDecMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxInWaffleIQErrorWFNotAuthorizedInvalidPasswordMixin",
    "WASmaxInWaffleIQErrorWFNotFoundMixin",
    "WASmaxInWaffleIQErrorWFStateMismatchMixin",
    "WASmaxInWaffleIQErrorWFSuspendedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInWaffleIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInWaffleIQErrorRequestTimeoutMixin").parseIQErrorRequestTimeoutMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRequestTimeout",
                value: n.value
            });
        }
        const r = o("WASmaxInWaffleIQErrorPayloadEncDecMixin").parseIQErrorPayloadEncDecMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorPayloadEncDec",
                value: r.value
            });
        }
        const a = o("WASmaxInWaffleIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: a.value
            });
        }
        const i = o("WASmaxInWaffleIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: i.value
            });
        }
        const l = o("WASmaxInWaffleIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: l.value
            });
        }
        const s = o("WASmaxInWaffleIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: s.value
            });
        }
        const u = o("WASmaxInWaffleIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: u.value
            });
        }
        const c = o("WASmaxInWaffleIQErrorConflictMixin").parseIQErrorConflictMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorConflict",
                value: c.value
            });
        }
        const d = o("WASmaxInWaffleIQErrorWFNotFoundMixin").parseIQErrorWFNotFoundMixin(e);
        if (d.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorWFNotFound",
                value: d.value
            });
        }
        const m = o("WASmaxInWaffleIQErrorWFSuspendedMixin").parseIQErrorWFSuspendedMixin(e);
        if (m.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorWFSuspended",
                value: m.value
            });
        }
        const p = o("WASmaxInWaffleIQErrorWFStateMismatchMixin").parseIQErrorWFStateMismatchMixin(e);
        if (p.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorWFStateMismatch",
                value: p.value
            });
        }
        const _ = o("WASmaxInWaffleIQErrorWFNotAuthorizedInvalidPasswordMixin").parseIQErrorWFNotAuthorizedInvalidPasswordMixin(e);
        if (_.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorWFNotAuthorizedInvalidPassword",
                value: _.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorRequestTimeout",
            "IQErrorPayloadEncDec",
            "IQErrorInternalServerError",
            "IQErrorServiceUnavailable",
            "IQErrorNotAuthorized",
            "IQErrorRateOverlimit",
            "IQErrorNotAllowed",
            "IQErrorConflict",
            "IQErrorWFNotFound",
            "IQErrorWFSuspended",
            "IQErrorWFStateMismatch",
            "IQErrorWFNotAuthorizedInvalidPassword"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _
        ]);
    }
    l.parseRefreshAccessTokensErrors = e;
}, 98);