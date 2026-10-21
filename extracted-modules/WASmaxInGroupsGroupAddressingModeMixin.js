__d("WASmaxInGroupsGroupAddressingModeMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrStringEnum(e, "addressing_mode", o("WASmaxInGroupsEnums").ENUM_LID_PN);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                addressingMode: t.value
            });
        }
        return t;
    }
    l.parseGroupAddressingModeMixin = e;
}, 98);