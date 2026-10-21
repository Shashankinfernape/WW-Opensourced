__d("WASmaxInPreKeysServerErrors", [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorFallbackServerMixin",
    "WASmaxInPreKeysIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysIQErrorFallbackServerMixin").parseIQErrorFallbackServerMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackServer",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorServiceUnavailable",
            "IQErrorFallbackServer"
        ], [
            t,
            n
        ]);
    }
    l.parseServerErrors = e;
}, 98);