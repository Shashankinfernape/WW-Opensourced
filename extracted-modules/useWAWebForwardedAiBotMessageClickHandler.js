__d("useWAWebForwardedAiBotMessageClickHandler", [
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebForwardedBotMessageUtils",
    "WAWebMsgGetters",
    "WAWebOpenChatWithContactAction",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getForwardedAiBotMessageInfo
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebMsgValues").useMsgValues(e, n);
        const a = r[0];
        if (!o("WAWebBotBaseGating").isAiForwardAttributionEnabled() || a == null) {
            return null;
        }
        const i = o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(a.validationStatus);
        if (i !== "normal") {
            return null;
        }
        const a_botId = a.botId;
        let c;
        if (t[1] !== a_botId) {
            c = function() {
                if (o("WAWebBotUtils").isMetaAiBot(a_botId) && o("WAWebBotGating").isAiChatThreadsEnabled()) {
                    o("WAWebBotFrontendUtils").getMetaAiChat().then(u);
                } else {
                    o("WAWebOpenChatWithContactAction").openChatWithContact({
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage,
                        findChatOrigin: "newChatFlow",
                        opts: {
                            onOpened
                        },
                        targetId: a_botId
                    });
                }
            };
            t[1] = a_botId;
            t[2] = c;
        } else {
            c = t[2];
        }
        return c;
    }
    function onOpened() {
        return o("WAWebCmd").Cmd.scrollToActiveChat();
    }
    function u(e) {
        o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
            type: "ForwardedAiBotMessage"
        });
    }
    l.useForwardedAiBotMessageClickHandler = e;
}, 98);