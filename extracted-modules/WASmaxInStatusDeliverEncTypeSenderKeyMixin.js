__d("WASmaxInStatusDeliverEncTypeSenderKeyMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInStatusDeliverEncPayloadMixin",
    "WASmaxInStatusDeliverEncSenderKeyBucketMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "skmsg");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin").parseEncHideDecryptionPlaceholderMixin(e);
        const a = o("WASmaxInStatusDeliverEncSenderKeyBucketMixin").parseEncSenderKeyBucketMixin(e);
        const i = o("WASmaxInStatusDeliverEncPayloadMixin").parseEncPayloadMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: n.value,
                encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
                encSenderKeyBucketMixin: a.success ? a.value : null
            }, i.value));
        }
        return i;
    }
    l.parseEncTypeSenderKeyMixin = e;
}, 98);