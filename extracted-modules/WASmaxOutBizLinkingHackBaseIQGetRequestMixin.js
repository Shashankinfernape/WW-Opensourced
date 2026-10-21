__d("WASmaxOutBizLinkingHackBaseIQGetRequestMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBizLinkingBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ iqFrom }) {
        const n = o("WASmaxOutBizLinkingBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, iqFrom),
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