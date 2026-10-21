__d("WAWebMoveResizeComponentHooks", [
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeConstants",
    "WAWebVelocityAnimate",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    const u = 20;
    const c = 20;
    function d(e) {
        const t = o("react-compiler-runtime").c(22);
        const { aspectRatio, bottom, disableResize, height, independentResize, left, margin, minHeightProp, minWidth, onMove, onMoveEnd, onMoveStart, onResize, onResizeEnd, onResizeStart, setBottom, setHeight, setLeft, setWidth, width } = e;
        let E;
        if (t[0] !== aspectRatio || t[1] !== bottom || t[2] !== disableResize || t[3] !== height || t[4] !== independentResize || t[5] !== left || t[6] !== margin.x || t[7] !== margin.y || t[8] !== minHeightProp || t[9] !== minWidth || t[10] !== onMove || t[11] !== onMoveEnd || t[12] !== onMoveStart || t[13] !== onResize || t[14] !== onResizeEnd || t[15] !== onResizeStart || t[16] !== setBottom || t[17] !== setHeight || t[18] !== setLeft || t[19] !== setWidth || t[20] !== width) {
            E = function(t) {
                const { key, shiftKey } = t;
                if (!(key !== "ArrowUp" && key !== "ArrowDown" && key !== "ArrowLeft" && key !== "ArrowRight") && !(t.target instanceof HTMLInputElement)) {
                    t.preventDefault();
                    if (shiftKey && disableResize !== true) {
                        let E = width;
                        let k = height;
                        const I = independentResize !== true;
                        switch(key){
                            case "ArrowRight":
                                E = Math.max(minWidth, width + c);
                                if (I) {
                                    k = E / aspectRatio;
                                }
                                break;
                            case "ArrowLeft":
                                E = Math.max(minWidth, width - c);
                                if (I) {
                                    k = E / aspectRatio;
                                }
                                break;
                            case "ArrowUp":
                                if (I) {
                                    E = Math.max(minWidth, width + c * aspectRatio);
                                    k = E / aspectRatio;
                                } else {
                                    k = height + c;
                                }
                                break;
                            default:
                                if (key === "ArrowDown") {
                                    if (I) {
                                        E = Math.max(minWidth, width - c * aspectRatio);
                                        k = E / aspectRatio;
                                    } else {
                                        k = Math.max(minHeightProp ?? minWidth / aspectRatio, height - c);
                                    }
                                }
                        }
                        const T = window.innerWidth - left - margin.x;
                        const D = window.innerHeight - bottom - margin.y;
                        E = Math.min(E, T);
                        k = Math.min(k, D);
                        if (I) {
                            const x = E / aspectRatio;
                            const $ = k * aspectRatio;
                            if (x <= k) {
                                k = x;
                            } else {
                                E = $;
                            }
                        }
                        if (E !== width || k !== height) {
                            if (onResizeStart != null) {
                                onResizeStart();
                            }
                            setWidth(E);
                            setHeight(k);
                            if (onResize != null) {
                                onResize(E, left, bottom);
                            }
                            if (onResizeEnd != null) {
                                onResizeEnd();
                            }
                        }
                    } else {
                        let P = left;
                        let N = bottom;
                        switch(key){
                            case "ArrowRight":
                                P = left + u;
                                break;
                            case "ArrowLeft":
                                P = left - u;
                                break;
                            case "ArrowUp":
                                N = bottom + u;
                                break;
                            default:
                                if (key === "ArrowDown") {
                                    N = bottom - u;
                                }
                        }
                        P = Math.max(margin.x, Math.min(P, window.innerWidth - width - margin.x));
                        N = Math.max(margin.y, Math.min(N, window.innerHeight - height - margin.y));
                        if (P !== left || N !== bottom) {
                            if (onMoveStart != null) {
                                onMoveStart();
                            }
                            setLeft(P);
                            setBottom(N);
                            if (onMove != null) {
                                onMove(P, N);
                            }
                            if (onMoveEnd != null) {
                                onMoveEnd();
                            }
                        }
                    }
                }
            };
            t[0] = aspectRatio;
            t[1] = bottom;
            t[2] = disableResize;
            t[3] = height;
            t[4] = independentResize;
            t[5] = left;
            t[6] = margin.x;
            t[7] = margin.y;
            t[8] = minHeightProp;
            t[9] = minWidth;
            t[10] = onMove;
            t[11] = onMoveEnd;
            t[12] = onMoveStart;
            t[13] = onResize;
            t[14] = onResizeEnd;
            t[15] = onResizeStart;
            t[16] = setBottom;
            t[17] = setHeight;
            t[18] = setLeft;
            t[19] = setWidth;
            t[20] = width;
            t[21] = E;
        } else {
            E = t[21];
        }
        return E;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const { componentRef, setBottom, setHeight, setLeft, setWidth, unmountSignal } = e;
        let c;
        if (t[0] !== setBottom || t[1] !== setHeight || t[2] !== setLeft || t[3] !== setWidth) {
            c = function(t) {
                if (t.width != null) {
                    setWidth(t.width);
                }
                if (t.height != null) {
                    setHeight(t.height);
                }
                if (t.bottom != null) {
                    setBottom(t.bottom);
                }
                if (t.left != null) {
                    setLeft(t.left);
                }
            };
            t[0] = setBottom;
            t[1] = setHeight;
            t[2] = setLeft;
            t[3] = setWidth;
            t[4] = c;
        } else {
            c = t[4];
        }
        const updateDimensionState = c;
        let m;
        if (t[5] !== componentRef || t[6] !== unmountSignal || t[7] !== updateDimensionState) {
            m = function(t, a) {
                if (componentRef.current == null) {
                    updateDimensionState(a);
                    return;
                }
                const e = r("WAWebVelocityAnimate")(componentRef.current, t, {
                    duration: o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
                    easing: o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_TYPE
                });
                e.then(()=>{
                    if (!unmountSignal.aborted) {
                        updateDimensionState(a);
                    }
                }).catch(()=>{
                    if (!unmountSignal.aborted) {
                        updateDimensionState(a);
                    }
                });
            };
            t[5] = componentRef;
            t[6] = unmountSignal;
            t[7] = updateDimensionState;
            t[8] = m;
        } else {
            m = t[8];
        }
        const animateDimensionChange = m;
        let _;
        if (t[9] !== animateDimensionChange || t[10] !== updateDimensionState) {
            _ = {
                updateDimensionState,
                animateDimensionChange
            };
            t[9] = animateDimensionChange;
            t[10] = updateDimensionState;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    function p({ aspectRatio, bottom, componentRef, getRect, left, margin, setBottom, setLeft, unmountSignal, width }) {
        return function(e, p) {
            const _ = e.getBoundingClientRect();
            const f = {
                left: _.left - p,
                top: _.top - p,
                right: _.right + p,
                bottom: _.bottom + p
            };
            const g = getRect();
            if (o("WAWebMoveResizeComponentUtils").doOverlap(g, f)) {
                const dists = o("WAWebMoveResizeComponentUtils").escapeDistance(g, f);
                const y = o("WAWebMoveResizeComponentUtils").findEscapeDirection({
                    aspectRatio,
                    bottom,
                    dists,
                    left,
                    margin,
                    width
                });
                const { direction, distance } = y;
                if (!(distance === undefined || direction == null)) {
                    let v = {};
                    switch(direction){
                        case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
                            v = {
                                left: left - dists.toLeftDistance
                            };
                            break;
                        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
                            v = {
                                bottom: bottom - dists.toBottomDistance
                            };
                            break;
                        case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
                            v = {
                                left: left + dists.toRightDistance
                            };
                            break;
                        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
                            v = {
                                bottom: bottom + dists.toTopDistance
                            };
                            break;
                        default:
                            break;
                    }
                    r("WAWebVelocityAnimate")(r("nullthrows")(componentRef.current), v, {
                        duration: o("WAWebMoveResizeConstants").ESCAPE_OVERLAP_ANIMATION_DURATION
                    }).then(()=>{
                        if (!unmountSignal.aborted) {
                            if (v.left != null) {
                                setLeft(v.left);
                            }
                            if (v.bottom != null) {
                                setBottom(v.bottom);
                            }
                        }
                    });
                }
            }
        };
    }
    l.useKeyboardNavigation = d;
    l.useDimensionAnimation = m;
    l.createEscapeOverlapHandler = p;
}, 98);