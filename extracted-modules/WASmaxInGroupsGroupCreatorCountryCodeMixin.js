__d("WASmaxInGroupsGroupCreatorCountryCodeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "creator_country_code");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                creatorCountryCode: t.value
            });
        }
        return t;
    }
    l.parseGroupCreatorCountryCodeMixin = e;
}, 98);