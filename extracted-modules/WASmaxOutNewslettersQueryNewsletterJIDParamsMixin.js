__d("WASmaxOutNewslettersQueryNewsletterJIDParamsMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyJid: t, anyViewRole: n }) {
        const r = o("WASmaxJsx").smax("smax$any", {
            type: "jid",
            jid: o("WAWap").JID(t),
            view_role: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n)
        });
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeQueryNewsletterJIDParamsMixin = s;
}, 98);