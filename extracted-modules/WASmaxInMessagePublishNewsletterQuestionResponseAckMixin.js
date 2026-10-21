__d("WASmaxInMessagePublishNewsletterQuestionResponseAckMixin", [
    "WAResultOrError",
    "WASmaxInMessagePublishAckMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "response_server_id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                responseServerId: r.value
            }, a.value));
        }
        return a;
    }
    l.parseNewsletterQuestionResponseAckMixin = e;
}, 98);