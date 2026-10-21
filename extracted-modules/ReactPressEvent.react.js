__d("ReactPressEvent.react", [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    const d = {
        passive: true
    };
    function m(e, buttons, pointerType, r, o) {
        var a = {
            altKey: r.altKey,
            buttons,
            clientX: r.clientX,
            clientY: r.clientY,
            ctrlKey: r.ctrlKey,
            defaultPrevented: r.defaultPrevented,
            metaKey: r.metaKey,
            pageX: r.pageX,
            pageY: r.pageY,
            pointerType,
            screenX: r.screenX,
            screenY: r.screenY,
            shiftKey: r.shiftKey,
            target: o,
            timeStamp: r.timeStamp,
            type: e,
            x: r.clientX,
            y: r.clientY,
            preventDefault: function() {
                a.defaultPrevented = true;
                r.preventDefault();
            },
            stopPropagation: function() {
                r.stopPropagation();
            }
        };
        return a;
    }
    function useP(e, { disabled, onPressChange, onPressEnd, onPressMove, onPressStart }) {
        let n;
        const _RefRef = useRef({
            isPressed: false,
            isPressActive: false,
            pointerId: null,
            bounds: null,
            pointerType: "",
            buttons: 0,
            activationEvent: null
        });
        const f = (n = r("ReactUseEvent.react"))("pointerdown");
        const g = n("pointermove", d);
        const h = n("pointerup", d);
        const y = n("pointercancel", d);
        const C = n("mousedown");
        const b = n("mouseup", d);
        const v = n("mousemove", d);
        const S = n("dragstart", d);
        const R = n("focusout", d);
        useEffect(function() {
            const e_current = e.current;
            const _Ref_current = _RefRef.current;
            if (e_current !== null) {
                const r = document;
                const u = function(t) {
                    if (disabled === true) {
                        L(t);
                        return;
                    }
                    if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(t, "usePress")) {
                        o("ReactEventHookPropagation").stopEventHookPropagation(t, "usePress");
                        if (!(t.buttons === 2 || t.buttons > 4 || o("ReactEventHelpers").isMac && t.pointerType === "mouse" && t.ctrlKey)) {
                            _Ref_current.buttons = t.buttons;
                            if (t.button === 1) {
                                _Ref_current.buttons = 4;
                            }
                            c(t);
                        }
                    }
                };
                var c = (a)=>{
                    if (!_Ref_current.isPressed) {
                        const e = a;
                        const l = e.pointerId;
                        const s = e.pointerType || "mouse";
                        _Ref_current.isPressed = true;
                        _Ref_current.isPressActive = true;
                        _Ref_current.pointerId = l !== undefined ? l : null;
                        _Ref_current.pointerType = s;
                        _Ref_current.activationEvent = a;
                        if (s !== "mouse") {
                            _Ref_current.bounds = e_current.getBoundingClientRect();
                        }
                        if (onPressStart) {
                            onPressStart(m("pressstart", _Ref_current.buttons, s, a, e_current));
                        }
                        if (onPressChange) {
                            onPressChange(true);
                        }
                        if (o("ReactEventHelpers").hasPointerEvents) {
                            h.setListener(r, L);
                            g.setListener(r, E);
                            y.setListener(r, L);
                        } else {
                            v.setListener(r, E);
                            b.setListener(r, L);
                            S.setListener(r, L);
                        }
                    }
                };
                const d = (r)=>{
                    if (_Ref_current.isPressed) {
                        _Ref_current.isPressed = false;
                        if (onPressEnd) {
                            onPressEnd(m("pressend", _Ref_current.buttons, _Ref_current.pointerType, r, e_current));
                        }
                        if (onPressChange) {
                            onPressChange(false);
                        }
                    }
                };
                var L = function(t) {
                    _Ref_current.isPressActive = false;
                    _Ref_current.bounds = null;
                    _Ref_current.activationEvent = null;
                    d(t);
                    if (o("ReactEventHelpers").hasPointerEvents) {
                        h.setListener(r, null);
                        g.setListener(r, null);
                        y.setListener(r, null);
                    } else {
                        v.setListener(r, null);
                        b.setListener(r, null);
                        S.setListener(r, null);
                    }
                };
                var E = function(r) {
                    if (disabled === true) {
                        L(r);
                        return;
                    }
                    if (_Ref_current.isPressActive) {
                        const { pointerType, isPressed } = _Ref_current;
                        let i = false;
                        if (pointerType === "mouse") {
                            const l = r.target;
                            i = e_current.contains(l);
                        } else {
                            const p = r.pointerId;
                            const _ = _Ref_current.bounds;
                            if (p !== _Ref_current.pointerId || _ === null) {
                                return;
                            }
                            const { clientX, clientY } = r;
                            const { bottom, left, right, top } = _;
                            if (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom) {
                                i = true;
                            }
                        }
                        if (i) {
                            if (isPressed) {
                                if (onPressMove) {
                                    onPressMove(m("pressmove", _Ref_current.buttons, pointerType, r, e_current));
                                }
                            } else {
                                c(r);
                            }
                        } else if (isPressed) {
                            d(r);
                        }
                    }
                };
                if (o("ReactEventHelpers").hasPointerEvents) {
                    f.setListener(e_current, u);
                } else {
                    C.setListener(e_current, u);
                }
                R.setListener(e_current, function(e) {
                    const _Ref_current_activationEvent = _Ref_current.activationEvent;
                    if (e.target === e_current && _Ref_current_activationEvent !== null) {
                        L(_Ref_current_activationEvent);
                    }
                });
                if (_Ref_current.isPressActive) {
                    if (o("ReactEventHelpers").hasPointerEvents) {
                        h.setListener(r, L);
                        g.setListener(r, E);
                        y.setListener(r, L);
                    } else {
                        v.setListener(r, E);
                        b.setListener(r, L);
                        S.setListener(r, L);
                    }
                }
                return function() {
                    const _Ref_current_activationEvent = _Ref_current.activationEvent;
                    if (e.current === null && _Ref_current_activationEvent !== null) {
                        L(_Ref_current_activationEvent);
                    }
                };
            }
        }, [
            disabled,
            S,
            R,
            C,
            v,
            b,
            onPressChange,
            onPressEnd,
            onPressMove,
            onPressStart,
            y,
            f,
            g,
            h,
            e
        ]);
    }
    l.usePress = useP;
}, 98);