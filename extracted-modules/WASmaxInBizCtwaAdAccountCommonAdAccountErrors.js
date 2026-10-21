__d("WASmaxInBizCtwaAdAccountCommonAdAccountErrors", [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountIQErrorBadRequestMixin",
    "WASmaxInBizCtwaAdAccountIQErrorForbiddenMixin",
    "WASmaxInBizCtwaAdAccountIQErrorInternalServerErrorMixin",
    "WASmaxInBizCtwaAdAccountIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBizCtwaAdAccountIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInBizCtwaAdAccountIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: n.value
            });
        }
        const r = o("WASmaxInBizCtwaAdAccountIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: r.value
            });
        }
        const a = o("WASmaxInBizCtwaAdAccountIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorForbidden",
            "IQErrorInternalServerError",
            "IQErrorServiceUnavailable"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseCommonAdAccountErrors = e;
}, 98);