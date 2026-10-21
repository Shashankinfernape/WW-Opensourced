__d("useWAWebDynamicModesCacheWarmup", [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebGetDynamicAIModesAction",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        useEffect(function() {
            if (!(!o("WAWebBotUtils").isMetaAiBot(e.id) || !o("WAWebBotBaseGating").isDynamicModeSelectorEnabled())) {
                o("WAWebGetDynamicAIModesAction").getDynamicAIModesAction();
            }
        }, []);
    }
    l.useWAWebDynamicModesCacheWarmup = u;
}, 98);