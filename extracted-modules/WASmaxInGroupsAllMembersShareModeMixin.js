__d("WASmaxInGroupsAllMembersShareModeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "member_share_group_history_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literalContent(o("WASmaxParseUtils").contentString, e, "all_member_share");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    l.parseAllMembersShareModeMixin = e;
}, 98);