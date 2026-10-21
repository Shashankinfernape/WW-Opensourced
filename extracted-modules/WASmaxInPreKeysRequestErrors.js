__d("WASmaxInPreKeysRequestErrors", [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorFallbackClientMixin",
    "WASmaxInPreKeysIQErrorNotAcceptableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysIQErrorNotAcceptableMixin").parseIQErrorNotAcceptableMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAcceptable",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorNotAcceptable",
            "IQErrorFallbackClient"
        ], [
            t,
            n
        ]);
    }
    l.parseRequestErrors = e;
}, 98);