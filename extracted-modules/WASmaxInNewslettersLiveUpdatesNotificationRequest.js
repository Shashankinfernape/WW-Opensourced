__d("WASmaxInNewslettersLiveUpdatesNotificationRequest", [
    "WAResultOrError",
    "WASmaxInNewslettersCommonNotificationMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "live_updates");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "messages");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersNewsletterMessageResponsePayloadMixin").parseNewsletterMessageResponsePayloadMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInNewslettersCommonNotificationMixin").parseCommonNotificationMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                liveUpdatesMessagesNewsletterMessageResponsePayloadMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseLiveUpdatesNotificationRequest = e;
}, 98);