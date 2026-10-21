__d("WAWebForwardedAiBotMessageInfoHeader.react", [
    "WAWebBotUtils",
    "WAWebForwardedBotDisplayName",
    "WAWebForwardedInfoHeaderLink.react",
    "WAWebMsgGetters",
    "WAWebTeeLockNameRow.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedAiBotMessageClickHandler",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getForwardedAiBotMessageInfo
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        const u = o("useWAWebForwardedAiBotMessageClickHandler").useForwardedAiBotMessageClickHandler(e_msgKey);
        if (u == null || l == null || o("WAWebBotUtils").isHatchBot(l.botId)) {
            return null;
        }
        let c;
        if (t[1] !== l) {
            c = o("WAWebForwardedBotDisplayName").getForwardedBotDisplayName(l);
            t[1] = l;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        let m;
        if (t[3] !== u || t[4] !== d) {
            const Component = r("WAWebForwardedInfoHeaderLink.react");
            m = <Component onClick={u} testId="forwarded-ai-bot-info">{d}</Component>;
            t[3] = u;
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        const p = m;
        if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(l.botId)) {
            let _;
            if (t[6] !== p) {
                const Component = r("WAWebTeeLockNameRow.react");
                _ = <Component>{p}</Component>;
                t[6] = p;
                t[7] = _;
            } else {
                _ = t[7];
            }
            return _;
        }
        return null;
    }
    l.default = u;
}, 98);