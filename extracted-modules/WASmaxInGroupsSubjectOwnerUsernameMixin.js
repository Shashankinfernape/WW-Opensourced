__d("WASmaxInGroupsSubjectOwnerUsernameMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "s_o_username");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                sOUsername: t.value
            });
        }
        return t;
    }
    l.parseSubjectOwnerUsernameMixin = e;
}, 98);