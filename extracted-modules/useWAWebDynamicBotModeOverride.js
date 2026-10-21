__d("useWAWebDynamicBotModeOverride", [
    "WAWebAiThreadGetters",
    "WAWebDynamicAIModesCache",
    "WAWebMaybeGetBotModeSelection",
    "react",
    "useWAWebAiThreadValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    function d(e, t) {
        const a = t != null ? e.aiThreads?.get(t) : null;
        const i = o("useWAWebAiThreadValues").useOptionalAiThreadValues(a, [
            o("WAWebAiThreadGetters").getBotModeOverride
        ]) ?? [
            null
        ];
        const l = i[0];
        const s = useCallback(function() {
            return o("WAWebMaybeGetBotModeSelection").getInMemoryBotModeOverride();
        }, []);
        const d = useSyncExternalStore(o("WAWebMaybeGetBotModeSelection").subscribeToBotModeSelection, s);
        const m = t != null && l != null ? l : d;
        const p = m != null && m.length > 0 ? m[0] : null;
        if (p == null) {
            return null;
        }
        const _ = o("WAWebDynamicAIModesCache").getCachedDynamicAIModeById(p);
        return _ ?? null;
    }
    l.useWAWebDynamicBotModeOverride = d;
}, 98);