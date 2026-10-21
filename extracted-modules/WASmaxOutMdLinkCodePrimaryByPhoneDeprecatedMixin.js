__d("WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ linkCodeCompanionRegJid: t }) {
        const n = o("WASmaxJsx").smax("link_code_companion_reg", {
            jid: o("WAWap").USER_JID(t)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeLinkCodePrimaryByPhoneDeprecatedMixin = s;
}, 98);