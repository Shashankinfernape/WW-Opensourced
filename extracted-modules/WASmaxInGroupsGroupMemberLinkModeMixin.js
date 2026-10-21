__d("WASmaxInGroupsGroupMemberLinkModeMixin", [
    "WAResultOrError",
    "WASmaxInGroupsMemberLinkModes",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "member_link_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsMemberLinkModes").parseMemberLinkModes(t.value);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                memberLinkModeMemberLinkModes: n.value
            });
        }
        return n;
    }
    l.parseGroupMemberLinkModeMixin = e;
}, 98);