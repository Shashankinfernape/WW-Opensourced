__d("WASmaxInBlocklistsBlocklistIdentifierMixin", [
    "WAResultOrError",
    "WASmaxInBlocklistsBlocklistIds",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "country_code");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInBlocklistsBlocklistIds").parseBlocklistIds(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                countryCode: t.value,
                blocklistIds: n.value
            });
        }
        return n;
    }
    l.parseBlocklistIdentifierMixin = e;
}, 98);