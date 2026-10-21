__d("WAWebUseShouldShowBotSuggestions", [
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebMsgType",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(10);
        let a;
        if (n[0] !== e || n[1] !== t) {
            a = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t);
            n[0] = e;
            n[1] = t;
            n[2] = a;
        } else {
            a = n[2];
        }
        const i = a;
        let l;
        if (n[3] !== i.msgs) {
            l = [
                i.msgs,
                i.msgs.msgLoadState
            ];
            n[3] = i.msgs;
            n[4] = l;
        } else {
            l = n[4];
        }
        const s = l;
        let u;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                "add",
                "remove",
                "change:noEarlierMsgs"
            ];
            n[5] = u;
        } else {
            u = n[5];
        }
        let c;
        if (n[6] !== e || n[7] !== i) {
            c = function() {
                const t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
                if (!t || o("WAWebBotBaseGating").isMetaAIHomeEnabled() || o("WAWebBotUtils").isMetaAiBot(e.id) && o("WAWebBotFrontendUtils").isMetaAiChatEmpty(i) && i.msgs.msgLoadState.noEarlierMsgs && o("WAWebBotBaseGating").isMetaAiNullStateEnabled()) {
                    return false;
                }
                if (i.msgs.length === 0) {
                    return true;
                }
                if (i.msgs.length === 1) {
                    const r = i.msgs.last()?.subtype;
                    return r === "bot_init";
                }
                return false;
            };
            n[6] = e;
            n[7] = i;
            n[8] = c;
        } else {
            c = n[8];
        }
        let d;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            d = [];
            n[9] = d;
        } else {
            d = n[9];
        }
        return r("useWAWebEventTargetValue")(s, u, c, d);
    }
    function c(e, t) {
        const n = o("react-compiler-runtime").c(6);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                "add",
                "remove"
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        let i;
        if (n[1] !== t || n[2] !== e.msgs) {
            i = function() {
                if (!o("WAWebBotGating").isBizBot3pAvailable() || !t || t.length === 0) {
                    return false;
                }
                const n = e.msgs.last();
                if (!n || n.subtype === "biz_bot_3p_disclosure") {
                    return true;
                }
                if (n.type === o("WAWebMsgType").MSG_TYPE.CHAT && !o("WAWebUserPrefsMeUser").isMeAccount(n.from)) {
                    const r = e.msgs.at(e.msgs.length - 2);
                    if (r?.subtype === "biz_bot_3p_disclosure") {
                        return true;
                    }
                }
                return !e.msgs.some(d);
            };
            n[1] = t;
            n[2] = e.msgs;
            n[3] = i;
        } else {
            i = n[3];
        }
        let l;
        if (n[4] !== t) {
            l = [
                t
            ];
            n[4] = t;
            n[5] = l;
        } else {
            l = n[5];
        }
        return r("useWAWebEventTargetValue")(e.msgs, a, i, l);
    }
    function d(e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION;
    }
    function m(e, t, n) {
        const r = u(e, n);
        const o = c(e, t);
        return r || o;
    }
    l.useShouldShowBotSuggestions = m;
}, 98);