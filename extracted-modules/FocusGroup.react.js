__d("FocusGroup.react", [
    "FocusManager",
    "Locale",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "focusKeyboardEventPropagation",
    "react",
    "setElementCanTab"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useMemo, useRef } = u;
    const p = 5;
    function _(e) {
        return e.length === 1;
    }
    function f(e, t, n, preventScroll) {
        o("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(n);
        const a = t.DO_NOT_USE_queryFirstNode(e);
        if (a !== null) {
            if (document.activeElement != null) {
                o("setElementCanTab").setElementCanTab(document.activeElement, false);
            }
            o("setElementCanTab").setElementCanTab(a, true);
            o("FocusManager").focusElement(a, {
                preventScroll
            });
            n.preventDefault();
        }
    }
    function g(e, { onNavigate }, n, r, o, a) {
        if (onNavigate && r) {
            let l = false;
            const currentIndex = h(r, o);
            const u = {
                currentIndex,
                event: n,
                focusItem: function(t, r) {
                    const current = t.scopeRef.current;
                    if (current) {
                        f(r || a, current, n);
                    }
                },
                getItem: function(t) {
                    return v(r, t);
                },
                getItemByTag: function(t) {
                    const r_length = r.length;
                    let n = currentIndex + 1;
                    while(true){
                        if (n === currentIndex) {
                            return null;
                        }
                        if (n > r_length - 1) {
                            n = 0;
                            continue;
                        }
                        const o = r[n];
                        if (o) {
                            const { disabled, scopeRef, tag } = o;
                            const u = scopeRef.current;
                            if (u && disabled !== true && tag === t) {
                                return o;
                            }
                        }
                        n++;
                    }
                    return null;
                },
                preventDefault: function() {
                    l = true;
                },
                type: e
            };
            onNavigate(u);
            if (l) {
                return true;
            }
        }
        return false;
    }
    function h(e, t) {
        for(let n = 0; n < e.length; n++){
            const r = e[n];
            if (r && r.scopeRef.current === t) {
                return n;
            }
        }
        return -1;
    }
    function y(e, t, n) {
        const current = e.scopeRef.current;
        if (current === null) {
            return null;
        }
        if (n !== null) {
            const o = h(n, t);
            const a = e.wrap;
            const i = S(n, o - 1);
            if (!i && a === true) {
                return S(n, n.length - 1);
            }
            return i;
        }
        return null;
    }
    function C(e, t, n) {
        const current = e.scopeRef.current;
        if (current === null) {
            return null;
        }
        if (n.length > 0) {
            const o = h(n, t);
            const a = e.wrap;
            const i = b(n, o + 1);
            if (!i && a === true) {
                return b(n, 0);
            }
            return i;
        }
        return null;
    }
    function b(e, t) {
        const e_length = e.length;
        if (t > e_length) {
            return null;
        }
        for(let r = t; r < e_length;){
            const o = e[r];
            if (o !== null && o.disabled !== true) {
                return o.scopeRef.current;
            }
            r++;
        }
        return null;
    }
    function v(e, t) {
        for(let n = t; n >= 0;){
            const r = e[n];
            if (r !== null && r.disabled !== true) {
                return r;
            }
            n--;
        }
        return null;
    }
    function S(e, t) {
        const n = v(e, t);
        if (n) {
            return n.scopeRef.current;
        }
        return null;
    }
    function R({ altKey, ctrlKey, metaKey, shiftKey }) {
        return altKey === true || ctrlKey === true || metaKey === true || shiftKey === true;
    }
    function L(e) {
        const UnstableScope = s.unstable_Scope;
        const NContext = s.createContext(null);
        const RContext = s.createContext(null);
        function AComponent({ allowModifiers, children, onNavigate, orientation, pageJumpSize = p, preventScrollOnFocus = false, tabScopeQuery, wrap }) {
            const bRef = useRef(null);
            const v = useMemo(function() {
                return {
                    scopeRef: bRef,
                    orientation,
                    wrap,
                    tabScopeQuery,
                    allowModifiers,
                    pageJumpSize,
                    preventScrollOnFocus,
                    onNavigate
                };
            }, [
                orientation,
                wrap,
                tabScopeQuery,
                allowModifiers,
                pageJumpSize,
                preventScrollOnFocus,
                onNavigate
            ]);
            const SRef = useRef(false);
            const R = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(bRef, useMemo(function() {
                return {
                    onFocusWithin: function(n) {
                        if (!SRef.current) {
                            SRef.current = true;
                            if (bRef.current && e) {
                                l(bRef.current, e);
                                o("setElementCanTab").setElementCanTab(n.target, true);
                            }
                        }
                    }
                };
            }, [
                SRef
            ]));
            return <NContext.Provider value={v}>{<UnstableScope ref={R}>{children}</UnstableScope>}</NContext.Provider>;
        }
        AComponent.displayName = `${AComponent.name} [from ${i.id}]`;
        function l(e, t) {
            const document_activeElement = document.activeElement;
            const r = e.DO_NOT_USE_queryAllNodes(t);
            if (r !== null) {
                for (const i of r){
                    if (i !== document_activeElement) {
                        o("setElementCanTab").setElementCanTab(i, false);
                    } else {
                        o("setElementCanTab").setElementCanTab(i, true);
                    }
                }
            }
        }
        function u({ children, disabled, tag }) {
            const vRef = useRef(null);
            const L = useContext(NContext);
            o("ReactKeyboardEvent.react").useKeyboard(vRef, useMemo(function() {
                return {
                    onKeyDown: function(n) {
                        if (!o("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(n)) {
                            const t = vRef.current;
                            if (t !== null && L !== null) {
                                const a = L.orientation === "vertical" || L.orientation === "both";
                                const i = L.orientation === "horizontal" || L.orientation === "both";
                                const s = L.scopeRef.current;
                                const u = n.key;
                                const c = L.preventScrollOnFocus;
                                if (u === "Tab" && s !== null) {
                                    const d = L.tabScopeQuery;
                                    if (d) {
                                        if (L.onNavigate) {
                                            const m = s.getChildContextValues(RContext);
                                            if (g("TAB", L, n, m, t, d)) {
                                                return;
                                            }
                                        }
                                        l(s, d);
                                    }
                                    return;
                                }
                                if (R(n)) {
                                    const p = L.allowModifiers;
                                    if (p !== true) {
                                        return;
                                    }
                                }
                                if (s === null) {
                                    return;
                                }
                                let E = u;
                                if (o("Locale").isRTL()) {
                                    if (u === "ArrowRight") {
                                        E = "ArrowLeft";
                                    } else if (u === "ArrowLeft") {
                                        E = "ArrowRight";
                                    }
                                }
                                switch(E){
                                    case "Home":
                                        {
                                            const k = s.getChildContextValues(RContext);
                                            if (g("HOME", L, n, k, t, e)) {
                                                return;
                                            }
                                            const I = b(k, 0);
                                            if (I) {
                                                f(e, I, n, c);
                                                return;
                                            }
                                            break;
                                        }
                                    case "End":
                                        {
                                            const T = s.getChildContextValues(RContext);
                                            if (g("END", L, n, T, t, e)) {
                                                return;
                                            }
                                            const D = S(T, T.length - 1);
                                            if (D) {
                                                f(e, D, n, c);
                                                return;
                                            }
                                            break;
                                        }
                                    case "PageUp":
                                        {
                                            const x = s.getChildContextValues(RContext);
                                            if (g("PAGE_UP", L, n, x, t, e)) {
                                                return;
                                            }
                                            const $ = L.pageJumpSize;
                                            const P = h(x, t);
                                            const N = b(x, Math.max(0, P - $));
                                            if (N) {
                                                f(e, N, n, c);
                                                return;
                                            }
                                            break;
                                        }
                                    case "PageDown":
                                        {
                                            const M = s.getChildContextValues(RContext);
                                            if (g("PAGE_DOWN", L, n, M, t, e)) {
                                                return;
                                            }
                                            const w = L.pageJumpSize;
                                            const A = h(M, t);
                                            const F = S(M, Math.min(M.length - 1, A + w));
                                            if (F) {
                                                f(e, F, n, c);
                                                return;
                                            }
                                            break;
                                        }
                                    case "ArrowUp":
                                        {
                                            if (a) {
                                                const O = s.getChildContextValues(RContext);
                                                if (g("PREV_ITEM", L, n, O, t, e)) {
                                                    return;
                                                }
                                                const B = n.metaKey || n.ctrlKey ? b(O, 0) : y(L, t, O);
                                                if (B) {
                                                    f(e, B, n, c);
                                                    return;
                                                }
                                            }
                                            break;
                                        }
                                    case "ArrowDown":
                                        {
                                            if (a) {
                                                const W = s.getChildContextValues(RContext);
                                                if (g("NEXT_ITEM", L, n, W, t, e)) {
                                                    return;
                                                }
                                                const q = n.metaKey || n.ctrlKey ? S(W, W.length - 1) : C(L, t, W);
                                                if (q) {
                                                    f(e, q, n, c);
                                                    return;
                                                }
                                            }
                                            break;
                                        }
                                    case "ArrowLeft":
                                        {
                                            if (i) {
                                                const U = s.getChildContextValues(RContext);
                                                if (g("PREV_ITEM", L, n, U, t, e)) {
                                                    return;
                                                }
                                                const V = n.metaKey || n.ctrlKey ? b(U, 0) : y(L, t, U);
                                                if (V) {
                                                    f(e, V, n, c);
                                                    return;
                                                }
                                            }
                                            break;
                                        }
                                    case "ArrowRight":
                                        {
                                            if (i) {
                                                const H = s.getChildContextValues(RContext);
                                                if (g("NEXT_ITEM", L, n, H, t, e)) {
                                                    return;
                                                }
                                                const G = n.metaKey || n.ctrlKey ? S(H, H.length - 1) : C(L, t, H);
                                                if (G) {
                                                    f(e, G, n, c);
                                                }
                                            }
                                            break;
                                        }
                                    default:
                                        if (_(u) && L.onNavigate) {
                                            const z = s.getChildContextValues(RContext);
                                            g("PRINT_CHAR", L, n, z, t, e);
                                        }
                                }
                            }
                        }
                    }
                };
            }, [
                L
            ]));
            const E = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(vRef, useMemo(function() {
                return {
                    onFocusWithin: function(n) {
                        if (e != null) {
                            const r = vRef.current?.DO_NOT_USE_queryFirstNode(e);
                            const a = n.target === r;
                            if (a && r && !o("setElementCanTab").canElementTab(r)) {
                                const i = L?.scopeRef.current;
                                if (i) {
                                    l(i, e);
                                }
                            }
                        }
                    }
                };
            }, [
                L?.scopeRef
            ]));
            const k = {
                scopeRef: vRef,
                disabled,
                tag
            };
            return <RContext.Provider value={k}>{<UnstableScope ref={E}>{children}</UnstableScope>}</RContext.Provider>;
        }
        u.displayName = `${u.name} [from ${i.id}]`;
        return [
            AComponent,
            u
        ];
    }
    l.createFocusGroup = L;
}, 98);