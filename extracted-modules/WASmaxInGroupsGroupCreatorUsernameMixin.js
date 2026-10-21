__d("WASmaxInGroupsGroupCreatorUsernameMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "creator_username");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                creatorUsername: t.value
            });
        }
        return t;
    }
    l.parseGroupCreatorUsernameMixin = e;
}, 98);