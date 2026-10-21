__d("WASmaxInBizSettingsPrivacySettingErrors", [
    "WAResultOrError",
    "WASmaxInBizSettingsIQErrorBadRequestMixin",
    "WASmaxInBizSettingsIQErrorFeatureNotImplementedMixin",
    "WASmaxInBizSettingsIQErrorInternalServerErrorMixin",
    "WASmaxInBizSettingsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBizSettingsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInBizSettingsIQErrorFeatureNotImplementedMixin").parseIQErrorFeatureNotImplementedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: n.value
            });
        }
        const r = o("WASmaxInBizSettingsIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: r.value
            });
        }
        const a = o("WASmaxInBizSettingsIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorFeatureNotImplemented",
            "IQErrorServiceUnavailable",
            "IQErrorInternalServerError"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parsePrivacySettingErrors = e;
}, 98);