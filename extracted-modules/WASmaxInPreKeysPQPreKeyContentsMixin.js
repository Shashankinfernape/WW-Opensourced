__d("WASmaxInPreKeysPQPreKeyContentsMixin", [
    "WAResultOrError",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxInPreKeysPQKeyDataMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "id");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "value");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "signature");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").contentBytesRange(r.value, 64, 64);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(t.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInPreKeysPQKeyDataMixin").parsePQKeyDataMixin(n.value);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                signatureElementValue: a.value,
                idKeyIDMixin: i.value,
                valuePQKeyDataMixin: l.value
            });
        }
        return l;
    }
    l.parsePQPreKeyContentsMixin = e;
}, 98);