__d("WASmaxInMessageDeliverStsMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "sts", 1577865600000000, 4102473600000000);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                sts: n.value
            });
        }
        return n;
    }
    l.parseStsMixin = e;
}, 98);