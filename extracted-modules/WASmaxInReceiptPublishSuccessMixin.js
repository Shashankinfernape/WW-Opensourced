__d("WASmaxInReceiptPublishSuccessMixin", [
    "WAResultOrError",
    "WASmaxInReceiptDeprecatedEditMixin",
    "WASmaxInReceiptEnums",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "class", "receipt");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", l.value);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "t", 0, void 0);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "readreceipts", o("WASmaxInReceiptEnums").ENUM_ALL_NONE);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseReference").attrStringFromReference(t, [
            "type"
        ]);
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", d.value);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxInReceiptDeprecatedEditMixin").parseDeprecatedEditMixin(e);
        return o("WAResultOrError").makeResult({
            class: i.value,
            t: u.value,
            readreceipts: c.value,
            deprecatedEditMixin: p.success ? p.value : null
        });
    }
    l.parsePublishSuccessMixin = e;
}, 98);