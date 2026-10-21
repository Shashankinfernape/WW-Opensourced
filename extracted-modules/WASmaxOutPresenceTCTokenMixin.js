__d("WASmaxOutPresenceTCTokenMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPresencePrivacyTokenContentsMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ tctokenT, privacyTokenContentsMixinArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, o("WASmaxOutPresencePrivacyTokenContentsMixin").mergePrivacyTokenContentsMixin(o("WASmaxJsx").smax("tctoken", {
            t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, tctokenT)
        }), privacyTokenContentsMixinArgs));
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeTCTokenMixin = s;
}, 98);