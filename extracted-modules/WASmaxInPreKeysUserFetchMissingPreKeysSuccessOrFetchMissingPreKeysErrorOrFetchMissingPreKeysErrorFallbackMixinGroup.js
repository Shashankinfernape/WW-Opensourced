__d("WASmaxInPreKeysUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup", [
    "WAResultOrError",
    "WASmaxInPreKeysFetchMissingPreKeysUserErrorFallbackMixin",
    "WASmaxInPreKeysFetchMissingPreKeysUserErrorMixin",
    "WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin").parseFetchMissingPreKeysUserSuccessMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchMissingPreKeysUserSuccess",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysFetchMissingPreKeysUserErrorMixin").parseFetchMissingPreKeysUserErrorMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchMissingPreKeysUserError",
                value: n.value
            });
        }
        const r = o("WASmaxInPreKeysFetchMissingPreKeysUserErrorFallbackMixin").parseFetchMissingPreKeysUserErrorFallbackMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchMissingPreKeysUserErrorFallback",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "UserSuccess",
            "UserError",
            "UserErrorFallback"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup = e;
}, 98);