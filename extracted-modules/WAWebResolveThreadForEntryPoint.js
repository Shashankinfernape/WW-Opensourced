__d("WAWebResolveThreadForEntryPoint", [
    "WAWebAiThreadCreationUtils",
    "WAWebBotGating",
    "WAWebImplicitThreadRoutingStrategy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("WAWebBotGating").getImplicitThreadRoutingStrategy();
        switch(t){
            case o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy.DefaultThread:
                return o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
            case o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy.MostRecentThread:
                {
                    const a = e.aiThreads?.getFirstActivated();
                    return a?.id ?? o("WAWebAiThreadCreationUtils").createAiThreadId(e.id);
                }
            default:
                return o("WAWebAiThreadCreationUtils").createAiThreadId(e.id);
        }
    }
    function s(e) {
        return e.key.id === o("WAWebAiThreadCreationUtils").HISTORICAL_META_AI_THREAD_KEY_ID;
    }
    l.resolveThreadIdForEntryPoint = e;
    l.isDefaultThread = s;
}, 98);