__d("WASmaxInReceiptDeprecatedEditMixin", [
    "WAResultOrError",
    "WASmaxInReceiptEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrStringEnum(e, "edit", o("WASmaxInReceiptEnums").ENUM_0_1_7);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                edit: t.value
            });
        }
        return t;
    }
    l.parseDeprecatedEditMixin = e;
}, 98);