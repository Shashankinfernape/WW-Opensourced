__d("WASmaxInGroupsMemberAddModes", [
    "WAResultOrError",
    "WASmaxInGroupsAdminAddModeMixin",
    "WASmaxInGroupsAllMembersAddModeMixin",
    "WASmaxInGroupsUnknownAddModeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsAdminAddModeMixin").parseAdminAddModeMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "AdminAddMode",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsAllMembersAddModeMixin").parseAllMembersAddModeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "AllMembersAddMode",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsUnknownAddModeMixin").parseUnknownAddModeMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "UnknownAddMode",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "AdminAddMode",
            "AllMembersAddMode",
            "UnknownAddMode"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseMemberAddModes = e;
}, 98);