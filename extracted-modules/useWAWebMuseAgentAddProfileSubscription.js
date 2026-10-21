__d("useWAWebMuseAgentAddProfileSubscription", [
    "WAWebBotProfileGetters",
    "WAWebBotUtils",
    "WAWebGroupAgentAddAttribution",
    "react-compiler-runtime",
    "useWAWebOptionalBotProfileValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const r = o("react-compiler-runtime").c(2);
        const a = e === "add" && t.length === 1 && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t[0]) ? t[0] : null;
        let i;
        if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebBotProfileGetters").getProduct
            ];
            r[0] = i;
        } else {
            i = r[0];
        }
        o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(a, i);
        let l;
        if (r[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebBotProfileGetters").getCreatorLid
            ];
            r[1] = l;
        } else {
            l = r[1];
        }
        o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(o("WAWebGroupAgentAddAttribution").groupAgentAddAttributionFromBody(n) === o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.OWNER ? null : a, l);
    }
    l.useMuseAgentAddProfileSubscription = e;
}, 98);