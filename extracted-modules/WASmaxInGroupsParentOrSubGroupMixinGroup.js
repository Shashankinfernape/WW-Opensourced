__d("WASmaxInGroupsParentOrSubGroupMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsParentGroupMixin",
    "WASmaxInGroupsSubGroupMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsParentGroupMixin").parseParentGroupMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ParentGroup",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsSubGroupMixin").parseSubGroupMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "SubGroup",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParentGroup",
            "SubGroup"
        ], [
            t,
            n
        ]);
    }
    l.parseParentOrSubGroupMixinGroup = e;
}, 98);