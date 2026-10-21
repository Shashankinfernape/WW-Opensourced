__d("WASmaxInPreKeysVnameFailures", [
    "WAResultOrError",
    "WASmaxInPreKeysSetVnameFailureBadRequestMixin",
    "WASmaxInPreKeysSetVnameFailureFallbackMixin",
    "WASmaxInPreKeysSetVnameFailureInternalServerErrorMixin",
    "WASmaxInPreKeysSetVnameFailureNotAcceptableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysSetVnameFailureNotAcceptableMixin").parseSetVnameFailureNotAcceptableMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "SetVnameFailureNotAcceptable",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysSetVnameFailureBadRequestMixin").parseSetVnameFailureBadRequestMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "SetVnameFailureBadRequest",
                value: n.value
            });
        }
        const r = o("WASmaxInPreKeysSetVnameFailureInternalServerErrorMixin").parseSetVnameFailureInternalServerErrorMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "SetVnameFailureInternalServerError",
                value: r.value
            });
        }
        const a = o("WASmaxInPreKeysSetVnameFailureFallbackMixin").parseSetVnameFailureFallbackMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "SetVnameFailureFallback",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "VnameFailureNotAcceptable",
            "VnameFailureBadRequest",
            "VnameFailureInternalServerError",
            "VnameFailureFallback"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseVnameFailures = e;
}, 98);