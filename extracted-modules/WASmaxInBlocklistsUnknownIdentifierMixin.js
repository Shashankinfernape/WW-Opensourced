__d("WASmaxInBlocklistsUnknownIdentifierMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "unknown_identifier", "true");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                unknownIdentifier: t.value
            });
        }
        return t;
    }
    l.parseUnknownIdentifierMixin = e;
}, 98);