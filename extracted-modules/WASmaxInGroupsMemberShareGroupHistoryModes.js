__d("WASmaxInGroupsMemberShareGroupHistoryModes", [
    "WAResultOrError",
    "WASmaxInGroupsAdminShareModeMixin",
    "WASmaxInGroupsAllMembersShareModeMixin",
    "WASmaxInGroupsUnknownShareModeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsAdminShareModeMixin").parseAdminShareModeMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "AdminShareMode",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsAllMembersShareModeMixin").parseAllMembersShareModeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "AllMembersShareMode",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsUnknownShareModeMixin").parseUnknownShareModeMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "UnknownShareMode",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "AdminShareMode",
            "AllMembersShareMode",
            "UnknownShareMode"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseMemberShareGroupHistoryModes = e;
}, 98);