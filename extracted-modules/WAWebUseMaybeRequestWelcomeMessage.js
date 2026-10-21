__d("WAWebUseMaybeRequestWelcomeMessage", [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebFrontendChatGetters",
    "WAWebSendBotRequestWelcomeAction",
    "WAWebTos",
    "WAWebUseBusinessProfile.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendChatGetters").getHasRequestedWelcomeMsg
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e.id, a);
        const l = i[0];
        const u = o("WAWebBotBaseGating").isBizBot1pEnabled() || o("WAWebBotGating").isBizBot3pAvailable() ? e.id : null;
        o("WAWebUseBusinessProfile.react").useBusinessProfile(u);
        const c = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(u, [
            o("WAWebBusinessProfileGetters").getWelcomeMsgProtocolMode,
            o("WAWebBusinessProfileGetters").getIsBizBot1p
        ]) ?? [
            null,
            null
        ];
        const d = c[0];
        const m = c[1];
        const p = m === true;
        let _;
        if (n[1] !== l) {
            _ = function(t, n, r) {
                const e = r != null && r !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
                if ((o("WAWebBotBaseGating").isBizBot1pEnabled() && n || o("WAWebBotGating").isBizBot3pAvailable() && e) && o("WAWebBotTos").hasAcceptedBizBotTos() && !l) {
                    o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(t);
                }
            };
            n[1] = l;
            n[2] = _;
        } else {
            _ = n[2];
        }
        const f = r("useWAWebStableCallback")(_);
        let g;
        if (n[3] !== e || n[4] !== p || n[5] !== f || n[6] !== d) {
            g = function() {
                f(e, p, d);
            };
            n[3] = e;
            n[4] = p;
            n[5] = f;
            n[6] = d;
            n[7] = g;
        } else {
            g = n[7];
        }
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", g);
        let h;
        let y;
        if (n[8] !== e || n[9] !== p || n[10] !== f || n[11] !== d) {
            h = function() {
                f(e, p, d);
            };
            y = [
                e,
                p,
                d,
                f
            ];
            n[8] = e;
            n[9] = p;
            n[10] = f;
            n[11] = d;
            n[12] = h;
            n[13] = y;
        } else {
            h = n[12];
            y = n[13];
        }
        useEffect(h, y);
    }
    l.useMaybeRequestWelcomeMessage = u;
}, 98);