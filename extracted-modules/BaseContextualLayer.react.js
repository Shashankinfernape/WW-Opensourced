__d("BaseContextualLayer.react", [
    "BaseContextualLayerAnchorRoot.react",
    "BaseContextualLayerAnchorRootContext",
    "BaseContextualLayerAvailableHeightContext",
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerDefaultContainer.react",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BaseLinkNestedPressableContext",
    "BasePortal.react",
    "BaseScrollableAreaContext",
    "BaseViewportMarginsContext",
    "FDSTextContext",
    "FocusRegion.react",
    "HiddenSubtreeContext",
    "LayoutAnimationBoundaryContext",
    "LayoutAnimationEvents",
    "Locale",
    "calculateBaseContextualLayerPosition",
    "focusScopeQueries",
    "getComputedStyle",
    "gkx",
    "isElementFixedOrSticky",
    "justknobx",
    "mergeRefs",
    "react",
    "useLayoutAnimationEvents",
    "useResizeObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "align",
        "anchorRef",
        "disableAutoAlign",
        "children",
        "containFocus",
        "customContainer",
        "disableAutoFlip",
        "hidden",
        "imperativeRef",
        "onEscapeFocusRegion",
        "onIndeterminatePosition",
        "ownerDocument",
        "presencePayload",
        "reflowToPosition",
        "position",
        "restoreFocus",
        "shouldPrerender",
        "stopClickPropagation",
        "xstyle",
        "disablePositioning_DO_NOT_USE"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } = d;
    function v(e) {
        const t = e.getBoundingClientRect();
        return {
            bottom: t.bottom,
            left: t.left,
            right: t.right,
            top: t.top
        };
    }
    function S() {
        const n = document.documentElement?.scrollHeight ?? 0;
        const window_innerHeight = window.innerHeight;
        const o = n - window_innerHeight;
        return Math.max(0, o - window.pageYOffset);
    }
    function R(e) {
        return e[e.length - 1]?.getDOMNode()?.scrollTop ?? window.pageYOffset;
    }
    function L(e) {
        const t = (s || (s = r("getComputedStyle")))(e);
        if (t != null && t.getPropertyValue("position") !== "static") {
            return e;
        }
        return e instanceof HTMLElement && e.offsetParent || e.ownerDocument.documentElement;
    }
    const E = 8;
    const k = 40;
    const I = 145;
    function T(acc, t) {
        if (acc.bottom < t.top || t.bottom < acc.top || acc.right < t.left || t.right < t.left) {
            return null;
        }
        return {
            bottom: Math.min(acc.bottom, t.bottom),
            left: Math.max(acc.left, t.left),
            right: Math.min(acc.right, t.right),
            top: Math.max(acc.top, t.top)
        };
    }
    const D = o("Locale").isRTL();
    const x = {
        root: {
            left: "xu96u03",
            insetInlineStart: null,
            insetInlineEnd: null,
            marginRight: "xm80bdy",
            marginInlineStart: null,
            marginInlineEnd: null,
            position: "x10l6tqk",
            top: "x13vifvy",
            $$css: true
        },
        rootReflowToPosition: {
            marginRight: "x1yf7rl7",
            marginInlineStart: null,
            marginInlineEnd: null,
            top: "x80663w",
            $$css: true
        }
    };
    function $(position) {
        return {
            adjustment: null,
            availableHeight: null,
            contextSize: null,
            isPositionIndeterminate: false,
            position
        };
    }
    function P(e, t) {
        switch(t.type){
            case "determine_direction":
                if (e.position !== t.position || e.availableHeight !== t.availableHeight) {
                    return babelHelpers.extends({}, e, {
                        availableHeight: t.availableHeight,
                        position: t.position
                    });
                }
                break;
            case "reposition":
                if (e.adjustment !== t.adjustment || e.contextSize?.height !== t.contextSize?.height || e.contextSize?.width !== t.contextSize?.width) {
                    return babelHelpers.extends({}, e, {
                        adjustment: t.adjustment,
                        contextSize: t.contextSize,
                        isPositionIndeterminate: false
                    });
                }
                break;
            case "position_indeterminate":
                return babelHelpers.extends({}, e, {
                    isPositionIndeterminate: true
                });
            case "position_changed":
                if (e.position !== t.position) {
                    return babelHelpers.extends({}, e, {
                        position: t.position
                    });
                }
                break;
        }
        return e;
    }
    function NComponent(t) {
        "use no forget";
        const { ref, align } = t;
        const l = align === undefined ? "start" : align;
        const { anchorRef, disableAutoAlign } = t;
        const d = disableAutoAlign === undefined ? false : disableAutoAlign;
        const { children, containFocus } = t;
        const w = containFocus === undefined ? false : containFocus;
        const t_customContainer = t.customContainer;
        const F = t_customContainer === undefined ? r("BaseContextualLayerDefaultContainer.react") : t_customContainer;
        const t_disableAutoFlip = t.disableAutoFlip;
        const B = t_disableAutoFlip === undefined ? false : t_disableAutoFlip;
        const t_hidden = t.hidden;
        const q = t_hidden === undefined ? false : t_hidden;
        const { imperativeRef, onEscapeFocusRegion, onIndeterminatePosition, ownerDocument, presencePayload, reflowToPosition } = t;
        const K = reflowToPosition === undefined ? false : reflowToPosition;
        const t_position = t.position;
        const X = t_position === undefined ? "below" : t_position;
        const t_restoreFocus = t.restoreFocus;
        const J = t_restoreFocus === undefined ? true : t_restoreFocus;
        const t_shouldPrerender = t.shouldPrerender;
        const shouldPrerender = t_shouldPrerender === undefined ? false : t_shouldPrerender;
        const t_stopClickPropagation = t.stopClickPropagation;
        const stopClickPropagation = t_stopClickPropagation === undefined ? false : t_stopClickPropagation;
        const { xstyle, disablePositioning_DO_NOT_USE } = t;
        const ae = disablePositioning_DO_NOT_USE === undefined ? false : disablePositioning_DO_NOT_USE;
        const ie = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const le = X === "auto" ? "below" : X;
        const se = useReducer(P, le, $);
        const ue = se[0];
        const { adjustment, availableHeight, contextSize, isPositionIndeterminate, position } = ue;
        const fe = se[1];
        const ge = useContext(r("BaseContextualLayerAnchorRootContext"));
        const he = useContext(r("BaseScrollableAreaContext"));
        const ye = K ? true : B;
        const Ce = K ? true : d;
        const be = useContext(r("BaseViewportMarginsContext"));
        const ve = useContext(r("LayoutAnimationBoundaryContext"));
        const Se = useState(false);
        const Re = Se[0];
        const Le = Se[1];
        const Ee = useContext(r("HiddenSubtreeContext"));
        const Ee_hidden = Ee.hidden;
        const Ie = Ee_hidden || q;
        const TeRef = useRef(null);
        const DeRef = useRef(null);
        const xeRef = useRef(null);
        const $e = useCallback(function() {
            if (ie.context_DEPRECATED == null && ie.contextRef != null) {
                return ie.contextRef.current;
            }
            return ie.context_DEPRECATED;
        }, [
            ie.contextRef,
            ie.context_DEPRECATED
        ]);
        const Pe = useCallback(function() {
            const e = ownerDocument ?? document;
            const e_documentElement = e.documentElement;
            if (e_documentElement != null) {
                return {
                    bottom: e_documentElement.clientHeight - be.bottom - E,
                    left: be.left + E,
                    right: e_documentElement.clientWidth - be.right - E,
                    top: be.top + E
                };
            }
        }, [
            ownerDocument,
            be.bottom,
            be.left,
            be.right,
            be.top
        ]);
        const Ne = useCallback(function() {
            const TeRef_current = TeRef.current;
            const t = $e();
            const n = Pe();
            if (!(TeRef_current == null || t == null || n == null)) {
                const o = v(t);
                const a = v(TeRef_current);
                const i = a.bottom - a.top;
                const l = a.right - a.left;
                const u = D ? "start" : "end";
                const c = D ? "end" : "start";
                let d = position;
                let availableHeight_1 = null;
                if (!ye) {
                    if (position === "above" || position === "below") {
                        const p = o.top - i < n.top && o.bottom + i < n.bottom;
                        const _ = o.bottom + i > n.bottom && o.top - i > n.top;
                        if (position === "above" && R(he) + o.top < i && p || position === "above" && p) {
                            d = "below";
                        } else if (position === "below" && _) {
                            d = "above";
                        }
                    } else {
                        if (position === "start" || position === "end") {
                            if (position === c && o.left - l < n.left && o.right + l < n.right) {
                                d = u;
                            } else if (position === u && o.right + l > n.right && o.left - l > n.left) {
                                d = c;
                            }
                        }
                    }
                }
                if (d === "above" || d === "below") {
                    availableHeight_1 = d === "above" ? o.top - n.top : n.bottom - o.bottom;
                } else if (d === "start" || d === "end") {
                    availableHeight_1 = Math.max(n.bottom, o.bottom) - Math.min(o.top, n.top);
                }
                if (K) {
                    const y = anchorRef?.current ?? ge.current;
                    const C = y ? r("isElementFixedOrSticky")(y) : false;
                    const b = !C && t.nodeType === 1 && r("isElementFixedOrSticky")(t);
                    const L = (n?.bottom ?? 0) - (n?.top ?? 0);
                    const E = b ? 0 : S();
                    const T = E + L - k;
                    const x = E + n.bottom - o.bottom;
                    availableHeight_1 = Math.max(Math.min(T, x), I);
                }
                DeRef.current = {
                    height: i,
                    width: l
                };
                fe({
                    availableHeight: availableHeight_1,
                    position: d,
                    type: "determine_direction"
                });
            }
        }, [
            $e,
            Pe,
            position,
            ye,
            K,
            he,
            ge,
            anchorRef
        ]);
        const Me = useCallback(function() {
            const document_documentElement = document.documentElement;
            const n = anchorRef?.current ?? ge.current;
            const screenRect = Pe();
            const a = $e();
            const TeRef_current = TeRef.current;
            if (!(document_documentElement == null || n == null || screenRect == null || a == null || TeRef_current == null)) {
                const u = v(TeRef_current);
                const c = L(n);
                if (c != null) {
                    const d = r("isElementFixedOrSticky")(n);
                    const fixed = !d && a.nodeType === 1 && r("isElementFixedOrSticky")(a);
                    const contextRect = he.map((e)=>e.getDOMNode()).filter(Boolean).filter((e)=>c.contains(e)).reduce((acc, item)=>{
                        if (acc != null) {
                            return T(acc, v(item));
                        }
                        return null;
                    }, v(a));
                    if (contextRect == null || contextRect.left === 0 && contextRect.right === 0) {
                        fe({
                            type: "position_indeterminate"
                        });
                        if (onIndeterminatePosition) {
                            onIndeterminatePosition();
                        }
                        return;
                    }
                    const offsetRect = fixed ? {
                        bottom: document_documentElement.clientHeight,
                        left: 0,
                        right: document_documentElement.clientWidth,
                        top: 0
                    } : v(c);
                    const f = r("calculateBaseContextualLayerPosition")({
                        align: l,
                        contextRect,
                        contextualLayerSize: Ce ? null : DeRef.current,
                        fixed,
                        offsetRect,
                        position,
                        screenRect
                    });
                    const { adjustment, style } = f;
                    let y = style;
                    if (r("justknobx")._("432") && (y = babelHelpers.extends({
                        left: null,
                        "max-height": null,
                        position: null,
                        right: null,
                        top: null,
                        "z-index": null
                    }, style), K === true)) {
                        const b = u.bottom - u.top;
                        const R = screenRect.bottom - contextRect.bottom;
                        const E = b - R;
                        const k = fixed ? 0 : S();
                        let I = contextRect.bottom - offsetRect.top;
                        if (E - k > 0) {
                            I -= E;
                        }
                        const D = screenRect.left - offsetRect.left;
                        const x = screenRect.right - screenRect.left;
                        y = {
                            left: `${D}px`,
                            "max-height": `${xeRef.current ?? 0}px`,
                            position: fixed ? "fixed" : "absolute",
                            top: `${I}px`,
                            width: `${x}px`,
                            "z-index": r("gkx")("7742") ? "299" : "3"
                        };
                    }
                    if (TeRef_current != null) {
                        for(let $ = Object.keys(y), P = 0; P < $.length; P++){
                            const N = $[P];
                            const M = y[N];
                            if (M != null) {
                                TeRef_current.style.setProperty(N, M);
                            } else {
                                TeRef_current.style.removeProperty(N);
                            }
                        }
                    }
                    fe({
                        adjustment,
                        contextSize: {
                            height: contextRect.bottom - contextRect.top,
                            width: contextRect.right - contextRect.left
                        },
                        type: "reposition"
                    });
                }
            }
        }, [
            ge,
            Pe,
            $e,
            he,
            Ce,
            l,
            position,
            onIndeterminatePosition,
            K
        ]);
        const we = useCallback(function(e) {
            if (e === o("LayoutAnimationEvents").LayoutAnimationEventType.Start) {
                Le(true);
            }
            if (e === o("LayoutAnimationEvents").LayoutAnimationEventType.Stop) {
                Le(false);
                Me();
            }
        }, [
            Me,
            Le
        ]);
        useLayoutEffect(function() {
            if (!ae) {
                if (ve != null && ve.getIsAnimating()) {
                    we(o("LayoutAnimationEvents").LayoutAnimationEventType.Start);
                }
            }
        }, [
            ve,
            we
        ]);
        r("useLayoutAnimationEvents")(we);
        useImperativeHandle(imperativeRef, function() {
            return {
                reposition: function(t) {
                    if (!Ie) {
                        const { autoflip = false } = t || {};
                        if (autoflip) {
                            Ne();
                        }
                        Me();
                    }
                }
            };
        }, [
            Ie,
            Me,
            Ne
        ]);
        const Ae = r("useResizeObserver")(function({ height, width }) {
            DeRef.current = {
                height,
                width
            };
            Me();
        });
        const FeRef = useRef(le);
        useLayoutEffect(function() {
            if (!ae) {
                if (le !== FeRef.current) {
                    fe({
                        position: le,
                        type: "position_changed"
                    });
                    if (!Ie) {
                        Ne();
                        Me();
                    }
                    FeRef.current = le;
                }
            }
        }, undefined);
        const OeRef = useRef(Ne);
        const BeRef = useRef(Me);
        useLayoutEffect(function() {
            OeRef.current = Ne;
            BeRef.current = Me;
            xeRef.current = availableHeight;
        }, undefined);
        const We = useCallback(function(e) {
            TeRef.current = e;
            if (e != null && !Ie) {
                OeRef.current();
                BeRef.current();
            }
        }, [
            Ie
        ]);
        useLayoutEffect(function() {
            if (!(ae || Ie)) {
                if (TeRef.current != null) {
                    BeRef.current();
                }
            }
        }, [
            position,
            availableHeight,
            Ie,
            ae
        ]);
        useEffect(function() {
            if (!ae && !Ie) {
                const e = $e();
                const t = new ResizeObserver(function() {
                    Ne();
                    Me();
                });
                if (!(e == null || !(e instanceof HTMLElement))) {
                    t.observe(e);
                    return function() {
                        t.disconnect();
                    };
                }
            }
        }, [
            $e,
            Ne,
            Me,
            Ie
        ]);
        useEffect(function() {
            if (!ae && !Ie) {
                const e = function() {
                    Ne();
                    Me();
                };
                window.addEventListener("resize", e);
                return function() {
                    window.removeEventListener("resize", e);
                };
            }
        }, [
            Ie,
            Me,
            Ne
        ]);
        useEffect(function() {
            if (!ae && !Ie) {
                const e = he.map((e)=>e.getDOMNode()).filter(Boolean);
                if (e.length > 0) {
                    e.forEach((e)=>e.addEventListener("scroll", Me, {
                            passive: true
                        }));
                    return function() {
                        e.forEach((e)=>e.removeEventListener("scroll", Me));
                    };
                }
            }
        }, [
            Ie,
            Me,
            he
        ]);
        useEffect(function() {
            if (!ae && !(window.addEventListener == null || Ie)) {
                window.addEventListener("scroll", Me, {
                    passive: true
                });
                return function() {
                    window.removeEventListener("scroll", Me);
                };
            }
        }, [
            Ie,
            Me
        ]);
        const qe = useMemo(function() {
            return r("mergeRefs")(We, Ae, ref);
        }, [
            We,
            Ae,
            ref
        ]);
        const Ue = useMemo(function() {
            return {
                align: l,
                position: position === "auto" ? "below" : position
            };
        }, [
            l,
            position
        ]);
        const Ve = q || isPositionIndeterminate;
        if (ae) {
            const Component = o("FDSTextContext").FDSTextContextProvider;
            const Component_1 = r("BaseLinkNestedPressableContext").Provider;
            const Component_2 = o("FocusRegion.react").FocusRegion;
            const Component_3 = r("BasePortal.react");
            return <Component_3 target={anchorRef?.current ?? ge.current}><F hidden={q || isPositionIndeterminate || Re} presencePayload={presencePayload} shouldPrerender={shouldPrerender} stopClickPropagation={stopClickPropagation} testid={undefined} xstyle={[
                x.root,
                K === true ? x.rootReflowToPosition : null,
                xstyle
            ]}><Component_2 autoFocusQuery={!Ve && w ? o("focusScopeQueries").headerFirstTabbableSecondScopeQuery : null} autoRestoreFocus={!Ve && J} containFocusQuery={!Ve && w ? o("focusScopeQueries").tabbableScopeQuery : null} onEscapeFocusRegion={onEscapeFocusRegion} recoverFocusQuery={Ve ? null : o("focusScopeQueries").headerFirstTabbableSecondScopeQuery}><Component_1 value={false}><Component color={null} type={null}>{children}</Component></Component_1></Component_2></F></Component_3>;
        }
        const Component = o("FDSTextContext").FDSTextContextProvider;
        const Component_1 = r("BaseLinkNestedPressableContext").Provider;
        const Component_2 = r("BaseContextualLayerOrientationContext").Provider;
        const Component_3 = r("BaseContextualLayerAvailableHeightContext").Provider;
        const Component_4 = r("BaseContextualLayerLayerAdjustmentContext").Provider;
        const Component_5 = r("BaseContextualLayerContextSizeContext").Provider;
        const Component_6 = r("BaseContextualLayerAnchorRoot.react");
        const Component_7 = o("FocusRegion.react").FocusRegion;
        const Component_8 = r("BasePortal.react");
        return <Component_8 target={anchorRef?.current ?? ge.current}><F hidden={q || isPositionIndeterminate || Re} presencePayload={presencePayload} ref={qe} shouldPrerender={shouldPrerender} stopClickPropagation={stopClickPropagation} testid={undefined} xstyle={[
            x.root,
            K === true ? x.rootReflowToPosition : null,
            xstyle
        ]}><Component_7 autoFocusQuery={!Ve && w ? o("focusScopeQueries").headerFirstTabbableSecondScopeQuery : null} autoRestoreFocus={!Ve && J} containFocusQuery={!Ve && w ? o("focusScopeQueries").tabbableScopeQuery : null} onEscapeFocusRegion={onEscapeFocusRegion} recoverFocusQuery={Ve ? null : o("focusScopeQueries").headerFirstTabbableSecondScopeQuery}><Component_6><Component_5 value={contextSize}><Component_4 value={adjustment}><Component_3 value={availableHeight}><Component_2 value={Ue}><Component_1 value={false}><Component color={null} type={null}>{children}</Component></Component_1></Component_2></Component_3></Component_4></Component_5></Component_6></Component_7></F></Component_8>;
    }
    NComponent.displayName = `${NComponent.name} [from ${i.id}]`;
    l.default = NComponent;
}, 98);