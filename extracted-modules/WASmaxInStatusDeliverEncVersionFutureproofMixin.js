__d("WASmaxInStatusDeliverEncVersionFutureproofMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "v", 3, void 0);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                v: n.value
            });
        }
        return n;
    }
    l.parseEncVersionFutureproofMixin = e;
}, 98);