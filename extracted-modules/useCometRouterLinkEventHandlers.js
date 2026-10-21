__d("useCometRouterLinkEventHandlers", [
    "ExecutionEnvironment",
    "ODS",
    "emptyFunction",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCometRouterLinkEventHandlersBase"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = s || (s = o("react"));
    const { useCallback, useMemo } = c;
    const p = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    function _(e) {
        "use no forget";
        const { dispatcherExtras, href, isRouterLink, onBlur, onFocus, onHoverEnd, onHoverMove, onHoverStart, onPress, onPressStart, onTransitionOptimistic, prefetchQueriesOnHover, prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING, preloadCodeOnMount, preventLocalNavigation, rel, target } = e;
        const L = prefetchQueriesOnHover === true ? "button_aggressive" : "button";
        const isRouterLink_1 = useMemo(function() {
            const e = !r("gkx")("20935") && rel != null && rel.match(p) != null;
            return isRouterLink && !e;
        }, [
            isRouterLink,
            rel
        ]);
        const onQueryPreload = useCallback(function() {
            (u || (u = o("ODS"))).bumpEntityKey(2994, "comet_preloading", `prefetch_route_queries.${L}.preloaded`);
        }, [
            L
        ]);
        const onQueryUsed = useCallback(function() {
            (u || (u = o("ODS"))).bumpEntityKey(2994, "comet_preloading", `prefetch_route_queries.${L}.used`);
        }, [
            L
        ]);
        const shouldTriggerNavOnPress = useCallback(function(e) {
            return !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        }, []);
        const D = r("useCometRouterLinkEventHandlersBase")({
            delayQueryCleanup: true,
            dispatcherExtras,
            href,
            isRouterLink: isRouterLink_1,
            onBlur,
            onFocus,
            onHoverEnd,
            onHoverMove,
            onHoverStart,
            onPress,
            onPressStart,
            onQueryPreload,
            onQueryUsed,
            onTransitionOptimistic,
            prefetchQueriesOnHover,
            prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING,
            preloadCodeOnMount,
            preventLocalNavigation,
            shouldTriggerNavOnPress,
            target
        });
        const { onBlur: onBlur_1, onFocus: onFocus_1, onHoverEnd: onHoverEnd_1, onHoverMove: onHoverMove_1, onHoverStart: onHoverStart_1, onPress: onPress_1, onPressStart: onPressStart_1 } = D;
        return {
            onBlur: onBlur_1,
            onFocus: onFocus_1,
            onHoverEnd: onHoverEnd_1,
            onHoverMove: onHoverMove_1,
            onHoverStart: onHoverStart_1,
            onPress: onPress_1,
            onPressStart: onPressStart_1
        };
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let a;
            n = {
                onBlur: a = r("emptyFunction"),
                onFocus: a,
                onHoverEnd: a,
                onHoverMove: a,
                onHoverStart: a,
                onPress: a,
                onPressStart: a
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        return n;
    }
    const g = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? _ : f;
    l.default = g;
}, 98);