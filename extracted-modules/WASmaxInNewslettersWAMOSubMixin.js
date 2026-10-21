__d("WASmaxInNewslettersWAMOSubMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "is_wamo_sub", "true");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaIsWamoSub: r.value
            });
        }
        return r;
    }
    l.parseWAMOSubMixin = e;
}, 98);