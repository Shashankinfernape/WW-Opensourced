__d("WAWebKeyboardRotateFocusModal.react", [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useRef = s.useRef;
    const d = {
        container: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineEnd: "xtijo5x",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            $$css: true
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(10);
        const { children, focusType, onBlur, ref, xstyle } = t;
        const p = s_useRef(null);
        const ref_1 = r("useMergeRefs")(ref, p);
        let f;
        if (n[0] !== focusType) {
            const g = (t)=>{
                const p_current = p.current;
                if (p_current) {
                    const n = t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
                    const r = focusType ?? {
                        type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    };
                    const { customSelector, type } = r;
                    const s = o("WAWebKeyboardTabUtils").getNextTabbableElement(p_current, n, type, undefined, customSelector);
                    if (s != null) {
                        t.preventDefault();
                        s.focus();
                    }
                }
            };
            f = function(t) {
                if (!(t.metaKey || t.ctrlKey) && t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
                    return g(t);
                }
            };
            n[0] = focusType;
            n[1] = f;
        } else {
            f = n[1];
        }
        const onKeyDown = f;
        let y;
        if (n[2] !== xstyle) {
            y = (e || (e = r("stylex"))).props(d.container, xstyle);
            n[2] = xstyle;
            n[3] = y;
        } else {
            y = n[3];
        }
        let C;
        if (n[4] !== children || n[5] !== onKeyDown || n[6] !== ref_1 || n[7] !== onBlur || n[8] !== y) {
            C = <div {...babelHelpers.extends({
                ref: ref_1
            }, y, {
                onKeyDown,
                tabIndex: -1,
                onBlur,
                children
            })}/>;
            n[4] = children;
            n[5] = onKeyDown;
            n[6] = ref_1;
            n[7] = onBlur;
            n[8] = y;
            n[9] = C;
        } else {
            C = n[9];
        }
        return C;
    }
    l.default = MComponent;
}, 98);