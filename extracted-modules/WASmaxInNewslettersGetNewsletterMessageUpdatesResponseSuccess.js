__d("WASmaxInNewslettersGetNewsletterMessageUpdatesResponseSuccess", [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "message_updates");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "messages");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInNewslettersNewsletterMessageResponsePayloadMixin").parseNewsletterMessageResponsePayloadMixin(a.value);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInNewslettersIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                messageUpdatesMessagesNewsletterMessageResponsePayloadMixin: i.value
            }, l.value));
        }
        return l;
    }
    l.parseGetNewsletterMessageUpdatesResponseSuccess = e;
}, 98);