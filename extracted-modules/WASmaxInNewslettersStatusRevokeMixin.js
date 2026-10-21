__d("WASmaxInNewslettersStatusRevokeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "edit", "7");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                edit: n.value
            });
        }
        return n;
    }
    l.parseStatusRevokeMixin = e;
}, 98);