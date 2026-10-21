__d("FocusRegion.react", [
    "ActiveFocusRegionUtilsContext",
    "FocusManager",
    "FocusRegionType",
    "ReactEventHookPropagation",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "react",
    "setElementCanTab",
    "useUnsafeRef_DEPRECATED"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } = c;
    function h(e, t, n) {
        const document_activeElement = document.activeElement;
        window.requestAnimationFrame(function() {
            if (document.activeElement === document_activeElement) {
                o("FocusManager").focusElement(e, {
                    preventScroll: t,
                    focusWithoutUserIntent: n
                });
            }
        });
    }
    function y(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0;
    }
    function C(e) {
        return e.lastFocused != null && e.lastFocused instanceof Node && e.lastFocused.isConnected;
    }
    const UnstableScope = u.unstable_Scope;
    const v = new Map;
    function S({ autoRestoreFocus, autoFocusQuery, children, containFocusQuery, forwardRef, id, onEscapeFocusRegion, recoverFocusStrategy = o("FocusRegionType").RecoverFocusStrategy.Nearest, recoverFocusQuery, stopOnFocusWithinPropagation = true }) {
        const DRef = useRef(null);
        const xRef = useRef(null);
        const $ = useContext(r("ActiveFocusRegionUtilsContext"));
        const P = $ === null && (autoRestoreFocus === true || onEscapeFocusRegion != null) ? document.activeElement : null;
        const N = (e || (e = r("useUnsafeRef_DEPRECATED")))(P);
        const M = N.current ?? P;
        const w = useMemo(function() {
            return {
                lastFocused: null,
                scope: null,
                restorationFocusRegionItem: null,
                triggeredFocusRegionItems: new Set
            };
        }, []);
        const A = useCallback(function() {
            if ($ != null) {
                const e = $.getActiveFocusRegion();
                if (e !== w) {
                    if (w.restorationFocusRegionItem !== e) {
                        let t;
                        if (e?.lastFocused != null && !((t = DRef.current) != null && t.containsNode(e.lastFocused))) {
                            if (e != null) {
                                e.triggeredFocusRegionItems.add(w);
                            }
                            w.restorationFocusRegionItem = e;
                        } else if (w.restorationFocusRegionItem == null) {
                            const n = e?.restorationFocusRegionItem;
                            w.restorationFocusRegionItem = n;
                            if (e != null) {
                                if (n != null) {
                                    n.triggeredFocusRegionItems.delete(e);
                                }
                            }
                            if (n != null) {
                                n.triggeredFocusRegionItems.add(w);
                            }
                            $.setActiveFocusRegion(w);
                            return;
                        }
                    }
                    if (e === null || e != null && w != null && e.lastFocused !== w.lastFocused) {
                        $.setActiveFocusRegion(w);
                    }
                }
            }
        }, [
            $,
            w
        ]);
        const FRef = useRef(null);
        let O = useCallback(function(e) {
            DRef.current = e;
            w.scope = e;
            const FRef_current = FRef.current;
            if (forwardRef) {
                forwardRef.current = e;
            }
            if (FRef_current !== null && FRef_current !== id && v.get(FRef_current) === null) {
                v.delete(FRef_current);
            }
            if (id != null) {
                if (e !== null) {
                    FRef.current = id;
                    v.set(id, e);
                } else if (v.get(id) === null) {
                    v.delete(id);
                }
            }
        }, [
            forwardRef,
            id,
            w
        ]);
        O = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(O, useMemo(function() {
            return {
                onBeforeBlurWithin: function(t) {
                    const DRef_current = DRef.current;
                    if (DRef_current !== null && recoverFocusQuery !== undefined) {
                        t.stopPropagation();
                        if (recoverFocusQuery === null) {
                            return;
                        }
                        const n = t.target;
                        const recovery = o("FocusManager").getAllNodesFromOneOrManyQueries(recoverFocusQuery, DRef_current);
                        if (recovery === null) {
                            return;
                        }
                        const recoveryIndex = recovery.indexOf(n);
                        const i = n._tabIndexState;
                        xRef.current = {
                            detachedCanTab: i != null && i.canTab,
                            recoveryIndex,
                            recovery
                        };
                    }
                },
                onAfterBlurWithin: function() {
                    const DRef_current = DRef.current;
                    const xRef_current = xRef.current;
                    if (!C(w)) {
                        w.lastFocused = null;
                    }
                    xRef.current = null;
                    const document_activeElement = document.activeElement;
                    if (DRef_current !== null && recoverFocusQuery != null && xRef_current !== null && (document_activeElement == null || document_activeElement === document.body || !DRef_current.containsNode(document_activeElement))) {
                        const r = true;
                        const a = true;
                        const { recovery, recoveryIndex } = xRef_current;
                        const s = o("FocusManager").getAllNodesFromOneOrManyQueries(recoverFocusQuery, DRef_current);
                        if (s !== null && recovery !== null) {
                            const u = new Set(s);
                            const c = new Set(recovery);
                            for(let d = recoveryIndex - 1; d >= 0; d--){
                                const m = recovery[d];
                                if (u.has(m)) {
                                    const p = s.indexOf(m);
                                    const _ = p + 1;
                                    if (_ < s.length) {
                                        const f = s[_];
                                        if (!c.has(f)) {
                                            if (xRef_current.detachedCanTab) {
                                                o("setElementCanTab").setElementCanTab(f, true);
                                            }
                                            h(f, r, a);
                                            return;
                                        }
                                    }
                                    if (xRef_current.detachedCanTab) {
                                        o("setElementCanTab").setElementCanTab(m, true);
                                    }
                                    h(m, r, a);
                                    return;
                                }
                            }
                            if (recoverFocusStrategy === o("FocusRegionType").RecoverFocusStrategy.Nearest) {
                                for(let g = recoveryIndex + 1; g < recovery.length; g++){
                                    const y = recovery[g];
                                    if (u.has(y)) {
                                        const b = s.indexOf(y);
                                        const v = b - 1;
                                        if (v >= 0) {
                                            const S = s[v];
                                            if (xRef_current.detachedCanTab) {
                                                o("setElementCanTab").setElementCanTab(S, true);
                                            }
                                            h(S, r, a);
                                            return;
                                        }
                                    }
                                }
                            }
                            const R = o("FocusManager").getFirstNodeFromOneOrManyQueries(recoverFocusQuery, DRef_current);
                            if (R) {
                                if (xRef_current.detachedCanTab) {
                                    o("setElementCanTab").setElementCanTab(R, true);
                                }
                                h(R, r, a);
                            }
                        }
                    }
                },
                onFocusWithin: function(t) {
                    if (stopOnFocusWithinPropagation) {
                        o("ReactEventHookPropagation").stopEventHookPropagation(t, "useFocusWithin");
                    }
                    w.lastFocused = t.target;
                    A();
                }
            };
        }, [
            recoverFocusQuery,
            recoverFocusStrategy,
            stopOnFocusWithinPropagation,
            w,
            A
        ]));
        const B = useCallback(function() {
            const DRef_current = DRef.current;
            const document_activeElement = document.activeElement;
            if (autoFocusQuery != null && DRef_current !== null && (!document_activeElement || !DRef_current.containsNode(document_activeElement))) {
                const n = w.lastFocused;
                if (n != null && DRef_current.containsNode(n) && !y(n)) {
                    o("FocusManager").focusElement(n, {
                        focusWithAutoFocus: true,
                        focusWithoutUserIntent: true,
                        preventScroll: true
                    });
                } else {
                    o("FocusManager").focusFirst(autoFocusQuery, DRef_current, {
                        focusWithAutoFocus: true,
                        focusWithoutUserIntent: true,
                        preventScroll: true
                    });
                }
            }
        }, [
            autoFocusQuery,
            w
        ]);
        useLayoutEffect(B, [
            B
        ]);
        useEffect(B, [
            B
        ]);
        const W = useCallback(function(e, t = false) {
            const DRef_current = DRef.current;
            const document_activeElement = document.activeElement;
            const N_current = N.current;
            N.current = null;
            const d = e?.triggeredFocusRegionItems;
            const m = e?.restorationFocusRegionItem;
            if (d != null && d.size) {
                d.forEach((e)=>e.restorationFocusRegionItem = m);
            }
            if (e != null && m != null) {
                m.triggeredFocusRegionItems.delete(e);
                if (d != null && d.size) {
                    d.forEach((e)=>{
                        m.triggeredFocusRegionItems.add(e);
                    });
                }
            }
            w.lastFocused = null;
            const p = $?.getActiveFocusRegion();
            let _ = p != null ? p.restorationFocusRegionItem : {
                lastFocused: N_current
            };
            if (p === e) {
                if ($ != null) {
                    $.setActiveFocusRegion(m);
                }
            }
            if (_?.lastFocused && e.scope?.containsNode(_?.lastFocused) && _?.restorationFocusRegionItem?.lastFocused) {
                _ = _?.restorationFocusRegionItem;
            }
            const g = DRef_current !== null && document_activeElement !== null && DRef_current.containsNode(document_activeElement) || document_activeElement == null || document_activeElement === document.body;
            if ((autoRestoreFocus === true || onEscapeFocusRegion != null) && g) {
                const h = (t = false)=>{
                    if (_?.lastFocused != null) {
                        const n = true;
                        const r = true;
                        const a = document.activeElement;
                        if (t || a === null || a === document.body) {
                            o("FocusManager").focusElement(_?.lastFocused, {
                                preventScroll: n,
                                focusWithoutUserIntent: r
                            });
                        }
                    }
                };
                if (t) {
                    h(t);
                } else {
                    window.requestAnimationFrame(function() {
                        return h();
                    });
                }
            }
        }, [
            $,
            autoRestoreFocus,
            onEscapeFocusRegion,
            w
        ]);
        const q = useCallback(function() {
            W(w, true);
            if (onEscapeFocusRegion) {
                onEscapeFocusRegion();
            }
        }, [
            W,
            onEscapeFocusRegion,
            w
        ]);
        o("ReactKeyboardEvent.react").useKeyboard(DRef, useMemo(function() {
            return {
                onKeyDown: function(t) {
                    if (!(containFocusQuery == null || t.key !== "Tab" || t.isDefaultPrevented())) {
                        const e = DRef.current;
                        if (e !== null) {
                            if (t.shiftKey) {
                                o("FocusManager").focusPreviousContained(containFocusQuery, e, t, true, onEscapeFocusRegion != null ? q : undefined);
                            } else {
                                o("FocusManager").focusNextContained(containFocusQuery, e, t, true, onEscapeFocusRegion != null ? q : undefined);
                            }
                        }
                    }
                }
            };
        }, [
            containFocusQuery,
            q,
            onEscapeFocusRegion
        ]));
        useLayoutEffect(function() {
            N.current = M;
            const e = w;
            return function() {
                W(e);
            };
        }, [
            $,
            autoRestoreFocus,
            W,
            w,
            M
        ]);
        return <UnstableScope id={id} ref={O}>{children}</UnstableScope>;
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R(e, t, n) {
        const r = v.get(e);
        if (r) {
            const a = r.DO_NOT_USE_queryFirstNode(t);
            if (a !== null) {
                o("FocusManager").focusElement(a, {
                    preventScroll: n
                });
                return a;
            }
        }
        return null;
    }
    l.FocusRegion = S;
    l.focusRegionById = R;
}, 98);