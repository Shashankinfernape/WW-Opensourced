__d("WASmaxInStatusDeliverEncVersion3Mixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "v", "3");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                v: n.value
            });
        }
        return n;
    }
    l.parseEncVersion3Mixin = e;
}, 98);