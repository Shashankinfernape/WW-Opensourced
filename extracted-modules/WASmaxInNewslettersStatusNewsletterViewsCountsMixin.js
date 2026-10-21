__d("WASmaxInNewslettersStatusNewsletterViewsCountsMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "views_count");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "type", "views");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, undefined);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                viewsCountType: r.value,
                viewsCountCount: a.value
            });
        }
        return a;
    }
    l.parseStatusNewsletterViewsCountsMixin = e;
}, 98);