__d("useCometPlaceholderImpl", [
    "CometSSRHydrationMarkerUtils",
    "CometSuspenseContext_DO_NOT_USE.react",
    "CometSuspenseHUD.react",
    "ExecutionEnvironment",
    "cr:22912",
    "cr:5128",
    "gkx",
    "hero-tracing-placeholder",
    "react",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useMemo, useRef, useState } = c;
    const f = n("cr:22912") || n("cr:5128");
    const g = r("gkx")("5486");
    function HComponent({ children, fallback, name, unstable_avoidThisFallback, unstable_defer, unstable_onSuspense }) {
        const desc = r("useStable")(function() {
            if (r("CometSuspenseHUD.react") && (e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                return t.document.createElement("div");
            }
            return null;
        });
        const CRef = useRef(null);
        const b = r("useStable")(o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID);
        const v = useState(null);
        const suspendedPromiseName = v[0];
        const R = v[1];
        let L = children;
        let E = fallback;
        if (o("CometSSRHydrationMarkerUtils").addMarkersToChildren != null && o("CometSSRHydrationMarkerUtils").addMarkersToFallback != null) {
            L = o("CometSSRHydrationMarkerUtils").addMarkersToChildren(L);
            E = o("CometSSRHydrationMarkerUtils").addMarkersToFallback(E);
        }
        const unstable_onSuspense_1 = useCallback(function(e, t) {
            if (g) {
                R(e);
            }
            if (desc != null) {
                desc.textContent = e;
            }
            CRef.current = e;
            if (!(f == null || f.trackSuspendedComponent == null)) {
                f.trackSuspendedComponent(e, b, t);
            }
            if (unstable_onSuspense) {
                unstable_onSuspense(e);
            }
        }, [
            desc,
            unstable_onSuspense,
            b
        ]);
        const value = useMemo(function() {
            return {
                isFallback: true,
                suspendedPromiseName
            };
        }, [
            suspendedPromiseName
        ]);
        let T = null;
        if (desc != null && r("CometSuspenseHUD.react") != null) {
            T = u.jsx(r("CometSuspenseHUD.react"), {
                desc
            });
        }
        const Component = r("CometSuspenseContext_DO_NOT_USE.react").Provider;
        const fallback_1 = <Component value={value}>{E}{T}</Component>;
        const x = L;
        const Component_1 = o("hero-tracing-placeholder").HeroPlaceholder;
        return <Component_1 fallback={fallback_1} name={name} placeholderUUID={b} unstable_avoidThisFallback={unstable_avoidThisFallback} unstable_defer={unstable_defer} unstable_onSuspense={unstable_onSuspense_1}>{x}</Component_1>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 98);