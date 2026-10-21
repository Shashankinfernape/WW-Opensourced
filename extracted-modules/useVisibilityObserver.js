__d("useVisibilityObserver", [
    "react-compiler-runtime",
    "useViewportDuration"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const LITE = 0;
    const MODERATE = [
        0,
        0.25,
        0.5,
        0.75,
        1
    ];
    const EXPENSIVE = [
        0,
        0.05,
        0.1,
        0.15,
        0.2,
        0.25,
        0.3,
        0.35,
        0.4,
        0.45,
        0.5,
        0.55,
        0.6,
        0.65,
        0.7,
        0.75,
        0.8,
        0.85,
        0.9,
        0.95,
        1
    ];
    const c = {
        EXPENSIVE,
        LITE,
        MODERATE
    };
    function d(e) {
        const n = o("react-compiler-runtime").c(7);
        const { onHidden, onIntersection, onVisibilityDurationUpdated, onVisible, options } = e;
        const d = c[options?.thresholdOverride ?? "LITE"];
        let m;
        if (n[0] !== onHidden || n[1] !== onIntersection || n[2] !== onVisibilityDurationUpdated || n[3] !== onVisible || n[4] !== options || n[5] !== d) {
            m = {
                onHidden,
                onIntersection,
                onVisibilityDurationUpdated,
                onVisible,
                options,
                threshold: d
            };
            n[0] = onHidden;
            n[1] = onIntersection;
            n[2] = onVisibilityDurationUpdated;
            n[3] = onVisible;
            n[4] = options;
            n[5] = d;
            n[6] = m;
        } else {
            m = n[6];
        }
        return r("useViewportDuration")(m);
    }
    l.default = d;
}, 98);