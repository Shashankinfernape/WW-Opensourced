__d("WAWebActionToast.react", [
    "WAAbortError",
    "WAPromiseDelays",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "err",
    "react",
    "uniqueID"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useMemo, useRef, useState } = u;
    const f = 5000;
    const g = {
        LEFT: "LEFT",
        RIGHT: "RIGHT"
    };
    const h = function(t, n) {
        if (!t) {
            throw r("err")("ActionType must have text!");
        }
        this.text = t;
        if (n) {
            this.action = n.actionText;
            this.handler = n.actionHandler;
            this.testid = n.testid;
        }
    };
    function y(e) {
        return o("WAWebNonEmptyString").asNonEmptyString(r("uniqueID")(o("WAWebNonEmptyString").asMaybeNonEmptyString(e) ?? "action_toast"));
    }
    function useC({ settleDuration = f, toastPosition = g.LEFT, initialAction, pendingAction, id = y(), onDismiss }) {
        const v = useState(initialAction);
        const S = v[0];
        const R = v[1];
        const L = useState(true);
        const E = L[0];
        const k = L[1];
        const IRef = useRef(null);
        const TRef = useRef(null);
        const DRef = useRef(null);
        const xRef = useRef(null);
        const $RefRef = useRef(false);
        useEffect(function() {
            const IRef_current = IRef.current;
            IRef.current = initialAction;
            if (initialAction !== IRef_current) {
                R(initialAction);
                k(true);
                $RefRef.current = false;
            }
        }, [
            initialAction
        ]);
        const P = useMemo(function() {
            return new AbortController;
        }, []);
        const P_signal = P.signal;
        const M = useCallback(function() {
            if (onDismiss != null) {
                onDismiss();
            }
            P.abort();
            o("WAWebToastManager").ToastManager.close(id);
        }, [
            onDismiss,
            id,
            P
        ]);
        const w = useCallback(function() {
            if (!$RefRef.current) {
                if (S && S.handler) {
                    $RefRef.current = true;
                    S.handler().catch(r("WAWebNoop"));
                    M();
                }
            }
        }, [
            S,
            M
        ]);
        const A = (pendingAction)=>{
            if (TRef.current) {
                TRef.current.controller.abort();
            }
            const controller = new AbortController;
            const e_signal = controller.signal;
            const i = pendingAction.then((e)=>{
                if (e_signal.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                R(e);
                k(false);
            }).catch((e)=>{
                if (e.name !== o("WAAbortError").ABORT_ERROR) {
                    R(e);
                    k(false);
                } else {
                    throw e;
                }
            }).then(()=>o("WAPromiseDelays").delayMs(settleDuration, P_signal)).then(()=>{
                if (e_signal.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                if (onDismiss != null) {
                    onDismiss();
                }
                o("WAWebToastManager").ToastManager.close(id);
            }).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
            TRef.current = {
                promise: i,
                controller
            };
        };
        useEffect(function() {
            A(pendingAction);
        }, [
            pendingAction
        ]);
        const F = useMemo(function() {
            if (S != null) {
                const { action, handler, testid } = S;
                if (action != null && handler != null) {
                    const Component = o("WAWebToast.react").ToastActionBtn;
                    return <Component buttonText={action} onClick={w} ref={DRef} testid={testid}/>;
                }
            }
            return null;
        }, [
            S,
            w
        ]);
        const O = useMemo(function() {
            if (E) {
                return null;
            }
            const Component = o("WAWebToast.react").ToastDismissBtn;
            return <Component onClick={M} ref={xRef}/>;
        }, [
            M,
            E
        ]);
        const focusButtonRef = useMemo(function() {
            if (F) {
                return DRef;
            }
            if (O) {
                return xRef;
            }
            return null;
        }, [
            F,
            O
        ]);
        if (S) {
            return s.jsx(o("WAWebToast.react").ToastBody, {
                toastPosition,
                actionText: S.text,
                actionButtons: F ?? undefined,
                dismissButton: O ?? undefined,
                focusButtonRef
            });
        }
        return null;
    }
    useC.displayName = `${useC.name} [from ${i.id}]`;
    l.ToastPosition = g;
    l.ActionType = h;
    l.genId = y;
    l.ActionToast = useC;
}, 98);