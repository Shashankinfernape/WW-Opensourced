__d("WASmaxOutNewslettersMyAddOnsRequest", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutNewslettersSelfIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ myAddonsLimit, myAddonsJid }) {
        const r = o("WASmaxOutNewslettersSelfIQGetRequestMixin").mergeSelfIQGetRequestMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("my_addons", {
            limit: o("WAWap").INT(myAddonsLimit),
            jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, myAddonsJid)
        })));
        return r;
    }
    l.makeMyAddOnsRequest = e;
}, 98);