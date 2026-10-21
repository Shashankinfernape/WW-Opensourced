__d("WASmaxInNewslettersCommonNotificationMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "newsletter");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersServerNotificationMixin").parseServerNotificationMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: n.value,
                type: r.value
            }, a.value));
        }
        return a;
    }
    l.parseCommonNotificationMixin = e;
}, 98);