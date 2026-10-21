__d("ReactHoverEvent.react", [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e, t, n) {
        return {
            clientX: t.clientX,
            clientY: t.clientY,
            pageX: t.pageX,
            pageY: t.pageY,
            screenX: t.screenX,
            screenY: t.screenY,
            target: n,
            timeStamp: t.timeStamp,
            type: e,
            x: t.clientX,
            y: t.clientY
        };
    }
    const m = {
        passive: true
    };
    function p(e, relatedTarget) {
        for(let n = relatedTarget; n != null;){
            if (n === e) {
                return true;
            }
            const r = n;
            const o = r._hoverEventTarget;
            if (o != null) {
                return false;
            }
            const a = n;
            const i = a.parentNode;
            n = i;
        }
        return false;
    }
    function useComponent(e, t) {
        let n;
        const a = o("react-compiler-runtime").c(17);
        const { disabled, onHoverChange, onHoverEnd, onHoverMove, onHoverStart } = t;
        const g = (n = r("ReactUseEvent.react"))("touchstart", m);
        const h = n("mouseover", m);
        const y = n("mouseout", m);
        const C = n("mousemove", m);
        const b = n("pointerover", m);
        const v = n("pointerout", m);
        const S = n("pointermove", m);
        const R = n("pointercancel", m);
        let L;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                isHovered: false,
                isTouched: false
            };
            a[0] = L;
        } else {
            L = a[0];
        }
        const ERef = useRef(L);
        let k;
        let I;
        if (a[1] !== disabled || a[2] !== C || a[3] !== y || a[4] !== h || a[5] !== onHoverChange || a[6] !== onHoverEnd || a[7] !== onHoverMove || a[8] !== onHoverStart || a[9] !== R || a[10] !== S || a[11] !== v || a[12] !== b || a[13] !== e || a[14] !== g) {
            k = function() {
                const e_current = e.current;
                const ERef_current = ERef.current;
                if (e_current !== null && ERef_current !== null) {
                    e_current._hoverEventTarget = true;
                    const r = (r)=>{
                        if (disabled === true) {
                            c(r);
                            return;
                        }
                        if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(r, "useHover")) {
                            o("ReactEventHookPropagation").stopEventHookPropagation(r, "useHover");
                            if (!ERef_current.isHovered && !p(e_current, r.relatedTarget)) {
                                ERef_current.isHovered = true;
                                if (onHoverStart) {
                                    onHoverStart(d("hoverstart", r, e_current));
                                }
                                if (onHoverChange) {
                                    onHoverChange(true);
                                }
                                if (o("ReactEventHelpers").hasPointerEvents) {
                                    S.setListener(document, u);
                                    R.setListener(document, c);
                                    v.setListener(document, a);
                                } else {
                                    y.setListener(document, a);
                                }
                            }
                        }
                    };
                    var a = function(r) {
                        if (ERef_current.isHovered && !p(e_current, r.relatedTarget)) {
                            ERef_current.isHovered = false;
                            if (onHoverEnd) {
                                onHoverEnd(d("hoverend", r, e_current));
                            }
                            if (onHoverChange) {
                                onHoverChange(false);
                            }
                            c(r);
                        }
                    };
                    var u = function(r) {
                        ERef_current.isTouched = false;
                        if (disabled === true) {
                            c(r);
                            return;
                        }
                        if (ERef_current.isHovered && onHoverMove) {
                            onHoverMove(d("hovermove", r, e_current));
                        }
                    };
                    var c = function(t) {
                        ERef_current.isTouched = false;
                        if (o("ReactEventHelpers").hasPointerEvents) {
                            S.setListener(document, null);
                            R.setListener(document, null);
                            v.setListener(document, null);
                        } else {
                            y.setListener(document, null);
                        }
                        a(t);
                    };
                    if (o("ReactEventHelpers").hasPointerEvents) {
                        b.setListener(e_current, function(e) {
                            if (e.pointerType !== "touch") {
                                r(e);
                            }
                        });
                    } else {
                        h.setListener(e_current, function(e) {
                            if (!ERef_current.isTouched) {
                                r(e);
                            }
                        });
                        g.setListener(e_current, function() {
                            ERef_current.isTouched = true;
                        });
                        C.setListener(document, u);
                    }
                    if (ERef_current.isHovered) {
                        if (o("ReactEventHelpers").hasPointerEvents) {
                            S.setListener(document, u);
                            R.setListener(document, c);
                            v.setListener(document, a);
                        } else {
                            y.setListener(document, a);
                        }
                    }
                }
            };
            I = [
                disabled,
                onHoverChange,
                onHoverEnd,
                onHoverMove,
                onHoverStart,
                R,
                S,
                v,
                b,
                C,
                y,
                h,
                e,
                g
            ];
            a[1] = disabled;
            a[2] = C;
            a[3] = y;
            a[4] = h;
            a[5] = onHoverChange;
            a[6] = onHoverEnd;
            a[7] = onHoverMove;
            a[8] = onHoverStart;
            a[9] = R;
            a[10] = S;
            a[11] = v;
            a[12] = b;
            a[13] = e;
            a[14] = g;
            a[15] = k;
            a[16] = I;
        } else {
            k = a[15];
            I = a[16];
        }
        useEffect(k, I);
    }
    l.useHover = useComponent;
}, 98);