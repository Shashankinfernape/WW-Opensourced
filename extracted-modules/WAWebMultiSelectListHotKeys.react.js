__d("WAWebMultiSelectListHotKeys.react", [
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(28);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = r;
        const { active, onEnter, onIndexChange, onLeave, role, xstyle } = i;
        let f;
        if (n[3] !== active || n[4] !== onIndexChange) {
            f = function(t) {
                t.preventDefault();
                t.stopPropagation();
                active.setNext(true);
                onIndexChange?.(active.index);
            };
            n[3] = active;
            n[4] = onIndexChange;
            n[5] = f;
        } else {
            f = n[5];
        }
        const g = f;
        let h;
        if (n[6] !== active || n[7] !== onIndexChange || n[8] !== onLeave) {
            h = function(t) {
                t.stopPropagation();
                t.preventDefault();
                const e = active.prev();
                if (e > -1) {
                    active.setPrev(true);
                    if (onIndexChange != null) {
                        onIndexChange(active.index);
                    }
                } else if (onLeave) {
                    onLeave(t);
                    active.unset();
                }
            };
            n[6] = active;
            n[7] = onIndexChange;
            n[8] = onLeave;
            n[9] = h;
        } else {
            h = n[9];
        }
        const y = h;
        let C;
        if (n[10] !== onEnter) {
            C = function(t) {
                onEnter?.(t);
            };
            n[10] = onEnter;
            n[11] = C;
        } else {
            C = n[11];
        }
        const b = C;
        const v = d;
        let S;
        if (n[12] !== active) {
            S = function(t) {
                if (v(t)) {
                    active.setFirst(true);
                }
            };
            n[12] = active;
            n[13] = S;
        } else {
            S = n[13];
        }
        const R = S;
        let L;
        if (n[14] !== active) {
            L = function(t) {
                if (v(t)) {
                    active.unset();
                }
            };
            n[14] = active;
            n[15] = L;
        } else {
            L = n[15];
        }
        const E = L;
        let k;
        if (n[16] !== b || n[17] !== g || n[18] !== y) {
            k = {
                down: g,
                up: y,
                enter: b,
                space: b
            };
            n[16] = b;
            n[17] = g;
            n[18] = y;
            n[19] = k;
        } else {
            k = n[19];
        }
        const I = k;
        let T;
        if (n[20] !== E || n[21] !== R || n[22] !== I || n[23] !== r.children || n[24] !== a || n[25] !== role || n[26] !== xstyle) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            T = <Component handlers={I} ref={a} onFocus={R} onBlur={E} tabIndex={0} xstyle={xstyle} role={role}>{r.children}</Component>;
            n[20] = E;
            n[21] = R;
            n[22] = I;
            n[23] = r.children;
            n[24] = a;
            n[25] = role;
            n[26] = xstyle;
            n[27] = T;
        } else {
            T = n[27];
        }
        return T;
    }
    function d(e) {
        const e_relatedTarget = e.relatedTarget;
        return e_relatedTarget instanceof HTMLElement && e.currentTarget instanceof HTMLElement && !e.currentTarget.contains(e_relatedTarget);
    }
    l.default = c;
}, 98);