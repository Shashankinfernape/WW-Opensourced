__d("CometVirtualization.react", [
    "BaseView.react",
    "BaseViewHideable.react",
    "CometVirtualizationObservabilitySurface",
    "FBLogger",
    "HiddenSubtreeContextProvider.react",
    "HiddenSubtreePassiveContext",
    "VirtualizationConfig",
    "VirtualizationContainerContext",
    "VirtualizationContext",
    "cometVirtualizationPinExclusion",
    "cr:4981",
    "gkx",
    "intersectionObserverEntryIsIntersecting",
    "nullIntersectionObserverEntryLogger",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useDynamicVirtualizationMargin.react",
    "useIntersectionObserver",
    "useMergeRefs",
    "useMutationStableChecker",
    "usePrevious",
    "useTimeoutStateSinceFirstMounting.react",
    "useVirtualizationContext"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { unstable_Activity: UnstableActivity, useCallback, useContext, useEffect, useRef, useState } = c;
    const h = (()=>{
        let e = null;
        return function() {
            if (e === null) {
                const n = document?.documentElement;
                if (n == null) {
                    throw r("FBLogger")("comet_infra").mustfixThrow("Scroll anchoring feature detection called in an environment without a documentElement");
                }
                e = n.style.overflowAnchor != null;
            }
            return e;
        };
    })();
    function y(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const r = e === undefined ? null : e;
        const a = t === undefined ? false : t;
        const i = useState(r);
        const l = i[0];
        const s = i[1];
        let u;
        let c;
        if (n[0] !== l) {
            u = function() {
                if (l === null) {
                    s(C);
                }
            };
            c = [
                l
            ];
            n[0] = l;
            n[1] = u;
            n[2] = c;
        } else {
            u = n[1];
            c = n[2];
        }
        useEffect(u, c);
        return a || (l ?? false);
    }
    function C() {
        return h();
    }
    const b = {
        invisible: {
            display: "x1s85apg",
            $$css: true
        },
        resetBlockFormattingContext: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        }
    };
    const v = o("VirtualizationConfig").isVirtualizationEnabledInJK();
    function S(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return "";
    }
    function R() {
        if (typeof IntersectionObserver !== "function" || typeof IntersectionObserver.toString !== "function") {
            return false;
        }
        return S(IntersectionObserver.toString()).endsWith("{ [native code] }");
    }
    const L = R();
    function EComponent(t) {
        const i = arguments;
        const t_activityOnlyMode = t.activityOnlyMode;
        const c = t_activityOnlyMode === undefined ? false : t_activityOnlyMode;
        const t_allowVirtualizationWithNullNodeHeight = t.allowVirtualizationWithNullNodeHeight;
        const C = t_allowVirtualizationWithNullNodeHeight === undefined ? false : t_allowVirtualizationWithNullNodeHeight;
        const t_callingSurface = t.callingSurface;
        const R = t_callingSurface === undefined ? null : t_callingSurface;
        const { children, deferVirtualizationInMs } = t;
        const I = deferVirtualizationInMs === undefined ? 0 : deferVirtualizationInMs;
        const t_deferVirtualizationMutationIntervalInMs = t.deferVirtualizationMutationIntervalInMs;
        const D = t_deferVirtualizationMutationIntervalInMs === undefined ? 0 : t_deferVirtualizationMutationIntervalInMs;
        const { deferVirtualizationPlaceholderSelector, delayHeightPlaceholderMs } = t;
        const P = delayHeightPlaceholderMs === undefined ? 0 : delayHeightPlaceholderMs;
        const { disableHiding, fasterSizeMeasurement } = t;
        const w = fasterSizeMeasurement === undefined ? false : fasterSizeMeasurement;
        const t_hiddenMode = t.hiddenMode;
        const F = t_hiddenMode === undefined ? "legacy" : t_hiddenMode;
        const t_initialRenderConfig = t.initialRenderConfig;
        const B = t_initialRenderConfig === undefined ? o("VirtualizationConfig").DEFAULT_INIT_RENDER_CONFIG : t_initialRenderConfig;
        const { innerContentXStyle, interactionPinAttributionReporter, interactionPinAttributionResolver, isInfiniteScrollUp } = t;
        const H = isInfiniteScrollUp === undefined ? false : isInfiniteScrollUp;
        const t_leftRightMargin = t.leftRightMargin;
        const z = t_leftRightMargin === undefined ? o("VirtualizationConfig").HORIZONTAL_HIDEABLE_MARGIN : t_leftRightMargin;
        const { mountXStyle, nullState } = t;
        const Q = nullState === undefined ? null : nullState;
        const { persistedMarginEnabled, pinChildrenOnInteraction, pinChildrenWithPlayer, pinExclusionEnabled, readAheadMarginMax } = t;
        const te = readAheadMarginMax === undefined ? null : readAheadMarginMax;
        const { ref, rereadPlayerFlagAtMargin, scrollport } = t;
        const ae = scrollport === undefined ? null : scrollport;
        const { sharedMarginEnabled, skipScrollAnchoringCheck_UNSAFE } = t;
        const se = skipScrollAnchoringCheck_UNSAFE === undefined ? false : skipScrollAnchoringCheck_UNSAFE;
        const t_smartMargin = t.smartMargin;
        const ce = t_smartMargin === undefined ? false : t_smartMargin;
        const t_testid = t.testid;
        const me = t_testid === undefined ? "hideable" : t_testid;
        const t_textSearchable = t.textSearchable;
        const _e = t_textSearchable === undefined ? false : t_textSearchable;
        const t_topBottomMargin = t.topBottomMargin;
        const ge = t_topBottomMargin === undefined ? o("VirtualizationConfig").VERTICAL_HIDEABLE_MARGIN : t_topBottomMargin;
        const { unmountHiddenChildren, unmountXStyle, xstyle } = t;
        const beRef = useRef(null);
        const veRef = useRef(null);
        const Se = useContext(r("HiddenSubtreePassiveContext"));
        const Re = useState(null);
        const Le = Re[0];
        const Ee = Re[1];
        const interactionPinReason = Le?.reason ?? null;
        const Ie = Le != null;
        const TeRef = useRef(null);
        const DeRef = useRef(true);
        const xeRef = useRef(false);
        const $e = (target, type)=>{
            try {
                return interactionPinAttributionResolver?.(target, type) ?? null;
            } catch (e) {
                return null;
            }
        };
        useEffect(function() {
            return function() {
                return TeRef.current?.();
            };
        }, []);
        const Pe = useState(B.isVisible);
        const Ne = Pe[0];
        const Me = Pe[1];
        const we = useState(B.nodeHeight);
        const minHeight = we[0];
        const Fe = we[1];
        const Oe = useState("");
        const Be = Oe[0];
        const We = Oe[1];
        const qe = r("usePrevious")(Ne);
        const Ue = r("useTimeoutStateSinceFirstMounting.react")(I);
        const Ve = r("useVirtualizationContext")();
        const He = useContext(r("VirtualizationContainerContext"));
        const GeRef = useRef(undefined);
        const ze = mountXStyle ?? xstyle;
        const je = unmountXStyle ?? xstyle;
        useEffect(function() {
            const e = DeRef.current || minHeight == null && !Ne;
            if (veRef.current != null && e) {
                if (!w) {
                    Fe(veRef.current.getBoundingClientRect().height);
                }
                if (_e) {
                    We(veRef.current?.innerText?.trim() ?? "");
                }
                window.clearTimeout(GeRef.current);
            }
        }, [
            w,
            Ne,
            minHeight,
            qe,
            _e
        ]);
        const Ke = P != null && P > 0;
        const Qe = function(t) {
            r("nullIntersectionObserverEntryLogger")(t, `IntersectionObserverEntry is null. num_arguments=${i.length}`);
            const hiddenOrBackgrounded_FIXME = Se.getCurrentState().hiddenOrBackgrounded_FIXME;
            if (r("intersectionObserverEntryIsIntersecting")(t)) {
                if (Ke) {
                    GeRef.current = window.setTimeout(function() {
                        Fe(null);
                    }, P);
                } else {
                    window.clearTimeout(GeRef.current);
                    Fe(null);
                }
                Me(true);
            } else if (!hiddenOrBackgrounded_FIXME) {
                const o = w ? t?.boundingClientRect ?? {} : t.target.getBoundingClientRect();
                const { height, width } = o;
                if (height > 0 && width > 0 && (Me(false), w && Fe(height), Ke && (window.clearTimeout(GeRef.current), Fe(height), _e))) {
                    We(beRef.current?.innerText?.trim() ?? "");
                }
            }
        };
        const Xe = r("useMutationStableChecker")(D, veRef, deferVirtualizationPlaceholderSelector);
        useEffect(function() {
            if (DeRef.current) {
                DeRef.current = false;
            }
        }, []);
        const Ye = {
            bottom: ge,
            left: z,
            right: z,
            top: ge
        };
        const Je = r("useDynamicVirtualizationMargin.react")(ce, z, ge, H, ae, persistedMarginEnabled, R, te, sharedMarginEnabled);
        const Ze = ce ? Je : Ye;
        const root = useCallback(function() {
            const e = ae != null ? ae?.() : He?.rootElementRef.current;
            if (e instanceof Element) {
                return e;
            }
            return null;
        }, [
            ae,
            He
        ]);
        const tt = r("useIntersectionObserver")(Qe, {
            root,
            rootMargin: babelHelpers.extends({}, Ze),
            scrollMargin: babelHelpers.extends({}, Ze),
            threshold: 0
        });
        const nt = useContext(r("VirtualizationContext"));
        const rt = r("useMergeRefs")(nt == null ? Ve.contentWrapperRef : null, tt, beRef, ref);
        const ot = (()=>{
            if (!Ie && minHeight !== null && (!C || minHeight != null && minHeight > 0) && unmountHiddenChildren !== false && (Ke || !Ne)) {
                return {
                    minHeight
                };
            }
        })();
        const isOutsideMargin = !Ne && (minHeight != null || C === true);
        const it = y(B.hasScrollAnchoring ?? null, se);
        const lt = v && it;
        const st = lt ? rt : ref;
        const isPinnedByPlayer = rereadPlayerFlagAtMargin === true && (pinChildrenWithPlayer ?? false) && isOutsideMargin && Ve.hasFlag("HAS_PLAYER");
        const ct = L && lt && unmountHiddenChildren === true && isOutsideMargin && !Ie && !Ve.hasPin() && !isPinnedByPlayer && Ue && Xe;
        const dt = lt && !(disableHiding != null && disableHiding) && isOutsideMargin && F !== "none" && !Ie && !Ve.hasPin() && !isPinnedByPlayer;
        const mt = r("gkx")("22947");
        const pt = n("cr:4981") == null ? null : u.jsx(n("cr:4981"), {
            interactionPinAttribution: Le?.attribution,
            interactionPinAttributionReporter,
            interactionPinReason,
            isContentMounted: !ct,
            isOutsideMargin,
            isPinnedByChild: Ve.hasPin(),
            isPinnedByPlayer,
            isVirtualized: ct || dt,
            marginBottomPx: Ze.bottom,
            marginTopPx: Ze.top,
            surface: mt ? o("CometVirtualizationObservabilitySurface").CometVirtualizationObservabilitySurface.CRAWLER : R
        });
        if (mt) {
            const Component = r("BaseView.react");
            return <>{pt}<div className="x78zum5 xdt5ytf"><Component>{children}</Component></div></>;
        }
        const _t = function(t) {
            if (!(pinChildrenOnInteraction !== true || Le != null)) {
                if (pinExclusionEnabled === true) {
                    const e = o("cometVirtualizationPinExclusion").getInteractionPinDecision(t.target);
                    if (e.excluded || o("cometVirtualizationPinExclusion").isNonInteractiveClickExcludedFromPin(t.type, t.target, t.currentTarget) || o("cometVirtualizationPinExclusion").isPortalFocusExcludedFromPin(t.type, t.target, t.currentTarget) || o("cometVirtualizationPinExclusion").isProgrammaticFocusExcludedFromPin(t.type)) {
                        if (t.type === "click") {
                            xeRef.current = true;
                        }
                        return;
                    }
                    if (t.type === "focus") {
                        if (xeRef.current) {
                            xeRef.current = false;
                            return;
                        }
                    } else {
                        xeRef.current = false;
                    }
                    const n = e.reason === "other" ? $e(t.target, t.type) : null;
                    TeRef.current?.();
                    TeRef.current = o("cometVirtualizationPinExclusion").schedulePinAfterPendingHydration(t.target, function(e) {
                        TeRef.current = null;
                        Ee(function(t) {
                            return t ?? {
                                attribution: e === "other" ? n : null,
                                reason: e
                            };
                        });
                    });
                    return;
                }
                const r = o("cometVirtualizationPinExclusion").getInteractionPinReason(t.target);
                const attribution = r === "other" ? $e(t.target, t.type) : null;
                Ee(function(e) {
                    return e ?? {
                        attribution,
                        reason: r
                    };
                });
            }
        };
        Ve.onVirtualizationChange(ct);
        const ft = _e && Be !== "";
        if (c) {
            const Component = r("VirtualizationContext").Provider;
            return <Component value={Ve}>{pt}<div className={(e || (e = r("stylex")))(b.resetBlockFormattingContext, ct ? je : ze)} data-testid={undefined} data-virtualized={ct} onClickCapture={_t} onFocusCapture={_t} onKeyPressCapture={_t} ref={st} style={ot}>{ft ? <div className="xqtp20y x6ikm8r x10wlt62 xnalus7">{Be}</div> : null}<div {...babelHelpers.extends({}, e.props(innerContentXStyle), {
                ref: veRef,
                children: <UnstableActivity mode={ct ? "hidden" : "visible"}>{children}</UnstableActivity>
            })}/></div></Component>;
        }
        const Component = r("HiddenSubtreeContextProvider.react");
        const Component_1 = r("BaseViewHideable.react");
        const Component_2 = r("VirtualizationContext").Provider;
        return <Component_2 value={Ve}>{pt}<div className={(e || (e = r("stylex")))(b.resetBlockFormattingContext, ct ? je : ze)} data-testid={undefined} data-virtualized={ct} onClickCapture={_t} onFocusCapture={_t} onKeyPressCapture={_t} ref={st} style={ot}>{ft ? <div className="xqtp20y x6ikm8r x10wlt62 xnalus7">{Be}</div> : null}{F === "legacy" ? <Component_1 hidden={dt} ref={veRef} xstyle={[
            innerContentXStyle,
            dt && b.invisible
        ]}>{ct ? null : <Component isHidden={dt}>{children}</Component>}</Component_1> : <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(innerContentXStyle), {
            ref: veRef,
            children: ct ? Q : children
        })}/>}</div></Component_2>;
    }
    EComponent.displayName = `${EComponent.name} [from ${i.id}]`;
    l.default = EComponent;
}, 98);