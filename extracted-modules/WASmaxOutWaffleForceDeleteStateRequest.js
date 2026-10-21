__d("WASmaxOutWaffleForceDeleteStateRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ onlyIfSuspendedElementValue }) {
        const n = o("WASmaxJsx").smax("only_if_suspended", null, onlyIfSuspendedElementValue);
        return n;
    }
    function s({ onlyIfSuspendedArgs, timestampElementValue }) {
        const a = o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "waffle",
            smax_id: o("WAWap").INT(59),
            to: o("WAWap").S_WHATSAPP_NET
        }, o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(timestampElementValue)), o("WASmaxChildren").OPTIONAL_CHILD(e, onlyIfSuspendedArgs)));
        return a;
    }
    l.makeForceDeleteStateRequestOnlyIfSuspended = e;
    l.makeForceDeleteStateRequest = s;
}, 98);