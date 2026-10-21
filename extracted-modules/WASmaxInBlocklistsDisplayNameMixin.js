__d("WASmaxInBlocklistsDisplayNameMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "display_name");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                displayName: t.value
            });
        }
        return t;
    }
    l.parseDisplayNameMixin = e;
}, 98);