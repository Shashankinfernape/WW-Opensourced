__d("WASmaxInStatusDeliverOfflineMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrIntRange(e, "offline", 0, 12);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                offline: t.value
            });
        }
        return t;
    }
    l.parseOfflineMixin = e;
}, 98);