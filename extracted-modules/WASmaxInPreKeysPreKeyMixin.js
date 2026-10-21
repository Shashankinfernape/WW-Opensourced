__d("WASmaxInPreKeysPreKeyMixin", [
    "WAResultOrError",
    "WASmaxInPreKeysKeyDataMixin",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "key");
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
        const a = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(n.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                keyIdKeyIDMixin: a.value,
                keyValueKeyDataMixin: i.value
            });
        }
        return i;
    }
    l.parsePreKeyMixin = e;
}, 98);