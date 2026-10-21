__d("WASmaxInNewslettersMyAddOnsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersNewsletterMessageMyAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInNewslettersNewsletterMessageMyAddOnsMixin").parseNewsletterMessageMyAddOnsMixin(e);
        n.success;
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "messages");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrNewsletterJid(t, "jid");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(t, "message", 0, 5000, e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                jid: r.value,
                message: a.value
            });
        }
        return a;
    }
    function u(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "my_addons");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "messages", 0, 5000, s);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                myAddonsMessages: i.value
            }));
        }
        return i;
    }
    l.parseMyAddOnsResponseSuccessMyAddonsMessagesMessage = e;
    l.parseMyAddOnsResponseSuccessMyAddonsMessages = s;
    l.parseMyAddOnsResponseSuccess = u;
}, 98);