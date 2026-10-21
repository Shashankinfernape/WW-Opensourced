__d("WASmaxOutSpamBaseReportMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ spamListSpamFlow, spamListWiTraceId }) {
        const r = o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "spam"
        }, o("WASmaxJsx").smax("spam_list", {
            spam_flow: o("WAWap").CUSTOM_STRING(spamListSpamFlow),
            wi_trace_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, spamListWiTraceId)
        }));
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBaseReportMixin = s;
}, 98);