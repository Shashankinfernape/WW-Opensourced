__d("useWAWebFlow", [
    "$InternalEnum",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useMemo, useReducer, useRef } = c;
    const g = {
        container: {
            height: "x5yr21d",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "xh8yej3",
            $$css: true
        }
    };
    function h() {
        function TComponent(t) {
            const n = o("react-compiler-runtime").c(22);
            let a;
            let i;
            if (n[0] !== t) {
                i = t.ref;
                a = babelHelpers.objectWithoutPropertiesLoose(t, e);
                n[0] = t;
                n[1] = a;
                n[2] = i;
            } else {
                a = n[1];
                i = n[2];
            }
            const l = a;
            const { children, displayName, flow } = l;
            const m = displayName === undefined ? "FlowDrawer" : displayName;
            const { activeKey, pop, transition } = flow;
            if (children == null) {
                return null;
            }
            let h;
            if (n[3] !== a) {
                h = function() {
                    if (a.requestFocus) {
                        a.requestFocus();
                    }
                };
                n[3] = a;
                n[4] = h;
            } else {
                h = n[4];
            }
            const y = h;
            let C;
            if (n[5] !== pop || n[6] !== a) {
                C = function(t) {
                    if (a.requestDismiss) {
                        a.requestDismiss(t);
                    } else {
                        pop();
                    }
                };
                n[5] = pop;
                n[6] = a;
                n[7] = C;
            } else {
                C = n[7];
            }
            const b = C;
            const v = `${m}-${activeKey}`;
            let S;
            if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
                S = {
                    className: "x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3"
                };
                n[8] = S;
            } else {
                S = n[8];
            }
            const R = `${m}-${activeKey}`;
            let L;
            if (n[9] !== children || n[10] !== b || n[11] !== y || n[12] !== R) {
                const Component = o("WAWebUimUie.react").UIE;
                L = <Component displayName={R} escapable requestFocus={y} requestDismiss={b}>{children}</Component>;
                n[9] = children;
                n[10] = b;
                n[11] = y;
                n[12] = R;
                n[13] = L;
            } else {
                L = n[13];
            }
            let E;
            if (n[14] !== activeKey || n[15] !== L) {
                E = <div key={activeKey} {...babelHelpers.extends({}, S, {
                    children: L
                })}/>;
                n[14] = activeKey;
                n[15] = L;
                n[16] = E;
            } else {
                E = n[16];
            }
            let k;
            if (n[17] !== i || n[18] !== v || n[19] !== E || n[20] !== transition) {
                const Component = r("WAWebVelocityTransitionGroup");
                k = <Component ref={i} transitionName={transition} xstyle={g.container} displayName={v}>{E}</Component>;
                n[17] = i;
                n[18] = v;
                n[19] = E;
                n[20] = transition;
                n[21] = k;
            } else {
                k = n[21];
            }
            return k;
        }
        return TComponent;
    }
    const y = n("$InternalEnum").Mirrored([
        "DrawerLeft",
        "DrawerRight",
        "Modal",
        "None"
    ]);
    function C({ initialStack, initialStep, initialTransition }) {
        let o = [];
        if (initialStack != null && initialStack.length > 0) {
            o = [].concat(initialStack);
        } else if (initialStep != null) {
            o = [
                initialStep
            ];
        }
        return {
            stack: o,
            previousStep: o.length > 1 ? o[o.length - 2] : null,
            transition: initialTransition,
            activeKey: o.length > 0 ? o.length : 1,
            ended: false,
            isPushed: true
        };
    }
    function b(e, t) {
        switch(t.type){
            case "transition":
                return babelHelpers.extends({}, e, {
                    transition: t.payload?.transition ?? e.transition
                });
            case "push":
                if (t.payload?.step == null) {
                    return e;
                }
                return babelHelpers.extends({}, e, {
                    previousStep: e.stack[e.stack.length - 1],
                    stack: e.stack.concat(t.payload.step),
                    activeKey: e.activeKey + 1,
                    ended: false,
                    isPushed: true
                });
            case "pop":
                {
                    const l = t.payload?.count ?? 1;
                    const s = e.stack.slice(0, -l);
                    if (s.length >= 1) {
                        return babelHelpers.extends({}, e, {
                            previousStep: e.stack[e.stack.length - 1],
                            stack: s,
                            activeKey: e.activeKey - l,
                            isPushed: false
                        });
                    }
                    if (e.ended) {
                        return e;
                    }
                    return babelHelpers.extends({}, e, {
                        ended: true
                    });
                }
            default:
                return e;
        }
    }
    function useV(initialStep, t) {
        const n = r("useWAWebUIM")();
        const { transitions = y.None, onEnd, initialStack } = t || {};
        const u = S(transitions);
        const { popTransition, pushTransition } = u;
        const v = useReducer(b, {
            initialStep,
            initialTransition: pushTransition,
            initialStack
        }, C);
        const R = v[0];
        const L = v[1];
        const ERef = useRef(null);
        const k = useCallback(function(transition) {
            L({
                type: "transition",
                payload: {
                    transition
                }
            });
        }, []);
        const push = useCallback(function(step, t = pushTransition) {
            k(t);
            const ERef_current = ERef.current;
            ERef.current = function() {
                ERef_current?.();
                L({
                    type: "push",
                    payload: {
                        step
                    }
                });
            };
        }, [
            pushTransition,
            k
        ]);
        const pop = useCallback(function(e = popTransition, t = 1) {
            k(e);
            ERef.current = function() {
                return L({
                    type: "pop",
                    payload: {
                        count: t
                    }
                });
            };
        }, [
            popTransition,
            k
        ]);
        useEffect(function() {
            if (ERef.current != null) {
                ERef.current();
                ERef.current = null;
            }
        }, undefined);
        const end = r("useWAWebStableCallback")(function(e) {
            if (onEnd) {
                onEnd(e);
            } else {
                r("nullthrows")(n).requestDismiss(e);
            }
        });
        const stackSize = r("useWAWebStableCallback")(function() {
            return R.stack.length;
        });
        useEffect(function() {
            if (R.ended) {
                end();
            }
        }, [
            end,
            R.ended
        ]);
        const $ = useMemo(function() {
            return h();
        }, []);
        const P = {
            push,
            pop,
            end,
            stackSize,
            step: R.stack[R.stack.length - 1],
            previousStep: R.previousStep,
            transition: R.transition,
            activeKey: R.activeKey,
            isPushed: R.isPushed
        };
        return [
            $,
            P
        ];
    }
    function S(transitions) {
        switch(transitions){
            case y.DrawerLeft:
                return {
                    pushTransition: "flow-transition-drawer-pop",
                    popTransition: "flow-transition-drawer-push"
                };
            case y.DrawerRight:
                return {
                    pushTransition: "flow-transition-drawer-push",
                    popTransition: "flow-transition-drawer-pop"
                };
            case y.Modal:
                return {
                    pushTransition: "flow-transition-modal-push",
                    popTransition: "flow-transition-modal-pop"
                };
            case y.None:
                return {
                    pushTransition: "none",
                    popTransition: "none"
                };
        }
    }
    l.FlowTransitions = y;
    l.useFlow = useV;
}, 98);