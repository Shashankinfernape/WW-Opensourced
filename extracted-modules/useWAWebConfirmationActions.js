__d("useWAWebConfirmationActions", [
    "Promise",
    "WAPromiseLoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useRef, useState } = c;
    function useComponent(t, r, a) {
        const i = useState(false);
        const isRunningAction = i[0];
        const s = i[1];
        const c = useState(false);
        const actionFailure = c[0];
        const f = c[1];
        const gRef = useRef(t);
        const h = useState(null);
        const failureText = h[0];
        const C = h[1];
        const b = useCallback(function() {
            const e = o("WAWebToast.react").genId();
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: a,
                id: e
            }));
        }, [
            a
        ]);
        const runActions = useCallback(function() {
            s(true);
            const gRef_current = gRef.current;
            o("WAPromiseLoop").promiseLoop((()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(r) {
                    const o = gRef_current[0];
                    const { action, errorMessage, onError, onSuccess } = o;
                    try {
                        yield action();
                        onSuccess?.();
                        gRef_current.shift();
                        if (gRef_current.length === 0) {
                            r();
                        }
                    } catch (error) {
                        return (e || (e = n("Promise"))).reject({
                            error,
                            errorMessage,
                            onError
                        });
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })()).then(()=>{
                f(false);
                b();
                r();
            }).catch(({ error, errorMessage, onError })=>{
                f(true);
                C(errorMessage);
                onError?.(error);
            }).finally(()=>{
                s(false);
            });
        }, [
            r,
            b
        ]);
        return {
            actionFailure,
            failureText,
            isRunningAction,
            runActions
        };
    }
    l.default = useComponent;
}, 98);