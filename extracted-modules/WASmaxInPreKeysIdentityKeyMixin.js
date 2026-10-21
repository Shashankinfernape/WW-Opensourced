__d("WASmaxInPreKeysIdentityKeyMixin", [
    "WASmaxInPreKeysKeyDataMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "identity");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(t.value);
        n.success;
        return n;
    }
    l.parseIdentityKeyMixin = e;
}, 98);