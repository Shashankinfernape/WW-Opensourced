__d("WASmaxInUserNoticeStageMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notice");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "stage", 0, 1000);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                stage: r.value
            });
        }
        return r;
    }
    l.parseStageMixin = e;
}, 98);