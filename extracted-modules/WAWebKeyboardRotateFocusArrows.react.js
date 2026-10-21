__d("WAWebKeyboardRotateFocusArrows.react", [
    "WAWebBoolFunc",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useImperativeHandle, useRef } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(13);
        const { children, customSelector, ref, role } = e;
        const u = role === undefined ? "dialog" : role;
        const mRef = useRef(null);
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = function() {
                return mRef.current;
            };
            t[0] = p;
        } else {
            p = t[0];
        }
        const getElement = p;
        let f;
        if (t[1] !== customSelector) {
            f = function(t) {
                const mRef_current = mRef.current;
                if (mRef_current) {
                    const n = customSelector != null ? o("WAWebKeyboardTabUtils").getNextTabbableElement(mRef_current, t, o("WAWebKeyboardTabUtils").FocusType.CUSTOM_SELECTOR, o("WAWebBoolFunc").returnTrue, customSelector) : o("WAWebKeyboardTabUtils").getNextTabbableElement(mRef_current, t, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                    r("WAWebFocusTracer").focus(n);
                }
            };
            t[1] = customSelector;
            t[2] = f;
        } else {
            f = t[2];
        }
        const g = f;
        let h;
        if (t[3] !== g) {
            h = function() {
                g(o("WAWebKeyboardTabUtils").TabDirection.FORWARD);
            };
            t[3] = g;
            t[4] = h;
        } else {
            h = t[4];
        }
        const y = h;
        let C;
        if (t[5] !== g) {
            C = {
                left: function(t) {
                    const e = r("WAWebL10N").isRTL() ? o("WAWebKeyboardTabUtils").TabDirection.FORWARD : o("WAWebKeyboardTabUtils").TabDirection.BACKWARD;
                    g(e);
                    t.preventDefault();
                    t.stopPropagation();
                },
                right: function(t) {
                    const e = r("WAWebL10N").isRTL() ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
                    g(e);
                    t.preventDefault();
                    t.stopPropagation();
                }
            };
            t[5] = g;
            t[6] = C;
        } else {
            C = t[6];
        }
        const b = C;
        let v;
        if (t[7] !== y) {
            v = function() {
                return {
                    getElement,
                    focusFirst: y
                };
            };
            t[7] = y;
            t[8] = v;
        } else {
            v = t[8];
        }
        useImperativeHandle(ref, v);
        let S;
        if (t[9] !== children || t[10] !== b || t[11] !== u) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            S = <Component handlers={b} ref={mRef} tabIndex={null} role={u}>{children}</Component>;
            t[9] = children;
            t[10] = b;
            t[11] = u;
            t[12] = S;
        } else {
            S = t[12];
        }
        return S;
    }
    l.default = m;
}, 98);