__d("WASmaxInStatusDeliverStatusEncMentionSourceMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "to");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrJidEnum(e, "jid", o("WASmaxInStatusDeliverEnums").GROUPJID_LIDUSERJID);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value
            });
        }
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "status");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "meta");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "mention_source");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "to", 1, 5, e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                metaMentionSourceTo: i.value
            });
        }
        return i;
    }
    l.parseStatusEncMentionSourceMetaMentionSourceTo = e;
    l.parseStatusEncMentionSourceMixin = s;
}, 98);