__d("WASmaxInPreKeysSignedPreKeyMixin", [
    "WAResultOrError",
    "WASmaxInPreKeysKeyDataMixin",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "skey");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "value");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "signature");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").contentBytesRange(a.value, 64, 64);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(n.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(r.value);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                skeySignatureElementValue: i.value,
                skeyIdKeyIDMixin: l.value,
                skeyValueKeyDataMixin: s.value
            });
        }
        return s;
    }
    l.parseSignedPreKeyMixin = e;
}, 98);