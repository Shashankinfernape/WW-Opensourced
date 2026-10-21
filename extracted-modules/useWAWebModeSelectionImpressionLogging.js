__d("useWAWebModeSelectionImpressionLogging", [
    "WAWebBotJourneyLogger",
    "react",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function u() {
        const e = o("react-compiler-runtime").c(1);
        const tRef = useRef(false);
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                onVisible: function() {
                    if (!tRef.current) {
                        o("WAWebBotJourneyLogger").BotJourneyLogger.logModeSelectionImpression();
                        tRef.current = true;
                    }
                }
            };
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = r("useVisibility")(n);
        const i = a[0];
        return i;
    }
    l.useWAWebModeSelectionImpressionLogging = u;
}, 98);