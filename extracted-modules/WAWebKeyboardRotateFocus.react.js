__d("WAWebKeyboardRotateFocus.react", [
    "WAWebFocusTracer",
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useRef = s.useRef;
    function d(e, focusType, n) {
        const r = o("WAWebKeyboardTabUtils").getTabbableElements(e, focusType);
        const activeElement = e.ownerDocument.activeElement;
        let i = r.findIndex((e)=>e === activeElement);
        if (i === -1) {
            for(let l = r.length - 1; l >= 0; l--){
                if (r[l].contains(activeElement)) {
                    i = l;
                    break;
                }
            }
        }
        return n && i === r.length - 1 || !n && i === 0;
    }
    function m(t) {
        const n = o("react-compiler-runtime").c(13);
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
        const { allowEscape, focusType } = l;
        const _ = s_useRef(null);
        const g = r("useMergeRefs")(i, _);
        const h = r("useWAWebIsKeyboardUser")();
        const h_setIsKeyboardUser = h.setIsKeyboardUser;
        let C;
        if (n[3] !== allowEscape || n[4] !== focusType || n[5] !== h_setIsKeyboardUser) {
            C = function(t) {
                if (!(t.metaKey || t.ctrlKey)) {
                    const e = _.current;
                    let n;
                    if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
                        if (allowEscape === true && e != null && d(e, focusType, !t.shiftKey) || (e != null && (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD, focusType)), n == null)) {
                            return;
                        }
                        t.stopPropagation();
                        t.preventDefault();
                        h_setIsKeyboardUser(true);
                    } else {
                        if (e != null && e === document.activeElement) {
                            n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, focusType, p);
                        }
                    }
                    if (n != null) {
                        f(n);
                    }
                }
            };
            n[3] = allowEscape;
            n[4] = focusType;
            n[5] = h_setIsKeyboardUser;
            n[6] = C;
        } else {
            C = n[6];
        }
        const b = C;
        const a_style = a.style;
        let S;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod";
            n[7] = S;
        } else {
            S = n[7];
        }
        let R;
        if (n[8] !== b || n[9] !== g || n[10] !== a.children || n[11] !== a.style) {
            R = <div ref={g} style={a_style} className={S} onKeyDown={b} tabIndex={-1}>{a.children}</div>;
            n[8] = b;
            n[9] = g;
            n[10] = a.children;
            n[11] = a.style;
            n[12] = R;
        } else {
            R = n[12];
        }
        return R;
    }
    function p(e) {
        return e.nodeName.toLowerCase() === "input";
    }
    const _ = m;
    function f(e) {
        r("WAWebFocusTracer").focus(e);
    }
    l.RotateFocus = _;
}, 98);