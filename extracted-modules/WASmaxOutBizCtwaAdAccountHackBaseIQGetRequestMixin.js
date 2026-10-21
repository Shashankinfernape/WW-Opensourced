__d("WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBizCtwaAdAccountBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ iqFrom: t }) {
        const n = o("WASmaxOutBizCtwaAdAccountBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            to: o("WAWap").S_WHATSAPP_NET
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeHackBaseIQGetRequestMixin = s;
}, 98);