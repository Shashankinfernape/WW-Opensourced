__d("WASmaxInBizSettingsSmbDataSharingSettingValueMixin", [
    "WAResultOrError",
    "WASmaxInBizSettingsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrStringEnum(e, "value", o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE);
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "version", 1, undefined);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                value: t.value,
                version: n.value
            });
        }
        return n;
    }
    l.parseSmbDataSharingSettingValueMixin = e;
}, 98);