__d("WASmaxInWaffleWFNotificationRequest", [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "notification_metadata");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "waffle");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrIntRange(n.value, "event", 1, 9);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, n.value, "show_user_notif", o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, n.value, "type", 0, 0);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, n.value, "client_resync", o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, n.value, "sync_delay", 0, undefined);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, n.value, "npr", o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, n.value, "wf_notif_ts", 1577865600000, 4102473600000);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "wf_notif_id");
        if (!p.success) {
            return p;
        }
        const _ = o("WASmaxInWaffleServerNotificationMixin").parseServerNotificationMixin(e);
        if (_.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value,
                notificationMetadataEvent: i.value,
                notificationMetadataShowUserNotif: l.value,
                notificationMetadataType: s.value,
                notificationMetadataClientResync: u.value,
                notificationMetadataSyncDelay: c.value,
                notificationMetadataNpr: d.value,
                notificationMetadataWfNotifTs: m.value,
                notificationMetadataWfNotifId: p.value
            }, _.value));
        }
        return _;
    }
    l.parseWFNotificationRequest = e;
}, 98);