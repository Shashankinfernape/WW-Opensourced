__d("WASmaxInMessageDeliverReceiverContentTypeMediaRCATMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "mediatype", "url");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").contentBytes(r.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInMessageDeliverContentTypeMediaMixin").parseContentTypeMediaMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                plaintextMediatype: a.value,
                rcatElementValue: i.value
            }, l.value));
        }
        return l;
    }
    l.parseReceiverContentTypeMediaRCATMixin = e;
}, 98);