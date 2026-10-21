__d("WASmaxInGroupsGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoMixin",
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
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "GroupInfo",
            "TruncatedGroupInfo"
        ], [
            t,
            n
        ]);
    }
    l.parseGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup = e;
}, 98);