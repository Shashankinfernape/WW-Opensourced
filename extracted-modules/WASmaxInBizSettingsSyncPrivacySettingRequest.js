__d("WASmaxInBizSettingsSyncPrivacySettingRequest", [
    "WAResultOrError",
    "WASmaxInBizSettingsServerNotificationMixin",
    "WASmaxInBizSettingsSmbDataSharingSettingMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "to");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "business");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInBizSettingsSmbDataSharingSettingMixin").parseSmbDataSharingSettingMixin(n.value);
        const s = o("WASmaxInBizSettingsServerNotificationMixin").parseServerNotificationMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                to: a.value,
                type: i.value,
                privacySmbDataSharingSettingMixin: l.success ? l.value : null
            }, s.value));
        }
        return s;
    }
    l.parseSyncPrivacySettingRequest = e;
}, 98);