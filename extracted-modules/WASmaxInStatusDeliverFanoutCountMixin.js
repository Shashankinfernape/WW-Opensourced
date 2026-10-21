__d("WASmaxInStatusDeliverFanoutCountMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrInt(e, "count");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                count: t.value
            });
        }
        return t;
    }
    l.parseFanoutCountMixin = e;
}, 98);