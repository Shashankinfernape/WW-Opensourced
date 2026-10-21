__d("WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsNamedSubjectMixin",
    "WASmaxInGroupsUnnamedSubjectFallbackMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsNamedSubjectMixin").parseNamedSubjectMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NamedSubject",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsUnnamedSubjectFallbackMixin").parseUnnamedSubjectFallbackMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "UnnamedSubjectFallback",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NamedSubject",
            "UnnamedSubjectFallback"
        ], [
            t,
            n
        ]);
    }
    l.parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup = e;
}, 98);