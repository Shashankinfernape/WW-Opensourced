__d("WASmaxInGroupsGroupsDirtyNotificationRequest", [
    "WAResultOrError",
    "WASmaxInGroupsServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "group");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrGroupJid(e, "jid");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value
            });
        }
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "notification");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "groups_dirty");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "type", "w:gp2");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, t, "from", "g.us");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInGroupsServerNotificationMixin").parseServerNotificationMixin(t);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "group", 1, 10000, e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                type: a.value,
                from: i.value
            }, l.value, {
                groupsDirtyGroup: s.value
            }));
        }
        return s;
    }
    l.parseGroupsDirtyNotificationRequestGroupsDirtyGroup = e;
    l.parseGroupsDirtyNotificationRequest = s;
}, 98);