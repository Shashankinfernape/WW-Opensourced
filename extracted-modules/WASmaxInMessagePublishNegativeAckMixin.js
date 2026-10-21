__d("WASmaxInMessagePublishNegativeAckMixin", [
    "WAResultOrError",
    "WASmaxInMessagePublishAckMixin",
    "WASmaxInMessagePublishApplicationNegativeAckMixin",
    "WASmaxInMessagePublishMessageNackRetryAttributesMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "error");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMessagePublishApplicationNegativeAckMixin").parseApplicationNegativeAckMixin(e);
        const l = o("WASmaxInMessagePublishMessageNackRetryAttributesMixin").parseMessageNackRetryAttributesMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            error: r.value
        }, a.value, {
            applicationNegativeAckMixin: i.success ? i.value : null,
            messageNackRetryAttributesMixin: l.success ? l.value : null
        }));
    }
    l.parseNegativeAckMixin = e;
}, 98);