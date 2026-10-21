__d("WASmaxInGroupsGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsGroupForbiddenMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsGroupNotExistMixin",
    "WASmaxInGroupsTruncatedGroupInfoMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupInfo",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsTruncatedGroupInfoMixin").parseTruncatedGroupInfoMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "TruncatedGroupInfo",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsGroupForbiddenMixin").parseGroupForbiddenMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupForbidden",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsGroupNotExistMixin").parseGroupNotExistMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupNotExist",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "GroupInfo",
            "TruncatedGroupInfo",
            "GroupForbidden",
            "GroupNotExist"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup = e;
}, 98);