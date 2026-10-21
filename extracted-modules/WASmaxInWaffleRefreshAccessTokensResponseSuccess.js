__d("WASmaxInWaffleRefreshAccessTokensResponseSuccess", [
    "WAResultOrError",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxInWaffleRSAEncryptionMetadataMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "encryption_metadata");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInWaffleRSAEncryptionMetadataMixin").parseRSAEncryptionMetadataMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInWaffleIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                encryptionMetadataRSAEncryptionMetadataMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseRefreshAccessTokensResponseSuccess = e;
}, 98);