__d("WAWebChatGetMessage", [
    "WAWebAck",
    "WAWebCommonMsgUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        for(let n = t.msgs.length - 1; n >= 0; n--){
            const r = t.msgs.at(n);
            if (r && (!r.local || r.ack > o("WAWebAck").ACK.CLOCK)) {
                return r;
            }
        }
    }
    function s(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        for(let n = t.msgs.length - 1; n >= 0; n--){
            const r = t.msgs.at(n);
            if (r && o("WAWebMsgDataUtils").eventTypeFromMsgType(r) !== o("WAWebCommonMsgUtils").EventType.IGNORE) {
                return r;
            }
        }
    }
    function u(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        for(let n = t.msgs.length - 1; n >= 0; n--){
            const r = t.msgs.at(n);
            if (r != null && o("WAWebMsgGetters").getIsSentByMe(r)) {
                return r;
            }
        }
    }
    l.getLastReceivedMsg = e;
    l.getLastTimestampMsg = s;
    l.getLastSentMsg = u;
}, 98);