__d("WASmaxInMdPasskeyPrologueRequestNotificationRequest", [
    "WAResultOrError",
    "WASmaxInMdDbscRegistrationMixin",
    "WASmaxInMdPasskeyRequestOptionsMixin",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "passkey_request_options");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInMdPasskeyRequestOptionsMixin").parsePasskeyRequestOptionsMixin(e);
        n.success;
        return n;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "dbsc_registration");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInMdDbscRegistrationMixin").parseDbscRegistrationMixin(e);
        n.success;
        return n;
    }
    function u(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "notification");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t, "passkey_request_options", e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(t, "dbsc_registration", s);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "type", "passkey_prologue_request");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, t, "from", "s.whatsapp.net");
        if (!l.success) {
            return l;
        }
        const u = o("WASmaxInMdServerNotificationMixin").parseServerNotificationMixin(t);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: i.value,
                from: l.value
            }, u.value, {
                passkeyRequestOptions: r.value,
                dbscRegistration: a.value
            }));
        }
        return u;
    }
    l.parsePasskeyPrologueRequestNotificationRequestPasskeyRequestOptions = e;
    l.parsePasskeyPrologueRequestNotificationRequestDbscRegistration = s;
    l.parsePasskeyPrologueRequestNotificationRequest = u;
}, 98);