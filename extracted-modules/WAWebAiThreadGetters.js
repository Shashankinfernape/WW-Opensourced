__d("WAWebAiThreadGetters", [
    "fbt",
    "WAWebAiThreadCreationUtils",
    "WAWebBotGating",
    "WAWebGetters",
    "WAWebGettersCaches",
    "isStringNotNullAndNotWhitespaceOnly"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createAiThreadCache
    });
    const { clearCacheFor, computed, field } = e;
    const m = clearCacheFor;
    const p = field("id");
    const _ = field("title");
    const f = field("botModeSelection");
    const g = field("botModeOverride");
    const h = computed(function([t, n]) {
        if (t.equals(o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId())) {
            if (o("WAWebBotGating").isDefaultThreadRoutingEnabled()) {
                return s._("Meta AI");
            }
            if (!r("isStringNotNullAndNotWhitespaceOnly")(n)) {
                return s._("Older chats");
            }
        }
        if (r("isStringNotNullAndNotWhitespaceOnly")(n)) {
            return n;
        }
        return s._("Untitled chat");
    }, [
        p,
        _
    ]);
    l.clearAiThreadGetterCacheFor = m;
    l.getBotModeSelection = f;
    l.getBotModeOverride = g;
    l.getDisplayTitle = h;
}, 226);