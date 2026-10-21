__d("WASmaxInPreKeysKeyDataMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                elementValue: t.value
            });
        }
        return t;
    }
    l.parseKeyDataMixin = e;
}, 98);