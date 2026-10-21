__d("useWAWebBotModeSelection", [
    "WAWebAiThreadGetters",
    "WAWebBotModeSelectionTypes",
    "WAWebMaybeGetBotModeSelection",
    "react",
    "react-compiler-runtime",
    "useWAWebAiThreadValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    const d = [
        o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
    ];
    function m(e, t) {
        const r = o("react-compiler-runtime").c(3);
        let a;
        if (r[0] !== e || r[1] !== t) {
            a = t != null ? e.aiThreads?.get(t) : null;
            r[0] = e;
            r[1] = t;
            r[2] = a;
        } else {
            a = r[2];
        }
        const s = o("useWAWebAiThreadValues").useOptionalAiThreadValues(a, [
            o("WAWebAiThreadGetters").getBotModeSelection
        ]) ?? [
            null
        ];
        const u = s[0];
        const m = p;
        const _ = useSyncExternalStore(o("WAWebMaybeGetBotModeSelection").subscribeToBotModeSelection, m);
        if (t != null && u != null) {
            return u;
        }
        return _ ?? d;
    }
    function p() {
        return o("WAWebMaybeGetBotModeSelection").getInMemoryBotMode() ?? d;
    }
    l.useWAWebBotModeSelection = m;
}, 98);