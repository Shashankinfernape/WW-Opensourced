__d("useCometRouterLinkQueryPrefetcher", [
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "useCometRouterDispatcher",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { startTransition, useCallback, useRef } = s;
    const m = 3500;
    function p(e) {
        const t = o("react-compiler-runtime").c(18);
        const { delayCleanup, dispatcherExtras, href, isRouterLink, onQueryPreload, onQueryUsed } = e;
        const p = r("useCometRouterDispatcher")();
        const fRef = useRef(null);
        const g = r("useStable")(_);
        const hRef = useRef(null);
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = function() {
                const fRef_current = fRef.current;
                if (fRef_current) {
                    startTransition(function() {
                        fRef_current.cancel();
                    });
                    fRef.current = null;
                }
            };
            t[0] = y;
        } else {
            y = t[0];
        }
        const C = y;
        let b;
        if (t[1] !== delayCleanup) {
            b = function() {
                if (hRef.current != null) {
                    r("clearTimeout")(hRef.current);
                    hRef.current = null;
                }
                if (!delayCleanup) {
                    C();
                    return;
                }
                hRef.current = r("setTimeout")(function() {
                    hRef.current = null;
                    C();
                }, m);
            };
            t[1] = delayCleanup;
            t[2] = b;
        } else {
            b = t[2];
        }
        const cancelPrefetchRouteQueries = b;
        let S;
        if (t[3] !== onQueryUsed) {
            S = function() {
                const fRef_current = fRef.current;
                fRef.current = null;
                if (fRef_current != null) {
                    onQueryUsed();
                }
                return fRef_current;
            };
            t[3] = onQueryUsed;
            t[4] = S;
        } else {
            S = t[4];
        }
        const getPrefetchedQueryContainerAndMarkAsUsed = S;
        let L;
        if (t[5] !== p || t[6] !== dispatcherExtras || t[7] !== g || t[8] !== href || t[9] !== isRouterLink || t[10] !== onQueryPreload) {
            L = function() {
                if (p != null && href != null && isRouterLink && fRef.current == null) {
                    fRef.current = p.prefetchRouteQueries(href, dispatcherExtras ?? {}, g);
                    onQueryPreload();
                }
            };
            t[5] = p;
            t[6] = dispatcherExtras;
            t[7] = g;
            t[8] = href;
            t[9] = isRouterLink;
            t[10] = onQueryPreload;
            t[11] = L;
        } else {
            L = t[11];
        }
        const E = L;
        let k;
        if (t[12] !== E) {
            k = function() {
                if (hRef.current != null) {
                    r("clearTimeout")(hRef.current);
                    hRef.current = null;
                }
                E();
            };
            t[12] = E;
            t[13] = k;
        } else {
            k = t[13];
        }
        const prefetchRouteQueries = k;
        let T;
        if (t[14] !== cancelPrefetchRouteQueries || t[15] !== getPrefetchedQueryContainerAndMarkAsUsed || t[16] !== prefetchRouteQueries) {
            T = {
                cancelPrefetchRouteQueries,
                getPrefetchedQueryContainerAndMarkAsUsed,
                prefetchRouteQueries
            };
            t[14] = cancelPrefetchRouteQueries;
            t[15] = getPrefetchedQueryContainerAndMarkAsUsed;
            t[16] = prefetchRouteQueries;
            t[17] = T;
        } else {
            T = t[17];
        }
        return T;
    }
    function _() {
        return Symbol();
    }
    l.default = p;
}, 98);