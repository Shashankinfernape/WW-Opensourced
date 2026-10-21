__d("WAWebVoipIncomingOfferRoute", [
    "WAWebVoipGatingUtils",
    "WAWebVoipSignalingEnums"
], function(t, n, r, o, a, i, l) {
    const e = 30000;
    function s(e, t) {
        if (!c(e)) {
            return "init";
        }
        const n = t();
        if (n <= 0) {
            return "init";
        }
        if (e.is_call_ended === true || e.e >= n) {
            return "stale";
        }
        return "init";
    }
    function u(t) {
        return t.is_call_ended !== true && t.e < e;
    }
    function c(e) {
        return e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER && e.peer_jid.isLid() && e.call_creator.isLid() && !o("WAWebVoipGatingUtils").isGroupCallMessage(e) && e.has_terminate_transaction_id !== true && e.silence_reason == null;
    }
    l.getIncomingOfferRoute = s;
    l.isFreshIncomingOffer = u;
}, 98);