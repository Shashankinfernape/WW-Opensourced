__d("WASmaxOutNewslettersNotificationClientAckMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrStanzaId, e, [
            "id"
        ]);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(t.error);
        }
        const n = o("WASmaxParseReference").attrFromReference(o("WASmaxParseJid").attrNewsletterJid, e, [
            "from"
        ]);
        if (!n.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(n.error);
        }
        const r = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrString, e, [
            "type"
        ]);
        if (!r.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(r.error);
        }
        const a = o("WASmaxJsx").smax("ack", {
            id: o("WAWap").STANZA_ID(t.value),
            to: o("WAWap").JID(n.value),
            class: "notification",
            type: o("WAWap").CUSTOM_STRING(r.value)
        });
        return a;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNotificationClientAckMixin = s;
}, 98);