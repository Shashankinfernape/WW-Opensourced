__d("WASmaxInGroupsGroupInfoParticipantAdminMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsParticipantMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "type", o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: n.value
            }, r.value));
        }
        return r;
    }
    l.parseGroupInfoParticipantAdminMixin = e;
}, 98);