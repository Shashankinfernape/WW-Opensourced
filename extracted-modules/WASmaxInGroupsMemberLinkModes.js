__d("WASmaxInGroupsMemberLinkModes", [
    "WAResultOrError",
    "WASmaxInGroupsAdminLinkModeMixin",
    "WASmaxInGroupsAllMembersLinkModeMixin",
    "WASmaxInGroupsUnknownLinkModeMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsAdminLinkModeMixin").parseAdminLinkModeMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "AdminLinkMode",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsAllMembersLinkModeMixin").parseAllMembersLinkModeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "AllMembersLinkMode",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsUnknownLinkModeMixin").parseUnknownLinkModeMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "UnknownLinkMode",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "AdminLinkMode",
            "AllMembersLinkMode",
            "UnknownLinkMode"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseMemberLinkModes = e;
}, 98);