__d("WASmaxInStatusDeliverFromGroupMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverDeviceIdentityMixin",
    "WASmaxInStatusDeliverFanoutCountMixin",
    "WASmaxInStatusDeliverRegistrationIDMixin",
    "WASmaxInStatusDeliverStatusEditOrRevokeOrAdminRevokeMixinGroup",
    "WASmaxInStatusDeliverStatusEncDeliverTypes",
    "WASmaxInStatusDeliverStatusEncMentionSourceMixin",
    "WASmaxInStatusDeliverStatusEncMentionedMixin",
    "WASmaxInStatusDeliverStatusEncMentionedUsersMixin",
    "WASmaxInStatusDeliverStatusEncSessionScopeMixin",
    "WASmaxInStatusDeliverStatusReportingMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrGroupJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "participant_pn");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "participant_username");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "notify");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, e, "offline");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").attrIntRange(e, "t", 1577865600, 4102473600);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInStatusDeliverFanoutCountMixin").parseFanoutCountMixin(e);
        const d = o("WASmaxInStatusDeliverStatusEncMentionedMixin").parseStatusEncMentionedMixin(e);
        const m = o("WASmaxInStatusDeliverStatusEncMentionedUsersMixin").parseStatusEncMentionedUsersMixin(e);
        const p = o("WASmaxInStatusDeliverStatusEncMentionSourceMixin").parseStatusEncMentionSourceMixin(e);
        const _ = o("WASmaxInStatusDeliverStatusEncSessionScopeMixin").parseStatusEncSessionScopeMixin(e);
        const f = o("WASmaxInStatusDeliverStatusReportingMixin").parseStatusReportingMixin(e);
        const g = o("WASmaxInStatusDeliverDeviceIdentityMixin").parseDeviceIdentityMixin(e);
        const h = o("WASmaxInStatusDeliverRegistrationIDMixin").parseRegistrationIDMixin(e);
        const y = o("WASmaxInStatusDeliverStatusEncDeliverTypes").parseStatusEncDeliverTypes(e);
        if (!y.success) {
            return y;
        }
        const C = o("WASmaxInStatusDeliverStatusEditOrRevokeOrAdminRevokeMixinGroup").parseStatusEditOrRevokeOrAdminRevokeMixinGroup(e);
        return o("WAResultOrError").makeResult({
            from: n.value,
            participant: r.value,
            participantPn: a.value,
            participantUsername: i.value,
            notify: l.value,
            offline: s.value,
            t: u.value,
            fanoutCountMixin: c.success ? c.value : null,
            statusEncMentionedMixin: d.success ? d.value : null,
            statusEncMentionedUsersMixin: m.success ? m.value : null,
            statusEncMentionSourceMixin: p.success ? p.value : null,
            statusEncSessionScopeMixin: _.success ? _.value : null,
            statusReportingMixin: f.success ? f.value : null,
            deviceIdentityMixin: g.success ? g.value : null,
            registrationIDMixin: h.success ? h.value : null,
            statusEncDeliverTypes: y.value,
            statusEditOrRevokeOrAdminRevokeMixinGroup: C.success ? C.value : null
        });
    }
    l.parseFromGroupMixin = e;
}, 98);