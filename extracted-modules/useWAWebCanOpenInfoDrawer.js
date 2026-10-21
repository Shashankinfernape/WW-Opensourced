__d("useWAWebCanOpenInfoDrawer", [
    "WAWebAck",
    "WAWebAgentModelUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let r;
            n = [
                (r = o("WAWebMsgGetters")).getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getAsAlbum,
                o("WAWebFrontendMsgGetters").getAsCallLog,
                r.getIsSentByMe,
                o("WAWebFrontendMsgGetters").getAsRevoked,
                r.getAck,
                r.getCtwaContext,
                r.getType,
                r.getIsMdHistoryMsg,
                r.getAgentId,
                r.getSubtype
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, n);
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const u = a[3];
        const c = a[4];
        const d = a[5];
        const m = a[6];
        const msgType = a[7];
        const _ = a[8];
        const f = a[9];
        const msgSubtype = a[10];
        if (i || l || s || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: m?.automatedGreetingMessageShown,
            msgSource: m?.sourceApp,
            msgSubtype,
            msgType
        })) {
            return false;
        }
        if (u && !c) {
            const h = d != null && d < o("WAWebAck").ACK.SENT;
            if (!h && (!_ || o("WAWebAgentModelUtils").canUserSeeMessageAttribution() && f != null)) {
                return true;
            }
        }
        return false;
    }
    l.default = e;
}, 98);