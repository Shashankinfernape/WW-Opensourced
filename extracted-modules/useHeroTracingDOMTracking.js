__d("useHeroTracingDOMTracking", [
    "HeroTracingCoreDependencies",
    "mergeRefs",
    "react",
    "react-compiler-runtime",
    "usePageletVCTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useMemo = (s || (s = o("react"))).useMemo;
    function c(t) {
        const n = o("react-compiler-runtime").c(11);
        const { alwaysMarkMutationRootAsVisualChange, interactionUUID, isMutationRoot, name, observeTextMutation, pageletName, pageletType, position, trackTailLoad, vcCallback } = t;
        let f;
        if (n[0] !== alwaysMarkMutationRootAsVisualChange || n[1] !== interactionUUID || n[2] !== isMutationRoot || n[3] !== name || n[4] !== observeTextMutation || n[5] !== pageletType || n[6] !== vcCallback) {
            f = {
                interactionUUID,
                isMutationRoot,
                observeTextMutation,
                pageletName: name,
                pageletType,
                vcCallback,
                alwaysMarkMutationRootAsVisualChange
            };
            n[0] = alwaysMarkMutationRootAsVisualChange;
            n[1] = interactionUUID;
            n[2] = isMutationRoot;
            n[3] = name;
            n[4] = observeTextMutation;
            n[5] = pageletType;
            n[6] = vcCallback;
            n[7] = f;
        } else {
            f = n[7];
        }
        const g = r("usePageletVCTracker")(f);
        const h = (e || (e = r("HeroTracingCoreDependencies"))).useTailLoadPageletTracker(pageletName, position, trackTailLoad);
        let y;
        if (n[8] !== g || n[9] !== h) {
            y = r("mergeRefs")(g, h);
            n[8] = g;
            n[9] = h;
            n[10] = y;
        } else {
            y = n[10];
        }
        return y;
    }
    l.default = c;
}, 98);