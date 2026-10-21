__d("ReactKeyboardEvent.react", [
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    const u = {
        passive: true
    };
    function c(e, t) {
        const n = o("react-compiler-runtime").c(8);
        const { disabled, onKeyDown, onKeyUp } = t;
        const c = disabled === undefined ? false : disabled;
        const d = r("ReactUseEvent.react")("keydown");
        const m = r("ReactUseEvent.react")("keyup", u);
        let p;
        let _;
        if (n[0] !== c || n[1] !== d || n[2] !== m || n[3] !== onKeyDown || n[4] !== onKeyUp || n[5] !== e) {
            p = function() {
                const e_current = e.current;
                if (e_current !== null) {
                    d.setListener(e_current, !c && onKeyDown || null);
                    m.setListener(e_current, !c && onKeyUp || null);
                }
            };
            _ = [
                c,
                onKeyDown,
                d,
                m,
                e,
                onKeyUp
            ];
            n[0] = c;
            n[1] = d;
            n[2] = m;
            n[3] = onKeyDown;
            n[4] = onKeyUp;
            n[5] = e;
            n[6] = p;
            n[7] = _;
        } else {
            p = n[6];
            _ = n[7];
        }
        useEffect(p, _);
    }
    l.useKeyboard = c;
}, 98);