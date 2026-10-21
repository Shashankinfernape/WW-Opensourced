__d("WASmaxInMessageDeliverNewsletterQuestionResponseMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverPayloadMixin",
    "WASmaxInMessageDeliverQuestionTypeResponseMixin",
    "WASmaxInMessageDeliverResponseServerIDMixin",
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
        const r = o("WASmaxInMessageDeliverPayloadMixin").parsePayloadMixin(n.value);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessageDeliverContentTypeTextMixin").parseContentTypeTextMixin(e);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMessageDeliverQuestionTypeResponseMixin").parseQuestionTypeResponseMixin(e);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInMessageDeliverResponseServerIDMixin").parseResponseServerIDMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                plaintextPayloadMixin: r.value
            }, a.value, i.value, l.value));
        }
        return l;
    }
    l.parseNewsletterQuestionResponseMixin = e;
}, 98);