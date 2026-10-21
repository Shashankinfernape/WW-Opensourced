__d("WAWebMoveResizeComponent.react", [
    "fbt",
    "WAShiftTimer",
    "WAWebCmd",
    "WAWebDragTextureIcon.react",
    "WAWebMoveResizeComponentHandlers",
    "WAWebMoveResizeComponentHooks",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeConstants",
    "WAWebMoveResizeDragArea.react",
    "WAWebMoveResizeLogic",
    "WAWebMoveResizeResizers.react",
    "WAWebVelocityAnimate",
    "WDSColorStyles.stylex",
    "nullthrows",
    "react",
    "stylex",
    "useLazyRef",
    "useMergeRefs",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "moveResizeRef",
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useMemo, useRef, useState } = m;
    const y = 12;
    const C = {
        moveResizeComponentInnerContainer: {
            position: "x1n2onr6",
            height: "x5yr21d",
            $$css: true
        },
        topContentMoveable: {
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1ktfvgn",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        dragBarSvg: {
            marginTop: "xdj266r",
            marginBottom: "xat24cr",
            marginInlineStart: "xvc5jky",
            marginInlineEnd: "x11t971q",
            $$css: true
        }
    };
    function b(t) {
        const { moveResizeRef, ref } = t;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { animationStartStyle, aspectRatio, dragCursor } = i;
        const dragCursor_1 = dragCursor === undefined ? "move" : dragCursor;
        const { escapeConversationHeader, initialStyle, margin, minWidth, onMove, onMoveStop, onResize } = i;
        const unmountSignal = r("useWAWebUnmountSignal")();
        const DRef = useRef(null);
        const xRef = useRef(false);
        useImperativeHandle(moveResizeRef, function() {
            return {
                cancelDefaultHeightEnforcement: function() {
                    if (DRef.current == null) {
                        DRef.current = new AbortController;
                    }
                    DRef.current.abort();
                },
                markExternalResizeInProgress: function(t) {
                    xRef.current = t;
                }
            };
        });
        const $ = ()=>{
            if (initialStyle) {
                return {
                    width: initialStyle.width,
                    left: initialStyle.left,
                    bottom: initialStyle.bottom
                };
            }
            return {
                width: minWidth,
                left: margin.x,
                bottom: margin.y
            };
        };
        const P = useMemo(function() {
            let e;
            if (escapeConversationHeader) {
                o("WAWebCmd").Cmd.getConversationHeaderOffset(function(t) {
                    e = t?.right;
                });
            }
            const t = $();
            let n = t.width / aspectRatio;
            if (i.independentResize === true && i.minHeight != null) {
                n = i.minHeight;
            }
            const r = {
                resizeDirection: o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP,
                currentAction: o("WAWebMoveResizeComponentUtils").UserActions.IDLE,
                resizeStartMousePosition: {
                    x: 0,
                    y: 0
                },
                resizeStartPiPStyle: {
                    width: 0,
                    bottom: 0,
                    left: 0
                },
                moveStartMousePosition: {
                    x: 0,
                    y: 0
                },
                moveStartPositionStyle: {
                    left: 0,
                    bottom: 0
                },
                previousWindowSize: {
                    height: window.innerHeight,
                    width: window.innerWidth
                },
                previousConvPanelRightBorder: e,
                initialHeight: n
            };
            if (animationStartStyle) {
                return babelHelpers.extends({}, r, animationStartStyle);
            }
            return babelHelpers.extends({}, r, t);
        }, []);
        const N = useState(P.width);
        const M = N[0];
        const setWidth = N[1];
        const A = useState(P.initialHeight);
        const F = A[0];
        const setHeight = A[1];
        const B = useState(P.bottom);
        const W = B[0];
        const setBottom = B[1];
        const URef = useRef(P.bottom);
        const V = useState(P.left);
        const H = V[0];
        const setLeft = V[1];
        const zRef = useRef(P.left);
        const j = useState(i.independentResize === true);
        const K = j[0];
        const Q = j[1];
        const X = useState(aspectRatio);
        const Y = X[0];
        const J = X[1];
        if (i.independentResize === true !== K) {
            const Z = Y;
            Q(i.independentResize === true);
            J(aspectRatio);
            if (i.independentResize === true && !K) {
                const ee = M / Z;
                if (Math.abs(F - ee) > 1) {
                    setHeight(ee);
                }
            }
        } else {
            if (aspectRatio !== Y) {
                J(aspectRatio);
            }
        }
        const te = useState(P.resizeDirection);
        const resizeDirection = te[0];
        const re = te[1];
        const oe = useState(P.currentAction);
        const currentAction = oe[0];
        const ie = oe[1];
        const leRef = useRef(P.currentAction);
        const se = useState(P.resizeStartMousePosition);
        const resizeStartMousePosition = se[0];
        const ce = se[1];
        const de = useState(P.resizeStartPiPStyle);
        const resizeStartPiPStyle = de[0];
        const pe = de[1];
        const _e = useState(P.width / aspectRatio);
        const resizeStartHeight = _e[0];
        const ge = _e[1];
        const heRef = useRef(P.moveStartMousePosition);
        const yeRef = useRef(P.moveStartPositionStyle);
        const Ce = useState(P.previousWindowSize);
        const previousWindowSize = Ce[0];
        const ve = Ce[1];
        const Se = useState(P.previousConvPanelRightBorder);
        const previousConvPanelRightBorder = Se[0];
        const Le = Se[1];
        const EeRef = useRef(null);
        const keRef = useRef(null);
        const Ie = r("useMergeRefs")(ref, keRef);
        const TeRef = useRef(null);
        const DeRef = useRef(null);
        const xe = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(function(e) {
                if (e.left) {
                    setLeft(e.left);
                }
                if (e.bottom) {
                    setBottom(e.bottom);
                }
                if (e.width) {
                    setWidth(e.width);
                }
            });
        });
        const getResizeCallback = function(t) {
            return function(e) {
                if (e.button === 0) {
                    re(t);
                    leRef.current = o("WAWebMoveResizeComponentUtils").UserActions.RESIZE;
                    ie(o("WAWebMoveResizeComponentUtils").UserActions.RESIZE);
                    if (i.onResizeStart != null) {
                        i.onResizeStart();
                    }
                    pe({
                        width: M,
                        left: H,
                        bottom: W
                    });
                    ge(F);
                    ce({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
                e.stopPropagation();
            };
        };
        const PeRef = useRef(false);
        const Ne = function(t) {
            if (!(t.target instanceof Element && t.target.closest('input, textarea, [contenteditable="true"]') != null)) {
                if (t.button === 0) {
                    leRef.current = o("WAWebMoveResizeComponentUtils").UserActions.MOVE;
                    ie(o("WAWebMoveResizeComponentUtils").UserActions.MOVE);
                    PeRef.current = false;
                    yeRef.current = {
                        left: H,
                        bottom: W
                    };
                    heRef.current = {
                        x: t.clientX,
                        y: t.clientY
                    };
                }
                t.stopPropagation();
            }
        };
        const getRect = function() {
            return {
                top: window.innerHeight - W - M / aspectRatio,
                left: H,
                bottom: window.innerHeight - W,
                right: H + M
            };
        };
        const onMouseUp = function() {
            const e = getRect();
            onMoveStop?.(e);
        };
        const Ae = o("WAWebMoveResizeComponentHooks").useDimensionAnimation({
            componentRef: keRef,
            setBottom,
            setHeight,
            setLeft,
            setWidth,
            unmountSignal
        });
        const { animateDimensionChange, updateDimensionState } = Ae;
        const Be = ()=>{
            const extraTopContentHeight = TeRef.current?.offsetHeight != null ? TeRef.current.offsetHeight - y : 0;
            const extraBottomContentHeight = DeRef.current?.offsetHeight != null ? DeRef.current.offsetHeight - y : 0;
            return {
                extraTopContentHeight,
                extraBottomContentHeight
            };
        };
        const We = function(t) {
            const e = Be();
            const { extraBottomContentHeight, extraTopContentHeight } = e;
            switch(leRef.current){
                case o("WAWebMoveResizeComponentUtils").UserActions.IDLE:
                    return;
                case o("WAWebMoveResizeComponentUtils").UserActions.RESIZE:
                    {
                        const a = o("WAWebMoveResizeComponentHandlers").processResizeAction({
                            resizeDirection,
                            resizeStartMousePosition,
                            clientX: t.clientX,
                            clientY: t.clientY,
                            aspectRatio,
                            independentResize: i.independentResize === true,
                            minWidth,
                            minHeight: i.minHeight,
                            margin,
                            resizeStartPiPStyle,
                            resizeStartHeight,
                            width: M,
                            extraTopContentHeight,
                            extraBottomContentHeight,
                            moveStartPositionStyle: yeRef.current
                        });
                        setWidth(a.resizedWidth);
                        setHeight(a.resizedHeight);
                        setLeft(a.resizedLeft);
                        setBottom(a.resizedBottom);
                        if (onResize) {
                            onResize(a.resizedWidth, a.resizedLeft, a.resizedBottom);
                        }
                        break;
                    }
                case o("WAWebMoveResizeComponentUtils").UserActions.MOVE:
                    {
                        if (!PeRef.current) {
                            PeRef.current = true;
                            if (i.onMoveStart != null) {
                                i.onMoveStart();
                            }
                        }
                        const l = o("WAWebMoveResizeComponentHandlers").processMoveAction({
                            clientX: t.clientX,
                            clientY: t.clientY,
                            moveStartMousePosition: heRef.current,
                            moveStartPositionStyle: yeRef.current,
                            width: M,
                            height: F,
                            aspectRatio,
                            margin,
                            minWidth,
                            independentResize: i.independentResize === true,
                            extraTopContentHeight,
                            extraBottomContentHeight,
                            resizeStartPiPStyle
                        });
                        setLeft(l.movedLeft);
                        setBottom(l.movedBottom);
                        if (onMove) {
                            onMove(l.movedLeft, l.movedBottom);
                        }
                        break;
                    }
            }
        };
        const qe = function(t) {
            if (leRef.current === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE) {
                xRef.current = false;
                if (i.onResizeEnd != null) {
                    i.onResizeEnd();
                }
            } else {
                if (leRef.current === o("WAWebMoveResizeComponentUtils").UserActions.MOVE && PeRef.current) {
                    if (i.onMoveEnd != null) {
                        i.onMoveEnd();
                    }
                }
            }
            PeRef.current = false;
            leRef.current = o("WAWebMoveResizeComponentUtils").UserActions.IDLE;
            ie(o("WAWebMoveResizeComponentUtils").UserActions.IDLE);
        };
        const Ue = o("WAWebMoveResizeComponentHooks").createEscapeOverlapHandler({
            componentRef: keRef,
            unmountSignal,
            aspectRatio,
            width: M,
            left: H,
            bottom: W,
            margin,
            setLeft,
            setBottom,
            getRect
        });
        useEffect(function() {
            if (initialStyle) {
                if (EeRef.current) {
                    xe.current.onOrAfter(o("WAWebMoveResizeConstants").INITIAL_RENDER_ANIMATION_DURATION, initialStyle);
                    return;
                }
                const e = initialStyle.width;
                const t = initialStyle.left + e - (M + H);
                const n = initialStyle.bottom + e / aspectRatio - (W + M / aspectRatio);
                if (Math.abs(t) < 0.1 && Math.abs(n) < 0.1) {
                    if (initialStyle.left) {
                        setLeft(initialStyle.left);
                    }
                    if (initialStyle.bottom) {
                        setBottom(initialStyle.bottom);
                    }
                    if (initialStyle.width) {
                        setWidth(initialStyle.width);
                    }
                }
            }
        }, [
            aspectRatio
        ]);
        const Ve = ()=>{
            if (i.independentResize === true || xRef.current === true) {
                return {
                    width: M,
                    height: F
                };
            }
            return {
                width: M,
                height: M / aspectRatio
            };
        };
        const He = r("useWAWebDebouncedCallback")(function() {
            if (leRef.current === o("WAWebMoveResizeComponentUtils").UserActions.IDLE) {
                const e = Be();
                const { extraBottomContentHeight, extraTopContentHeight } = e;
                const r = o("WAWebMoveResizeComponentHandlers").calculateWindowResizeState({
                    width: M,
                    height: F,
                    independentResize: i.independentResize === true,
                    bottom: W,
                    left: H,
                    aspectRatio: i.aspectRatio,
                    margin: i.margin,
                    minWidth: i.minWidth,
                    extraTopContentHeight,
                    extraBottomContentHeight,
                    previousWindowSize,
                    previousConvPanelRightBorder,
                    escapeConversationHeader: i.escapeConversationHeader,
                    getConversationHeaderOffset: function(t) {
                        return o("WAWebCmd").Cmd.getConversationHeaderOffset(t);
                    }
                });
                if (r.hasChanges) {
                    setBottom(r.bottom);
                    setLeft(r.left);
                    setWidth(r.width);
                    if (r.height != null) {
                        setHeight(r.height);
                    }
                    ve(r.previousWindowSize);
                    Le(r.previousConvPanelRightBorder);
                }
            }
        }, 50);
        useEffect(function() {
            if (!animationStartStyle) {
                He();
                return;
            }
            const e = $();
            const t = animationStartStyle.width / aspectRatio;
            const animationStartStyle_height = animationStartStyle.height;
            const a = animationStartStyle_height / t;
            const i = (t - animationStartStyle_height) / 2 / a;
            const s = babelHelpers.extends({}, e, {
                height: e.width / aspectRatio,
                scaleY: [
                    1,
                    a
                ],
                translateY: [
                    0,
                    i
                ]
            });
            const u = r("WAWebVelocityAnimate")(r("nullthrows")(keRef.current), s, {
                easing: "easeInOutQuart",
                duration: o("WAWebMoveResizeConstants").INITIAL_RENDER_ANIMATION_DURATION
            });
            EeRef.current = u.then(()=>{
                if (!unmountSignal.aborted) {
                    EeRef.current = null;
                    setLeft(e.left);
                    setBottom(e.bottom);
                    setWidth(e.width);
                    He();
                }
            });
        }, []);
        r("useWAWebOnUnmount")(function() {
            xe.current.cancel();
        });
        const GeRef = useRef(i.minWidth);
        const zeRef = useRef(i.minHeight);
        useEffect(function() {
            let e;
            const n = GeRef.current !== i.minWidth;
            const r = zeRef.current !== i.minHeight;
            GeRef.current = i.minWidth;
            zeRef.current = i.minHeight;
            if (!(!n && !r)) {
                if ((e = DRef.current) != null && e.signal.aborted) {
                    DRef.current = new AbortController;
                    return;
                }
                const a = i.independentResize === true ? F : M / i.aspectRatio;
                const l = i.minHeight ?? i.minWidth / i.aspectRatio;
                const s = i.independentResize === true;
                if (M < i.minWidth || s && a < l) {
                    const u = window.innerWidth - 2 * i.margin.x;
                    const c = M < i.minWidth ? Math.min(i.minWidth, Math.max(0, u)) : M;
                    const d = s ? Math.max(a, l) : c / i.aspectRatio;
                    const m = window.innerHeight - 2 * i.margin.y;
                    let p = W;
                    if (W + d > m + i.margin.y) {
                        p = Math.max(i.margin.y, m + i.margin.y - d);
                    }
                    const _ = o("WAWebMoveResizeLogic").clampLeftToBounds(zRef.current, c, i.margin.x);
                    const { adjustedLeft, needsAdjustment } = _;
                    const h = d - a;
                    const y = h > 0 && keRef.current != null;
                    if (y) {
                        const C = {
                            height: [
                                d,
                                a
                            ],
                            bottom: [
                                p,
                                W
                            ]
                        };
                        const b = {
                            width: c,
                            height: i.independentResize === true ? d : undefined,
                            bottom: p
                        };
                        if (needsAdjustment) {
                            C.left = adjustedLeft;
                            b.left = adjustedLeft;
                        }
                        animateDimensionChange(C, b);
                    } else {
                        const v = {
                            width: c,
                            height: i.independentResize === true ? d : undefined,
                            bottom: p
                        };
                        if (needsAdjustment) {
                            v.left = adjustedLeft;
                        }
                        updateDimensionState(v);
                    }
                }
            }
        }, [
            i.minWidth,
            i.minHeight,
            i.aspectRatio,
            i.margin,
            i.independentResize,
            M,
            F,
            W,
            animateDimensionChange,
            updateDimensionState
        ]);
        useEffect(function() {
            URef.current = W;
        }, [
            W
        ]);
        useEffect(function() {
            zRef.current = H;
        }, [
            H
        ]);
        useEffect(function() {
            const i_externalResize = i.externalResize;
            if (i_externalResize != null) {
                const t = Be();
                const { extraBottomContentHeight, extraTopContentHeight } = t;
                const a = window.innerWidth - 2 * i.margin.x;
                const l = window.innerHeight - 2 * i.margin.y - extraTopContentHeight - extraBottomContentHeight;
                const s = Math.min(i_externalResize.width, Math.max(0, a));
                const u = Math.min(i_externalResize.height, Math.max(0, l));
                const c = i_externalResize.left;
                const d = URef.current;
                const m = zRef.current;
                const p = o("WAWebMoveResizeLogic").clampBottomToBounds(d, u, i.margin.y, extraTopContentHeight, extraBottomContentHeight);
                const { adjustedBottom, needsAdjustment } = p;
                const g = c ?? m;
                const h = o("WAWebMoveResizeLogic").clampLeftToBounds(g, s, i.margin.x);
                const { adjustedLeft, needsAdjustment: needsAdjustment_1 } = h;
                const b = {
                    height: u,
                    width: s
                };
                const v = {
                    width: s,
                    height: u
                };
                if (needsAdjustment) {
                    b.bottom = [
                        adjustedBottom,
                        d
                    ];
                    v.bottom = adjustedBottom;
                }
                if (c != null || needsAdjustment_1) {
                    b.left = adjustedLeft;
                    v.left = adjustedLeft;
                }
                animateDimensionChange(b, v);
                xRef.current = false;
            }
        }, [
            i.externalResize,
            i.margin,
            animateDimensionChange
        ]);
        o("useWAWebListener").useListener(window, "mousemove", We);
        o("useWAWebListener").useListener(window, "mouseup", qe);
        o("useWAWebListener").useListener(window, "resize", He);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "floater_escape_overlap", Ue);
        const je = i.enableDragBar === true;
        const Ke = Ve();
        const { disableResize, independentResize, minHeight, onMoveEnd, onMoveStart, onResizeEnd, onResizeStart } = i;
        const onKeyDown = o("WAWebMoveResizeComponentHooks").useKeyboardNavigation({
            width: M,
            height: F,
            left: H,
            bottom: W,
            aspectRatio,
            minWidth,
            minHeightProp: minHeight,
            margin,
            disableResize,
            independentResize,
            setWidth,
            setHeight,
            setLeft,
            setBottom,
            onResizeStart,
            onResize,
            onResizeEnd,
            onMoveStart,
            onMove,
            onMoveEnd
        });
        const rt = {
            width: Ke.width,
            height: Ke.height,
            bottom: `${W}px`,
            left: `${H}px`
        };
        const Component = r("WAWebMoveResizeDragArea.react");
        const Component_1 = r("WAWebMoveResizeDragArea.react");
        return <div data-testid="move_resize_component" ref={Ie} role="application" aria-label={s._("Picture-in-picture. Use Arrow keys to move, Shift+Arrow keys to resize.")} tabIndex={0} className="xixxii4" style={rt} onKeyDown={onKeyDown} onMouseEnter={i.onMouseEnter} onMouseLeave={i.onMouseLeave} onFocus={i.onFocus} onBlur={i.onBlur}>{je || i.topContent != null ? <div {...babelHelpers.extends({
            ref: TeRef
        }, {
            0: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j x1weeur4 xwhdwdg"
            },
            2: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j x1weeur4 xwhdwdg xtvc7gp"
            },
            1: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j xwhdwdg xrnddhk"
            },
            3: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j xwhdwdg xtvc7gp xrnddhk"
            }
        }[(i.extraContentVisible === true) << 1 | (i.extraContentVisible === true) << 0], {
            children: [
                je ? <Component xstyle={C.topContentMoveable} onMouseDown={Ne} onMouseUp={onMouseUp} currentAction={currentAction} dragCursor={dragCursor_1}>{d.jsx(o("WAWebDragTextureIcon.react").DragTextureIcon, {
                    xstyle: o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
                    iconXstyle: C.dragBarSvg
                })}</Component> : null,
                i.topContent,
                d.jsx(r("WAWebMoveResizeResizers.react"), {
                    getResizeCallback,
                    currentAction,
                    directions: o("WAWebMoveResizeComponentUtils").RISIZE_TOP_DIRECTIONS
                })
            ]
        })}/> : null}{i.bottomContent != null ? <div {...babelHelpers.extends({
            ref: DeRef,
            style: {
                top: i.extraContentVisible !== true && DeRef.current ? `calc(100% - ${DeRef.current.offsetHeight}px)` : null
            }
        }, {
            0: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xwa60dl xrxd3a7 x1iw51ew xde1mab x10b6aqq x47corl x1bczwif x17un8ov x7vuprf x1mg3h75"
            },
            2: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xwa60dl xrxd3a7 x1iw51ew xde1mab x10b6aqq x47corl x1bczwif x17un8ov x7vuprf x1mg3h75 xtvc7gp"
            },
            1: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xrxd3a7 x1iw51ew xde1mab x10b6aqq x1bczwif x17un8ov x7vuprf x1mg3h75 xetwxw6 x71s49j"
            },
            3: {
                className: "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xrxd3a7 x1iw51ew xde1mab x10b6aqq x1bczwif x17un8ov x7vuprf x1mg3h75 xtvc7gp xetwxw6 x71s49j"
            }
        }[(i.extraContentVisible === true) << 1 | (i.extraContentVisible === true) << 0], {
            children: [
                <div className="x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1rdoygx x1bczwif x17un8ov x7vuprf x1mg3h75 xwhdwdg"/>,
                i.bottomContent,
                d.jsx(r("WAWebMoveResizeResizers.react"), {
                    getResizeCallback,
                    currentAction,
                    directions: o("WAWebMoveResizeComponentUtils").RISIZE_BOTTOM_DIRECTIONS
                })
            ]
        })}/> : null}{i.disableResize ? null : d.jsx(r("WAWebMoveResizeResizers.react"), {
            getResizeCallback,
            currentAction,
            directions: i.topContent != null ? o("WAWebMoveResizeComponentUtils").RISIZE_SIDE_DIRECTIONS : undefined
        })}<div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props([
            C.moveResizeComponentInnerContainer,
            i.xstyle
        ]), {
            children: <Component_1 onMouseDown={Ne} onMouseUp={onMouseUp} currentAction={currentAction} disabled={i.enableDragBar} dragCursor={dragCursor_1}>{i.children}{currentAction !== o("WAWebMoveResizeComponentUtils").UserActions.IDLE ? <div className="x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d"/> : null}</Component_1>
        })}/></div>;
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    l.default = b;
}, 226);