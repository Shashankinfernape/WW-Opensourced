__d("WASmaxInPreKeysPQPreKeyListCountLowMixin", [
    "WASmaxInPreKeysCountLowMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pq_list");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInPreKeysCountLowMixin").parseCountLowMixin(n.value);
        r.success;
        return r;
    }
    l.parsePQPreKeyListCountLowMixin = e;
}, 98);