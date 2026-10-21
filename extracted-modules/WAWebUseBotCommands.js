__d("WAWebUseBotCommands", [
    "WAWebBotBaseGating",
    "WAWebBotProfileGetters",
    "WAWebBusinessProfileGetters",
    "WAWebMsgGetters",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebMsgValues",
    "useWAWebOptionalBotProfileValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = s(e);
        const n = u(e);
        return t || n;
    }
    function s(e) {
        let n;
        if (!o("WAWebMsgGetters").getIsGroupMsg(e.unsafe())) {
            n = o("WAWebUserPrefsMeUser").isMeAccount(e.from) ? e.to : e.from;
        }
        o("WAWebUseBusinessProfile.react").useBusinessProfile(n);
        const r = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(n, [
            o("WAWebBusinessProfileGetters").getCommands
        ]) ?? [];
        const a = r[0];
        return a;
    }
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (e.id.remote.isBot()) {
            n = e.id.remote;
        } else {
            n = e.invokedBotWid;
        }
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMsgGetters").getIsBotQuery
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e.id, r);
        const i = a[0];
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebBotProfileGetters").getCommands
            ];
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(n, l);
        const u = s[0];
        if (!o("WAWebBotBaseGating").isBotEnabled() || !i) {
            return null;
        }
        return u;
    }
    l.useBotCommands = e;
}, 98);