__d("HeroPagelet.react", [
    "HeroReactProfiler.react",
    "HeroTracingPlatformDependencies",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "mergeRefs",
    "performanceNow",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useContext, useLayoutEffect, useMemo, useRef } = c;
    function HeroPagelet({ ref, alwaysMarkMutationRootAsVisualChange, children, isMutationRoot, name, observeTextMutation, onVisuallyComplete, pageletName, pageletType, position, trackTailLoad }) {
        const v = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const interactionUUID = useContext(o("hero-tracing-placeholder").HeroInteractionIDContext);
        const R = useMemo(function() {
            return babelHelpers.extends({}, v, {
                pageletStack: [].concat(v.pageletStack, [
                    name
                ])
            });
        }, [
            v,
            name
        ]);
        const L = useMemo(function() {
            return (e || (e = r("performanceNow")))();
        }, [
            interactionUUID
        ]);
        const E = useCallback(function() {
            if (interactionUUID != null) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(interactionUUID, `Queue_${name}`, "VisualCompletion", L);
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(interactionUUID, `Render_${name}`, "VisualCompletion", (e || (e = r("performanceNow")))());
            }
            return null;
        }, [
            interactionUUID,
            name,
            L
        ]);
        const k = useCallback(function(e, t) {
            if (interactionUUID != null) {
                R.logPageletVC(interactionUUID, L, e, t, R.pageletStack);
            }
            const r = interactionUUID != null ? o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(interactionUUID)?.vcTracker?.startTime : null;
            onVisuallyComplete?.(e, t, r);
        }, [
            interactionUUID,
            R,
            onVisuallyComplete,
            L
        ]);
        const I = r("HeroTracingPlatformDependencies").useHostInstanceTracking({
            vcCallback: k,
            isMutationRoot,
            interactionUUID,
            name,
            pageletName,
            observeTextMutation,
            pageletType,
            position,
            trackTailLoad,
            alwaysMarkMutationRootAsVisualChange
        });
        const TRef = useRef(null);
        const DRef = useRef(null);
        const x = useMemo(function() {
            return r("mergeRefs")(I, ref, TRef);
        }, [
            I,
            ref
        ]);
        if (isMutationRoot === true && alwaysMarkMutationRootAsVisualChange === false && interactionUUID != null && DRef.current !== interactionUUID) {
            const P = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(interactionUUID)?.vcTracker;
            if (TRef.current != null && P) {
                P.observeMutation(TRef.current);
                DRef.current = interactionUUID;
            }
        }
        useLayoutEffect(function() {
            if (isMutationRoot === true && alwaysMarkMutationRootAsVisualChange === false && interactionUUID != null && DRef.current !== interactionUUID) {
                DRef.current = interactionUUID;
            }
        }, [
            alwaysMarkMutationRootAsVisualChange,
            DRef,
            interactionUUID,
            isMutationRoot
        ]);
        const Component = r("HeroReactProfiler.react");
        const Component_1 = o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider;
        return <Component_1 value={R}><Component id={name} isPagelet>{children(x, E)}</Component></Component_1>;
    }
    HeroPagelet.displayName = `${HeroPagelet.name} [from ${i.id}]`;
    HeroPagelet.displayName = "HeroPagelet";
    l.default = HeroPagelet;
}, 98);