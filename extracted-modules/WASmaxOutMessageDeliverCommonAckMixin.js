__d("WASmaxOutMessageDeliverCommonAckMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseReference").attrFromReference(o("WASmaxParseJid").attrNewsletterJid, e, [
            "from"
        ]);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(t.error);
        }
        const n = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrStanzaId, e, [
            "id"
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
            to: o("WAWap").JID(t.value),
            class: "message",
            id: o("WAWap").STANZA_ID(n.value),
            type: o("WAWap").CUSTOM_STRING(r.value)
        });
        return a;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCommonAckMixin = s;
}, 98);