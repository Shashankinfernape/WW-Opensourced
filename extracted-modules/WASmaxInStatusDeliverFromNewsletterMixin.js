__d("WASmaxInStatusDeliverFromNewsletterMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverOfflineMixin",
    "WASmaxInStatusDeliverStatusNewsletterContentMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "server_id", 99, 2147476647);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(e, "t", 1577865600, 4102473600);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "is_sender", "true");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInStatusDeliverStatusNewsletterContentMixin").parseStatusNewsletterContentMixin(e);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInStatusDeliverOfflineMixin").parseOfflineMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            from: n.value,
            serverId: r.value,
            t: a.value,
            isSender: i.value
        }, l.value, {
            offlineMixin: s.success ? s.value : null
        }));
    }
    l.parseFromNewsletterMixin = e;
}, 98);