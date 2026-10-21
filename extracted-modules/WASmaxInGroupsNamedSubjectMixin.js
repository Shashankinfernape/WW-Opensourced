__d("WASmaxInGroupsNamedSubjectMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "subject");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                subject: t.value
            });
        }
        return t;
    }
    l.parseNamedSubjectMixin = e;
}, 98);