__d("WASmaxOutSpamCallReportMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ callTo, callFrom, callId, callInfoDuration, callInfoTerminateReason, callInfoReason, callInfoTerminator, callInfoStartTime, callInfoAdder, callInfoCreator, callInfoMediatype }) {
        let t;
        let n;
        const f = o("WASmaxJsx").smax("call", {
            to: (t = o("WAWap")).JID(callTo),
            from: t.USER_JID(callFrom),
            id: t.STANZA_ID(callId)
        }, o("WASmaxJsx").smax("call_info", {
            duration: t.INT(callInfoDuration),
            terminate_reason: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, callInfoTerminateReason),
            reason: n.OPTIONAL(t.CUSTOM_STRING, callInfoReason),
            terminator: n.OPTIONAL(t.USER_JID, callInfoTerminator),
            start_time: n.OPTIONAL(t.INT, callInfoStartTime),
            adder: n.OPTIONAL(t.USER_JID, callInfoAdder),
            creator: n.OPTIONAL(t.USER_JID, callInfoCreator),
            mediatype: n.OPTIONAL(t.CUSTOM_STRING, callInfoMediatype)
        }));
        return f;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCallReportMixin = s;
}, 98);