__d("WASmaxInGroupsDedupAttrsMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "key");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "create_ctx", o("WASmaxInGroupsEnums").ENUM_E2EEMIGRATION_REGULAR_RTC);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                key: t.value,
                createCtx: n.value
            });
        }
        return n;
    }
    l.parseDedupAttrsMixin = e;
}, 98);