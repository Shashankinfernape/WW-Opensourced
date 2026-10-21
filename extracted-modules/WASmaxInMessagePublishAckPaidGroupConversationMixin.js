__d("WASmaxInMessagePublishAckPaidGroupConversationMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "pricing");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, r.value, "business_country_code");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                bizPricingBusinessCountryCode: a.value
            });
        }
        return a;
    }
    l.parseAckPaidGroupConversationMixin = e;
}, 98);