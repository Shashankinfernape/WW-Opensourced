__d("useWAWebUiIdle", [
    "WAAbortError",
    "WAWebDocumentFlushed",
    "WAWebNoop",
    "WAWebUiIdleEventBus",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u() {
        const e = o("react-compiler-runtime").c(3);
        const t = o("useWAWebListener").useAddListenerOnce();
        const n = t[0];
        const signal = r("useWAWebUnmountSignal")();
        let i;
        if (e[0] !== n || e[1] !== signal) {
            i = function(t) {
                if (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy) {
                    n(o("WAWebUiIdleEventBus").UiIdleEventBus, "ui_idle", t);
                    return;
                }
                o("WAWebDocumentFlushed").documentFlushed({
                    signal
                }).then(()=>{
                    t();
                }).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
            };
            e[0] = n;
            e[1] = signal;
            e[2] = i;
        } else {
            i = e[2];
        }
        return i;
    }
    l.default = u;
}, 98);