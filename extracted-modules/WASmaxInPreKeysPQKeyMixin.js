__d("WASmaxInPreKeysPQKeyMixin", [
    "WASmaxInPreKeysPQPreKeyContentsMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "pqkey");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInPreKeysPQPreKeyContentsMixin").parsePQPreKeyContentsMixin(t.value);
        n.success;
        return n;
    }
    l.parsePQKeyMixin = e;
}, 98);