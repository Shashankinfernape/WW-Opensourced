__d("WASmaxOutNewslettersQueryNewsletterInviteParamsMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyKey: t, anyViewRole: n }) {
        const r = o("WASmaxJsx").smax("smax$any", {
            type: "invite",
            key: o("WAWap").CUSTOM_STRING(t),
            view_role: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n)
        });
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeQueryNewsletterInviteParamsMixin = s;
}, 98);