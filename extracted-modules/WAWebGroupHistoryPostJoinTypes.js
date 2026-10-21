__d("WAWebGroupHistoryPostJoinTypes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum")({
        UNDEFINED: 0,
        HISTORY_NOT_SENT: 1,
        HISTORY_SENT: 2,
        NOTICE_SENT: 3
    });
    function l(t) {
        switch(t){
            case "HISTORY_NOT_SENT":
                return e.HISTORY_NOT_SENT;
            case "HISTORY_SENT":
                return e.HISTORY_SENT;
            case "NOTICE_SENT":
                return e.NOTICE_SENT;
            default:
                return null;
        }
    }
    function s(t) {
        if (t === true || t === "true") {
            return e.HISTORY_SENT;
        }
        if (t === false || t === "false") {
            return e.HISTORY_NOT_SENT;
        }
    }
    i.GroupHistorySentState = e;
    i.parseGroupHistorySentState = l;
    i.groupHistorySentToState = s;
}, 66);