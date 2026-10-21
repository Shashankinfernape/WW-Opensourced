__d("WASmaxInNewslettersNewsletterViewsCountViewsMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "views_count");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "type", "views");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "count", 0, undefined);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                type: n.value,
                count: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "message");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").mapChildrenWithTag(t, "views_count", 1, 2, e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                viewsCount: r.value
            });
        }
        return r;
    }
    l.parseNewsletterViewsCountViewsViewsCount = e;
    l.parseNewsletterViewsCountViewsMixin = s;
}, 98);