__d("WASmaxInStatusDeliverEncSenderKeyBucketMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "bucket");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                bucket: n.value
            });
        }
        return n;
    }
    l.parseEncSenderKeyBucketMixin = e;
}, 98);