__d("useWAWebDrawerManagerEvents", [
    "Promise",
    "WADeepEquals",
    "WALogger",
    "WAWebDrawerContext",
    "WAWebDrawerManager.react",
    "WAWebDrawerResolver.react",
    "WAWebFocusTracer",
    "WAWebKeyboardTabUtils",
    "WAWebNonEmptyString",
    "react",
    "react-compiler-runtime",
    "uniqueID",
    "useWAWebStableCallback",
    "useWAWebUiIdle",
    "useWAWebWeakElementRef"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useMemo, useRef, useState } = d;
    const g = (t)=>{
        switch(t){
            case o("WAWebDrawerManager.react").Dir.LEFT:
            case o("WAWebDrawerManager.react").Dir.FULLSCREEN:
                return o("WAWebDrawerManager.react").Transition.LEFT;
            case o("WAWebDrawerManager.react").Dir.MID:
                return o("WAWebDrawerManager.react").Transition.MID;
            default:
                return o("WAWebDrawerManager.react").Transition.RIGHT;
        }
    };
    function useH(e, t) {
        const a = o("react-compiler-runtime").c(48);
        const i = r("useWAWebUiIdle")();
        const lRef = useRef(null);
        const u = r("useWAWebWeakElementRef")();
        const dRef = useRef(null);
        const mRef = useRef(false);
        const pRef = useRef(null);
        const hRef = useRef(0);
        const y = r("useWAWebStableCallback")(t);
        let C;
        if (a[0] !== e) {
            C = function() {
                return {
                    drawer: undefined,
                    drawerId: null,
                    transition: g(e),
                    uim: undefined,
                    noFocus: undefined,
                    onEnterAnimationComplete: undefined,
                    drawerContext: o("WAWebDrawerContext").undefinedDrawerContext,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                    disableRotateFocus: false,
                    disableExitAnimation: false,
                    focusOnUnMount: false
                };
            };
            a[0] = e;
            a[1] = C;
        } else {
            C = a[1];
        }
        const b = useState(C);
        const v = b[0];
        const S = b[1];
        const { disableExitAnimation, disableRotateFocus, drawer, drawerContext, drawerId, focusOnUnMount, focusType, noFocus, onEnterAnimationComplete, transition, uim } = v;
        let M;
        if (a[2] !== e || a[3] !== drawer || a[4] !== u || a[5] !== y || a[6] !== i) {
            M = function(descriptor, a = {}) {
                const t = a;
                const { transition, uim, noFocus, onEnterAnimationComplete, newDrawerContext, focusType, disableRotateFocus, focusOnUnMount, onGuardProceed, onGuardReject } = t;
                const transition_1 = transition === undefined ? g(e) : transition;
                const T = newDrawerContext === undefined ? o("WAWebDrawerContext").undefinedDrawerContext : newDrawerContext;
                const focusOnUnMount_1 = focusOnUnMount === undefined ? false : focusOnUnMount;
                let drawer_1;
                if (descriptor != null && typeof descriptor === "object" && "descriptorType" in descriptor) {
                    drawer_1 = c.jsx(r("WAWebDrawerResolver.react"), {
                        descriptor
                    });
                } else {
                    drawer_1 = descriptor;
                }
                const drawerId_1 = o("WAWebNonEmptyString").asMaybeNonEmptyString(r("uniqueID")(`DrawerManager${e}`));
                let P = null;
                if (focusOnUnMount_1) {
                    P = document.activeElement;
                }
                u.current = P;
                const N = ()=>{
                    S({
                        drawer: drawer_1,
                        drawerId: drawerId_1,
                        transition: transition_1,
                        uim,
                        noFocus,
                        onEnterAnimationComplete,
                        drawerContext: T,
                        focusType,
                        disableRotateFocus,
                        disableExitAnimation: false,
                        focusOnUnMount: focusOnUnMount_1
                    });
                };
                if (!mRef.current && drawer) {
                    if (drawer.key != null && o("WADeepEquals").deepEqual(drawer.key, drawer_1.key)) {
                        return true;
                    }
                    const M = ()=>{
                        y("updated");
                        dRef.current = o("WAWebDrawerManager.react").Transition.NONE;
                        N();
                        i(function() {
                            dRef.current = transition_1;
                        });
                    };
                    const w = pRef.current;
                    if (w != null) {
                        const A = hRef.current = hRef.current + 1;
                        w("replace").then((e)=>{
                            if (e && hRef.current === A) {
                                pRef.current = null;
                                M();
                                if (onGuardProceed != null) {
                                    onGuardProceed();
                                }
                            } else if (!(e || onGuardReject == null)) {
                                onGuardReject();
                            }
                        });
                        return false;
                    }
                    M();
                } else {
                    y("opened");
                    N();
                }
                return true;
            };
            a[2] = e;
            a[3] = drawer;
            a[4] = u;
            a[5] = y;
            a[6] = i;
            a[7] = M;
        } else {
            M = a[7];
        }
        const w = M;
        let A;
        if (a[8] !== e || a[9] !== focusOnUnMount || a[10] !== u || a[11] !== y || a[12] !== i) {
            A = function(n) {
                mRef.current = true;
                S(function(t) {
                    return babelHelpers.extends({}, t, {
                        drawer: undefined,
                        drawerContext: o("WAWebDrawerContext").undefinedDrawerContext,
                        disableExitAnimation: e === o("WAWebDrawerManager.react").Dir.LEFT && n?.isConflictingDrawerOpening === true
                    });
                });
                const t = n != null && n.isConflictingDrawerOpening ? "replaced" : "closed";
                y(t);
                i(function() {
                    mRef.current = false;
                });
                if (focusOnUnMount) {
                    const a = u?.current;
                    if (a instanceof HTMLElement || a instanceof SVGElement) {
                        r("WAWebFocusTracer").focus(a);
                    }
                }
            };
            a[8] = e;
            a[9] = focusOnUnMount;
            a[10] = u;
            a[11] = y;
            a[12] = i;
            a[13] = A;
        } else {
            A = a[13];
        }
        const F = A;
        const O = r("useWAWebStableCallback")(F);
        let B;
        if (a[14] !== drawer || a[15] !== drawerId || a[16] !== F || a[17] !== O) {
            B = function(t, n) {
                if (t != null && drawerId !== t || !drawer) {
                    return true;
                }
                const pRef_current = pRef.current;
                if (pRef_current != null) {
                    const r = n?.isConflictingDrawerOpening === true ? "conflict" : "close";
                    const o = hRef.current = hRef.current + 1;
                    pRef_current(r).then((e)=>{
                        if (e && hRef.current === o) {
                            pRef.current = null;
                            O(n);
                            if (!(n == null || n.onGuardProceed == null)) {
                                n.onGuardProceed();
                            }
                        } else if (!(e || n == null || n.onGuardReject == null)) {
                            n.onGuardReject();
                        }
                    });
                    return false;
                }
                F(n);
                return true;
            };
            a[14] = drawer;
            a[15] = drawerId;
            a[16] = F;
            a[17] = O;
            a[18] = B;
        } else {
            B = a[18];
        }
        const W = B;
        let q;
        if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
            q = function() {
                const t = lRef.current?.getElement();
                if (t) {
                    const n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t);
                    if (n) {
                        r("WAWebFocusTracer").focus(n);
                    }
                }
            };
            a[19] = q;
        } else {
            q = a[19];
        }
        const focusDrawer = q;
        let V;
        if (a[20] !== W || a[21] !== drawerId) {
            V = function() {
                W(drawerId);
            };
            a[20] = W;
            a[21] = drawerId;
            a[22] = V;
        } else {
            V = a[22];
        }
        const handleRequestDismiss = V;
        let G;
        if (a[23] === Symbol.for("react.memo_cache_sentinel")) {
            G = function(t) {
                pRef.current = t;
                return function() {
                    if (pRef.current === t) {
                        pRef.current = null;
                    }
                };
            };
            a[23] = G;
        } else {
            G = a[23];
        }
        const registerCloseGuard = G;
        let j;
        if (a[24] === Symbol.for("react.memo_cache_sentinel")) {
            j = function() {
                return pRef.current != null;
            };
            a[24] = j;
        } else {
            j = a[24];
        }
        const hasCloseGuard = j;
        const QRef = useRef(null);
        let X;
        if (a[25] === Symbol.for("react.memo_cache_sentinel")) {
            X = function() {
                if (QRef.current != null) {
                    QRef.current(false);
                    QRef.current = null;
                }
            };
            a[25] = X;
        } else {
            X = a[25];
        }
        const Y = X;
        let J;
        if (a[26] !== w) {
            J = function(t, r) {
                Y();
                return new (s || (s = n("Promise")))(function(e) {
                    const n = w(t, babelHelpers.extends({}, r, {
                        onGuardProceed: function() {
                            QRef.current = null;
                            e(true);
                        },
                        onGuardReject: function() {
                            QRef.current = null;
                            e(false);
                        }
                    }));
                    if (n) {
                        e(true);
                    } else {
                        QRef.current = e;
                    }
                });
            };
            a[26] = w;
            a[27] = J;
        } else {
            J = a[27];
        }
        const openDrawer = J;
        let ee;
        if (a[28] !== W) {
            ee = function(t, r) {
                Y();
                return new (s || (s = n("Promise")))(function(e) {
                    const n = W(t ?? null, babelHelpers.extends({}, r, {
                        onGuardProceed: function() {
                            QRef.current = null;
                            e(true);
                        },
                        onGuardReject: function() {
                            QRef.current = null;
                            e(false);
                        }
                    }));
                    if (n) {
                        e(true);
                    } else {
                        QRef.current = e;
                    }
                });
            };
            a[28] = W;
            a[29] = ee;
        } else {
            ee = a[29];
        }
        const closeDrawer = ee;
        let ne;
        if (a[30] !== drawer) {
            ne = function() {
                if (mRef.current === true) {
                    return false;
                }
                return !!drawer;
            };
            a[30] = drawer;
            a[31] = ne;
        } else {
            ne = a[31];
        }
        const existsDrawer = ne;
        let oe;
        if (a[32] === Symbol.for("react.memo_cache_sentinel")) {
            oe = function(t) {
                S(function(e) {
                    return babelHelpers.extends({}, e, {
                        drawerContext: t
                    });
                });
            };
            a[32] = oe;
        } else {
            oe = a[32];
        }
        const updateContext = oe;
        let ie;
        if (a[33] !== closeDrawer || a[34] !== disableExitAnimation || a[35] !== disableRotateFocus || a[36] !== drawer || a[37] !== drawerContext || a[38] !== drawerId || a[39] !== existsDrawer || a[40] !== focusType || a[41] !== handleRequestDismiss || a[42] !== noFocus || a[43] !== onEnterAnimationComplete || a[44] !== openDrawer || a[45] !== transition || a[46] !== uim) {
            ie = {
                drawer,
                drawerId,
                transition,
                uim,
                noFocus,
                onEnterAnimationComplete,
                drawerContext,
                focusType,
                disableRotateFocus,
                disableExitAnimation,
                uieRef: lRef,
                blockTransitionRef: dRef,
                handleRequestDismiss,
                openDrawer,
                closeDrawer,
                existsDrawer,
                focusDrawer,
                updateContext,
                registerCloseGuard,
                hasCloseGuard
            };
            a[33] = closeDrawer;
            a[34] = disableExitAnimation;
            a[35] = disableRotateFocus;
            a[36] = drawer;
            a[37] = drawerContext;
            a[38] = drawerId;
            a[39] = existsDrawer;
            a[40] = focusType;
            a[41] = handleRequestDismiss;
            a[42] = noFocus;
            a[43] = onEnterAnimationComplete;
            a[44] = openDrawer;
            a[45] = transition;
            a[46] = uim;
            a[47] = ie;
        } else {
            ie = a[47];
        }
        return ie;
    }
    l.useDrawerManagerEvents = useH;
}, 98);