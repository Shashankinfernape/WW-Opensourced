__d("WASmaxInPreKeysUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup", [
    "WAResultOrError",
    "WASmaxInPreKeysFetchKeyBundlesUserErrorFallbackMixin",
    "WASmaxInPreKeysFetchKeyBundlesUserErrorMixin",
    "WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin").parseFetchKeyBundlesUserSuccessMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchKeyBundlesUserSuccess",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysFetchKeyBundlesUserErrorMixin").parseFetchKeyBundlesUserErrorMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchKeyBundlesUserError",
                value: n.value
            });
        }
        const r = o("WASmaxInPreKeysFetchKeyBundlesUserErrorFallbackMixin").parseFetchKeyBundlesUserErrorFallbackMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchKeyBundlesUserErrorFallback",
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
    l.parseUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup = e;
}, 98);