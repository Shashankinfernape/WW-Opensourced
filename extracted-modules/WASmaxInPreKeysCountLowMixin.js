__d("WASmaxInPreKeysCountLowMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "count_low", "true");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                countLow: t.value
            });
        }
        return t;
    }
    l.parseCountLowMixin = e;
}, 98);