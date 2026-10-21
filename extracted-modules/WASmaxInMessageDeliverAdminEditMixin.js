__d("WASmaxInMessageDeliverAdminEditMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "edit", "3");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                edit: n.value
            });
        }
        return n;
    }
    l.parseAdminEditMixin = e;
}, 98);