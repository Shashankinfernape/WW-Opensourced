__d("useWAWebAiChatOpenMetrics", [
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiChatOpenLogEvents",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebBizAiHandoffResponseUtils",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(14);
        const { chat, chatEntryPoint } = e;
        const aRef = useRef(false);
        let i;
        if (t[0] !== chat) {
            i = m(chat);
            t[0] = chat;
            t[1] = i;
        } else {
            i = t[1];
        }
        const lRef = useRef(i);
        let s;
        let d;
        if (t[2] !== chat || t[3] !== chatEntryPoint) {
            s = function() {
                if (!aRef.current) {
                    aRef.current = true;
                    if (chat.id.isAiHub()) {
                        o("WAWebBizAiChatOpenLogEvents").logAiHubChatOpen(chatEntryPoint);
                        return;
                    }
                    o("WAWebBizAiChatOpenLogEvents").logAiChatOpen(chat, chatEntryPoint);
                }
            };
            d = [
                chat,
                chatEntryPoint
            ];
            t[2] = chat;
            t[3] = chatEntryPoint;
            t[4] = s;
            t[5] = d;
        } else {
            s = t[4];
            d = t[5];
        }
        useEffect(s, d);
        let p;
        if (t[6] !== chat || t[7] !== chatEntryPoint) {
            p = function(t) {
                if (o("WAWebMsgGetters").getIsNewMsg(t)) {
                    if (!t.id.fromMe) {
                        lRef.current = m(chat);
                        return;
                    }
                    if (o("WAWebBizAiHandoffResponseUtils").isHumanBusinessReply(t) && lRef.current) {
                        if (t.local === true) {
                            o("WAWebBizAiChatOpenLogEvents").logHandoffChatResponded(chatEntryPoint);
                        }
                        if (o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming() === "IMMEDIATELY") {
                            lRef.current = false;
                        }
                    }
                }
            };
            t[6] = chat;
            t[7] = chatEntryPoint;
            t[8] = p;
        } else {
            p = t[8];
        }
        o("useWAWebListener").useListener(chat.msgs, "add", p);
        let _;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                "change:capiThreadControl",
                "change:isAiHandoff"
            ];
            t[9] = _;
        } else {
            _ = t[9];
        }
        let f;
        if (t[10] !== chat) {
            f = function() {
                lRef.current = m(chat);
            };
            t[10] = chat;
            t[11] = f;
        } else {
            f = t[11];
        }
        o("useWAWebListener").useListener(chat, _, f);
        let g;
        if (t[12] !== chat) {
            g = function() {
                lRef.current = m(chat);
            };
            t[12] = chat;
            t[13] = g;
        } else {
            g = t[13];
        }
        o("useWAWebListener").useListener(o("WAWebBizAiHandoffRemovalTimingModel").BizAiHandoffRemovalTimingEventBus, "updated", g);
    }
    function m(chat) {
        return !chat.id.isAiHub() && o("WAWebBizAiAgentStatusUtils").resolveAiChatStatus(chat) === "handoff";
    }
    l.useWAWebAiChatOpenMetrics = useD;
}, 98);