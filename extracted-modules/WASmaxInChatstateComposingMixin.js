__d("WASmaxInChatstateComposingMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "chatstate");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "composing");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, n.value, "media", "audio");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                composingMedia: r.value
            });
        }
        return r;
    }
    l.parseComposingMixin = e;
}, 98);