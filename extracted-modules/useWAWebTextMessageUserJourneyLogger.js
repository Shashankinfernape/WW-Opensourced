__d("useWAWebTextMessageUserJourneyLogger", [
    "WAWebTextMessageUserJourneyLogger",
    "WAWebWamEnumTextMessageUserJourneyAction",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(10);
        const r = t === undefined ? false : t;
        const aRef = useRef(false);
        const iRef = useRef(false);
        const lRef = useRef(r);
        let u;
        if (n[0] !== e) {
            u = function(n, r) {
                const aRef_current = aRef.current;
                if (lRef.current && !iRef.current) {
                    iRef.current = true;
                    return;
                }
                const s = aRef.current = n;
                if (!aRef_current && s) {
                    o("WAWebTextMessageUserJourneyLogger").TextMessageUserJourneyLogger.log({
                        chatId: e,
                        action: o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START,
                        hasDraft: lRef.current,
                        containsQuotedItem: r
                    });
                } else if ((aRef_current || lRef.current) && !s) {
                    o("WAWebTextMessageUserJourneyLogger").TextMessageUserJourneyLogger.log({
                        chatId: e,
                        action: o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED,
                        hasDraft: lRef.current,
                        containsQuotedItem: r
                    });
                }
            };
            n[0] = e;
            n[1] = u;
        } else {
            u = n[1];
        }
        const handleTextMsgChangeForUJLogging = u;
        let d;
        if (n[2] !== e) {
            d = function(n) {
                o("WAWebTextMessageUserJourneyLogger").TextMessageUserJourneyLogger.log({
                    chatId: e,
                    action: o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT,
                    hasDraft: lRef.current,
                    containsQuotedItem: n
                });
                aRef.current = false;
                lRef.current = false;
            };
            n[2] = e;
            n[3] = d;
        } else {
            d = n[3];
        }
        const handleMsgSentForUJLogging = d;
        let p;
        if (n[4] !== e) {
            p = function(n) {
                const t = aRef.current ? o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED : o("WAWebWamEnumTextMessageUserJourneyAction").TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT;
                o("WAWebTextMessageUserJourneyLogger").TextMessageUserJourneyLogger.log({
                    chatId: e,
                    action: t,
                    hasDraft: lRef.current,
                    containsQuotedItem: n
                });
            };
            n[4] = e;
            n[5] = p;
        } else {
            p = n[5];
        }
        const handleCloseForUJLogging = p;
        let f;
        if (n[6] !== handleCloseForUJLogging || n[7] !== handleMsgSentForUJLogging || n[8] !== handleTextMsgChangeForUJLogging) {
            f = {
                handleTextMsgChangeForUJLogging,
                handleMsgSentForUJLogging,
                handleCloseForUJLogging
            };
            n[6] = handleCloseForUJLogging;
            n[7] = handleMsgSentForUJLogging;
            n[8] = handleTextMsgChangeForUJLogging;
            n[9] = f;
        } else {
            f = n[9];
        }
        return f;
    }
    l.default = u;
}, 98);