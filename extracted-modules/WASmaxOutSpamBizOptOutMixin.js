__d("WASmaxOutSpamBizOptOutMixin", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ bizOptOutReason, bizOptOutBusinessDiscoveryEntryPoint, bizOptOutBusinessDiscoveryTimestamp, bizOptOutFirstMessage, bizOptOutBusinessDiscoveryId }) {
        let t;
        let n;
        const u = o("WASmaxJsx").smax("biz_opt_out", {
            reason: (t = o("WASmaxAttrs")).OPTIONAL((n = o("WAWap")).CUSTOM_STRING, bizOptOutReason),
            business_discovery_entry_point: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutBusinessDiscoveryEntryPoint),
            business_discovery_timestamp: t.OPTIONAL(n.INT, bizOptOutBusinessDiscoveryTimestamp),
            first_message: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutFirstMessage),
            business_discovery_id: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutBusinessDiscoveryId)
        });
        return u;
    }
    function s({ bizOptOutArgs }) {
        const r = o("WASmaxJsx").smax("spam_list", null, o("WASmaxChildren").OPTIONAL_CHILD(e, bizOptOutArgs));
        return r;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeBizOptOutBizOptOut = e;
    l.mergeBizOptOutMixin = u;
}, 98);