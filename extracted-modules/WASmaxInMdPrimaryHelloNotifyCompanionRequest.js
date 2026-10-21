__d("WASmaxInMdPrimaryHelloNotifyCompanionRequest", [
    "WAResultOrError",
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
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "link_code_pairing_wrapped_primary_ephemeral_pub");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "primary_identity_pub");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "link_code_pairing_ref");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "link_code_companion_reg");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "stage", "primary_hello");
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").contentBytes(r.value);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").contentBytes(a.value);
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").contentBytes(i.value);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxInMdServerNotificationMixin").parseServerNotificationMixin(e);
        if (p.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: l.value,
                from: s.value,
                linkCodeCompanionRegStage: u.value,
                linkCodeCompanionRegLinkCodePairingWrappedPrimaryEphemeralPubElementValue: c.value,
                linkCodeCompanionRegPrimaryIdentityPubElementValue: d.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: m.value
            }, p.value));
        }
        return p;
    }
    l.parsePrimaryHelloNotifyCompanionRequest = e;
}, 98);