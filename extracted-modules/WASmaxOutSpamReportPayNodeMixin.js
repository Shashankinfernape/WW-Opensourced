__d("WASmaxOutSpamReportPayNodeMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ payType, payId, paySender, payReceiver }) {
        let t;
        const l = o("WASmaxJsx").smax("pay", {
            type: (t = o("WAWap")).CUSTOM_STRING(payType),
            id: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, payId),
            sender: o("WASmaxAttrs").OPTIONAL(t.USER_JID, paySender),
            receiver: o("WASmaxAttrs").OPTIONAL(t.USER_JID, payReceiver)
        });
        return l;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeReportPayNodeMixin = s;
}, 98);