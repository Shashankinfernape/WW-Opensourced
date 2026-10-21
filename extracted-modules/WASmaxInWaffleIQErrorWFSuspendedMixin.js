__d("WASmaxInWaffleIQErrorWFSuspendedMixin", [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "wf-suspended");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 484);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "ndc", o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "npr", o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value,
                ndc: a.value,
                npr: i.value
            });
        }
        return i;
    }
    l.parseIQErrorWFSuspendedMixin = e;
}, 98);