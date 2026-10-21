__d("WASmaxOutWaffleForceSuspendStateRequest", [
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ timestampElementValue }) {
        const n = o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "waffle",
            smax_id: o("WAWap").INT(84),
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(timestampElementValue))));
        return n;
    }
    l.makeForceSuspendStateRequest = e;
}, 98);