__d("WASmaxInMdRefreshCodeNotifyCompanionRequest", [
    "WAResultOrError",
    "WASmaxInMdEnums",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "link_code_companion_reg");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "link_code_pairing_ref");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "link_code_companion_reg");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "stage", "refresh_code");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, n.value, "force_manual_refresh", o("WASmaxInMdEnums").ENUM_FALSE_TRUE);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").contentBytes(r.value);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInMdServerNotificationMixin").parseServerNotificationMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: a.value,
                from: i.value,
                linkCodeCompanionRegStage: l.value,
                linkCodeCompanionRegForceManualRefresh: s.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: u.value
            }, c.value));
        }
        return c;
    }
    l.parseRefreshCodeNotifyCompanionRequest = e;
}, 98);