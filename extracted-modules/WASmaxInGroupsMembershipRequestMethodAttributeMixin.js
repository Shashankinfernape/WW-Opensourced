__d("WASmaxInGroupsMembershipRequestMethodAttributeMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrStringEnum(e, "request_method", o("WASmaxInGroupsEnums").ENUM_INVITELINK_LINKEDGROUPJOIN_NONADMINADD);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                requestMethod: t.value
            });
        }
        return t;
    }
    l.parseMembershipRequestMethodAttributeMixin = e;
}, 98);