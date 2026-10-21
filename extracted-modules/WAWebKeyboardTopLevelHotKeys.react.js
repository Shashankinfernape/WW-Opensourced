__d("WAWebKeyboardTopLevelHotKeys.react", [
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    function p(t) {
        const n = o("react-compiler-runtime").c(16);
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
        const { children, className, onBlur, skipNode } = l;
        const fRef = useRef(null);
        const g = r("useMergeRefs")(i, fRef);
        let h;
        let y;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = function() {
                r("WAWebFocusTracer").focus(fRef.current);
            };
            y = [];
            n[3] = h;
            n[4] = y;
        } else {
            h = n[3];
            y = n[4];
        }
        useEffect(h, y);
        let C;
        if (n[5] !== skipNode) {
            C = function(t) {
                const fRef_current = fRef.current;
                if (fRef_current) {
                    let n = o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
                    if (t) {
                        t.preventDefault();
                        n = t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
                    }
                    const a = o("WAWebKeyboardTabUtils").getNextTabbableElement(fRef_current, n, o("WAWebKeyboardTabUtils").FocusType.CUSTOM, function(e) {
                        return !skipNode(e);
                    });
                    if (a != null) {
                        r("WAWebFocusTracer").focus(a);
                    }
                }
            };
            n[5] = skipNode;
            n[6] = C;
        } else {
            C = n[6];
        }
        const tab = C;
        let v;
        if (n[7] !== a.onShowKeyboardShortcuts || n[8] !== tab) {
            v = {
                tab,
                "shift+tab": tab,
                "shift+?": a.onShowKeyboardShortcuts
            };
            n[7] = a.onShowKeyboardShortcuts;
            n[8] = tab;
            n[9] = v;
        } else {
            v = n[9];
        }
        const S = v;
        let R;
        if (n[10] !== children || n[11] !== className || n[12] !== S || n[13] !== g || n[14] !== onBlur) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            R = <Component handlers={S} className={className} onBlur={onBlur} ref={g}>{children}</Component>;
            n[10] = children;
            n[11] = className;
            n[12] = S;
            n[13] = g;
            n[14] = onBlur;
            n[15] = R;
        } else {
            R = n[15];
        }
        return R;
    }
    l.default = p;
}, 98);