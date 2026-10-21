__d("WASmaxInGroupsUsernameAttMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "username");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                username: t.value
            });
        }
        return t;
    }
    l.parseUsernameAttMixin = e;
}, 98);