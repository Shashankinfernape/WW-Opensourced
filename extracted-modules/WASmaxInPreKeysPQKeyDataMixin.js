__d("WASmaxInPreKeysPQKeyDataMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").contentBytesRange(e, 1568, 1568);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                elementValue: t.value
            });
        }
        return t;
    }
    l.parsePQKeyDataMixin = e;
}, 98);