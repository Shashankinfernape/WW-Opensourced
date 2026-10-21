__d("useCometRouterLinkEventHandlersBase", [
    "JSScheduler",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "useCometPreloader",
    "useCometRouterDispatcher",
    "useCometRouterLinkQueryPrefetcher"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "onNavigate_DEPRECATED_FIXME"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const { startTransition, useCallback, useEffect, useRef } = c;
    function useF(t) {
        const n = o("react-compiler-runtime").c(72);
        const { delayQueryCleanup, dispatcherExtras, href, isRouterLink, onBlur, onFocus, onHoverEnd, onHoverMove, onHoverStart, onNonRouterPress, onPress, onPressStart, onQueryPreload, onQueryUsed, onTransitionOptimistic, prefetchQueriesOnHover, prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING, preloadCodeOnMount, preventLocalNavigation, shouldTriggerNavOnPress, target } = t;
        const delayCleanup = delayQueryCleanup === undefined ? false : delayQueryCleanup;
        const isRouterLink_1 = isRouterLink && preventLocalNavigation !== true && (target == null || target === "_self");
        const P = prefetchQueriesOnHover === true ? "button_aggressive" : "button";
        const N = r("useCometRouterDispatcher")();
        const MRef = useRef(null);
        const wRef = useRef(null);
        let A;
        if (n[0] !== dispatcherExtras) {
            A = dispatcherExtras ?? {};
            n[0] = dispatcherExtras;
            n[1] = A;
        } else {
            A = n[1];
        }
        let F;
        let O;
        if (n[2] !== A) {
            const B = A;
            O = B.onNavigate_DEPRECATED_FIXME;
            F = babelHelpers.objectWithoutPropertiesLoose(B, e);
            n[2] = A;
            n[3] = F;
            n[4] = O;
        } else {
            F = n[3];
            O = n[4];
        }
        let W;
        if (n[5] !== delayCleanup || n[6] !== F || n[7] !== href || n[8] !== isRouterLink_1 || n[9] !== onQueryPreload || n[10] !== onQueryUsed) {
            W = {
                delayCleanup,
                dispatcherExtras: F,
                href,
                isRouterLink: isRouterLink_1,
                onQueryPreload,
                onQueryUsed
            };
            n[5] = delayCleanup;
            n[6] = F;
            n[7] = href;
            n[8] = isRouterLink_1;
            n[9] = onQueryPreload;
            n[10] = onQueryUsed;
            n[11] = W;
        } else {
            W = n[11];
        }
        const q = r("useCometRouterLinkQueryPrefetcher")(W);
        const { cancelPrefetchRouteQueries, getPrefetchedQueryContainerAndMarkAsUsed, prefetchRouteQueries } = q;
        let G;
        if (n[12] !== N || n[13] !== dispatcherExtras || n[14] !== O || n[15] !== getPrefetchedQueryContainerAndMarkAsUsed || n[16] !== href || n[17] !== isRouterLink_1 || n[18] !== onNonRouterPress || n[19] !== onTransitionOptimistic || n[20] !== shouldTriggerNavOnPress) {
            G = function(t) {
                if (shouldTriggerNavOnPress(t)) {
                    if (!isRouterLink_1) {
                        onNonRouterPress?.(t);
                    } else if (N && href != null) {
                        const prefetcher = getPrefetchedQueryContainerAndMarkAsUsed();
                        const r = t?.nativeEvent;
                        N.go(href, babelHelpers.extends({
                            eventTimestamp: r?.timestamp ?? t.timeStamp,
                            onNavigate_DEPRECATED_FIXME: function(t) {
                                prefetcher?.cancel();
                                O?.(t);
                            },
                            onTransitionOptimistic,
                            prefetcher
                        }, dispatcherExtras));
                    }
                }
            };
            n[12] = N;
            n[13] = dispatcherExtras;
            n[14] = O;
            n[15] = getPrefetchedQueryContainerAndMarkAsUsed;
            n[16] = href;
            n[17] = isRouterLink_1;
            n[18] = onNonRouterPress;
            n[19] = onTransitionOptimistic;
            n[20] = shouldTriggerNavOnPress;
            n[21] = G;
        } else {
            G = n[21];
        }
        const z = G;
        let j;
        if (n[22] !== z || n[23] !== onTransitionOptimistic || n[24] !== onPress) {
            j = function(t) {
                onPress?.(t);
                startTransition(function() {
                    onTransitionOptimistic?.();
                    z(t);
                });
            };
            n[22] = z;
            n[23] = onTransitionOptimistic;
            n[24] = onPress;
            n[25] = j;
        } else {
            j = n[25];
        }
        const K = j;
        const Q = dispatcherExtras?.target;
        let X;
        if (n[26] !== N || n[27] !== href || n[28] !== isRouterLink_1 || n[29] !== Q) {
            X = function() {
                if (href != null && MRef.current !== href && isRouterLink_1) {
                    (s || (s = r("JSScheduler"))).scheduleSpeculativeCallback(function() {
                        if (N != null && MRef.current !== href) {
                            MRef.current = href;
                            N.preloadRouteCode(href, Q);
                        }
                    });
                }
            };
            n[26] = N;
            n[27] = href;
            n[28] = isRouterLink_1;
            n[29] = Q;
            n[30] = X;
        } else {
            X = n[30];
        }
        const Y = X;
        const J = r("useCometPreloader")(P, Y, prefetchRouteQueries, prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING === true ? r("emptyFunction") : cancelPrefetchRouteQueries);
        const { onFocusInPreloader, onFocusOutPreloader, onHighIntentPreloader, onHoverInPreloader, onHoverMovePreloader, onHoverOutPreloader, onPressInPreloader } = J;
        let ie;
        if (n[31] !== href || n[32] !== isRouterLink_1 || n[33] !== onHighIntentPreloader) {
            ie = function() {
                if (href != null && wRef.current !== href && isRouterLink_1) {
                    wRef.current = href;
                    onHighIntentPreloader(true);
                }
            };
            n[31] = href;
            n[32] = isRouterLink_1;
            n[33] = onHighIntentPreloader;
            n[34] = ie;
        } else {
            ie = n[34];
        }
        const le = ie;
        let se;
        if (n[35] !== onPressInPreloader || n[36] !== onPressStart) {
            se = function(t) {
                onPressStart?.(t);
                onPressInPreloader(t);
            };
            n[35] = onPressInPreloader;
            n[36] = onPressStart;
            n[37] = se;
        } else {
            se = n[37];
        }
        const ue = se;
        let ce;
        if (n[38] !== isRouterLink_1 || n[39] !== onHoverInPreloader || n[40] !== onHoverStart) {
            ce = function(t) {
                onHoverStart?.(t);
                if (isRouterLink_1) {
                    onHoverInPreloader(t);
                }
            };
            n[38] = isRouterLink_1;
            n[39] = onHoverInPreloader;
            n[40] = onHoverStart;
            n[41] = ce;
        } else {
            ce = n[41];
        }
        const de = ce;
        let me;
        if (n[42] !== onHoverMovePreloader || n[43] !== onHoverMove) {
            me = function(t) {
                onHoverMove?.(t);
                onHoverMovePreloader(t);
            };
            n[42] = onHoverMovePreloader;
            n[43] = onHoverMove;
            n[44] = me;
        } else {
            me = n[44];
        }
        const pe = me;
        let _e;
        if (n[45] !== onHoverOutPreloader || n[46] !== onHoverEnd) {
            _e = function(t) {
                onHoverEnd?.(t);
                onHoverOutPreloader();
            };
            n[45] = onHoverOutPreloader;
            n[46] = onHoverEnd;
            n[47] = _e;
        } else {
            _e = n[47];
        }
        const fe = _e;
        let ge;
        if (n[48] !== isRouterLink_1 || n[49] !== onFocusInPreloader || n[50] !== onFocus) {
            ge = function(t) {
                onFocus?.(t);
                if (isRouterLink_1) {
                    onFocusInPreloader(t);
                }
            };
            n[48] = isRouterLink_1;
            n[49] = onFocusInPreloader;
            n[50] = onFocus;
            n[51] = ge;
        } else {
            ge = n[51];
        }
        const he = ge;
        let ye;
        if (n[52] !== onFocusOutPreloader || n[53] !== onBlur) {
            ye = function(t) {
                onBlur?.(t);
                onFocusOutPreloader();
            };
            n[52] = onFocusOutPreloader;
            n[53] = onBlur;
            n[54] = ye;
        } else {
            ye = n[54];
        }
        const Ce = ye;
        let be;
        let ve;
        if (n[55] !== N || n[56] !== href || n[57] !== isRouterLink_1 || n[58] !== le || n[59] !== prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING || n[60] !== preloadCodeOnMount || n[61] !== Y) {
            be = function() {
                if (href != null && isRouterLink_1) {
                    if (prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING === true) {
                        le();
                    } else if (preloadCodeOnMount === true) {
                        Y();
                    } else {
                        (s || (s = r("JSScheduler"))).scheduleSpeculativeCallback(function() {
                            N?.prefetchRouteDefinition(href);
                        });
                    }
                }
            };
            ve = [
                N,
                href,
                isRouterLink_1,
                le,
                prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING,
                preloadCodeOnMount,
                Y
            ];
            n[55] = N;
            n[56] = href;
            n[57] = isRouterLink_1;
            n[58] = le;
            n[59] = prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING;
            n[60] = preloadCodeOnMount;
            n[61] = Y;
            n[62] = be;
            n[63] = ve;
        } else {
            be = n[62];
            ve = n[63];
        }
        useEffect(be, ve);
        let Se;
        if (n[64] !== Ce || n[65] !== he || n[66] !== fe || n[67] !== pe || n[68] !== de || n[69] !== K || n[70] !== ue) {
            Se = {
                onBlur: Ce,
                onFocus: he,
                onHoverEnd: fe,
                onHoverMove: pe,
                onHoverStart: de,
                onPress: K,
                onPressStart: ue
            };
            n[64] = Ce;
            n[65] = he;
            n[66] = fe;
            n[67] = pe;
            n[68] = de;
            n[69] = K;
            n[70] = ue;
            n[71] = Se;
        } else {
            Se = n[71];
        }
        return Se;
    }
    l.default = useF;
}, 98);