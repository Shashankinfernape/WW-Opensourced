__d("WASmaxInBlocklistsUpdateBlockListResponseInvalidRequest", [
    "WAResultOrError",
    "WASmaxInBlocklistsEnums",
    "WASmaxInBlocklistsIQErrorResponseMixin",
    "WASmaxInBlocklistsUpdateBlocklistErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, r.value, "addressing_mode", o("WASmaxInBlocklistsEnums").ENUM_LID_PN);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInBlocklistsIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInBlocklistsUpdateBlocklistErrors").parseUpdateBlocklistErrors(r.value);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorAddressingMode: a.value
            }, i.value, {
                errorUpdateBlocklistErrors: l.value
            }));
        }
        return l;
    }
    l.parseUpdateBlockListResponseInvalidRequest = e;
}, 98);