__d("WAWebAppRootInteractionContext.react", [
    "CometHeroHoldTrigger.react",
    "CometHeroInteractionIDContext",
    "CometHeroInteractionWithDiv.react",
    "InteractionTracing",
    "getInteractionIDWithInheritance",
    "react",
    "react-compiler-runtime",
    "useWAWebCometInteractionTracing"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { use, useCallback, useMemo, useState } = u;
    const _ = {
        completeManuallyHoldInteraction: function() {},
        getActiveTrace: function() {},
        setManualInteractionHold: function() {},
        updateInteractionId: function() {}
    };
    const FContext = s.createContext(_);
    const g = {
        container: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            height: "x5yr21d",
            $$css: true
        }
    };
    function HComponent(e) {
        const t = o("react-compiler-runtime").c(26);
        const e_children = e.children;
        const a = use(r("CometHeroInteractionIDContext"));
        const i = useState(false);
        const hold = i[0];
        const setManualInteractionHold = i[1];
        const d = useState();
        const m = d[0];
        const _ = d[1];
        let h;
        if (t[0] !== m) {
            h = function() {
                if (m != null) {
                    return r("InteractionTracing").getPendingInteractionById(m);
                }
                return null;
            };
            t[0] = m;
            t[1] = h;
        } else {
            h = t[1];
        }
        const getActiveTrace = h;
        let C;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            C = function(t) {
                _(t);
            };
            t[2] = C;
        } else {
            C = t[2];
        }
        const updateInteractionId = C;
        let v;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            v = function() {
                setManualInteractionHold(false);
            };
            t[3] = v;
        } else {
            v = t[3];
        }
        const completeManuallyHoldInteraction = v;
        let R;
        if (t[4] !== getActiveTrace) {
            R = {
                completeManuallyHoldInteraction,
                getActiveTrace,
                setManualInteractionHold,
                updateInteractionId
            };
            t[4] = getActiveTrace;
            t[5] = R;
        } else {
            R = t[5];
        }
        const L = R;
        let E;
        let k;
        let interactionUUID;
        let interactionDesc;
        let D;
        if (t[6] !== L || t[7] !== m || t[8] !== a) {
            interactionUUID = r("getInteractionIDWithInheritance")(a, m);
            const P = interactionUUID != null ? r("InteractionTracing").getPendingInteractionById(interactionUUID) : null;
            k = FContext.Provider;
            D = L;
            E = r("CometHeroInteractionWithDiv.react");
            interactionDesc = P?.getTrace()?.tracePolicy ?? "AppRootInteraction";
            t[6] = L;
            t[7] = m;
            t[8] = a;
            t[9] = E;
            t[10] = k;
            t[11] = interactionUUID;
            t[12] = interactionDesc;
            t[13] = D;
        } else {
            E = t[9];
            k = t[10];
            interactionUUID = t[11];
            interactionDesc = t[12];
            D = t[13];
        }
        let N;
        if (t[14] !== hold) {
            N = s.jsx(r("CometHeroHoldTrigger.react"), {
                description: "AppRoot interaction hold",
                hold
            });
            t[14] = hold;
            t[15] = N;
        } else {
            N = t[15];
        }
        let M;
        if (t[16] !== E || t[17] !== e_children || t[18] !== interactionUUID || t[19] !== interactionDesc || t[20] !== N) {
            M = <E interactionDesc={interactionDesc} interactionUUID={interactionUUID} observeTextMutation pageletName="AppRoot" xstyle={g.container}>{N}{e_children}</E>;
            t[16] = E;
            t[17] = e_children;
            t[18] = interactionUUID;
            t[19] = interactionDesc;
            t[20] = N;
            t[21] = M;
        } else {
            M = t[21];
        }
        let w;
        if (t[22] !== k || t[23] !== D || t[24] !== M) {
            w = s.jsx(k, {
                value: D,
                children: M
            });
            t[22] = k;
            t[23] = D;
            t[24] = M;
            t[25] = w;
        } else {
            w = t[25];
        }
        return w;
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(12);
        const { manualHold, shouldUseNavigationAsInteraction, timeout, tracePolicy } = e;
        const s = manualHold === undefined ? false : manualHold;
        const u = shouldUseNavigationAsInteraction === undefined ? false : shouldUseNavigationAsInteraction;
        const d = timeout === undefined ? 60 : timeout;
        const m = use(FContext);
        const { setManualInteractionHold, updateInteractionId } = m;
        const g = r("useWAWebCometInteractionTracing")(tracePolicy, u, d);
        const { failInteraction, startInteraction } = g;
        let C;
        if (t[0] !== s || t[1] !== setManualInteractionHold || t[2] !== startInteraction || t[3] !== updateInteractionId) {
            C = function(t) {
                if (s) {
                    setManualInteractionHold(true);
                }
                startInteraction(function(e) {
                    updateInteractionId(e.getTraceId());
                    if (t) {
                        t(e);
                    }
                });
            };
            t[0] = s;
            t[1] = setManualInteractionHold;
            t[2] = startInteraction;
            t[3] = updateInteractionId;
            t[4] = C;
        } else {
            C = t[4];
        }
        const b = C;
        let v;
        if (t[5] !== s || t[6] !== setManualInteractionHold) {
            v = function() {
                if (s) {
                    setManualInteractionHold(false);
                }
            };
            t[5] = s;
            t[6] = setManualInteractionHold;
            t[7] = v;
        } else {
            v = t[7];
        }
        const stopInteraction = v;
        let R;
        if (t[8] !== failInteraction || t[9] !== b || t[10] !== stopInteraction) {
            R = {
                failInteraction,
                startInteraction: b,
                stopInteraction
            };
            t[8] = failInteraction;
            t[9] = b;
            t[10] = stopInteraction;
            t[11] = R;
        } else {
            R = t[11];
        }
        return R;
    }
    function C() {
        return use(FContext);
    }
    l.WAWebAppRootInteractionContextProvider = HComponent;
    l.useInteractionWithAppRootContext = y;
    l.useWAWebAppRootInteractionContext = C;
}, 98);