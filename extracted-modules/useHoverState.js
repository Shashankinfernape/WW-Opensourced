__d("useHoverState", [
    "react-compiler-runtime",
    "useBoolean",
    "useEventHandler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("react-compiler-runtime").c(11);
        const a = r("useBoolean")(false);
        const { set, setFalse, setTrue, value } = a;
        let c;
        if (n[0] !== setTrue || n[1] !== e) {
            c = function(n) {
                setTrue();
                e?.(n);
            };
            n[0] = setTrue;
            n[1] = e;
            n[2] = c;
        } else {
            c = n[2];
        }
        const d = r("useEventHandler")(c);
        let m;
        if (n[3] !== setFalse || n[4] !== t) {
            m = function(n) {
                setFalse();
                t?.(n);
            };
            n[3] = setFalse;
            n[4] = t;
            n[5] = m;
        } else {
            m = n[5];
        }
        const p = r("useEventHandler")(m);
        let _;
        if (n[6] !== d || n[7] !== p || n[8] !== value || n[9] !== set) {
            _ = {
                isHovered: value,
                onMouseEnter: d,
                onMouseLeave: p,
                setIsHovered: set
            };
            n[6] = d;
            n[7] = p;
            n[8] = value;
            n[9] = set;
            n[10] = _;
        } else {
            _ = n[10];
        }
        return _;
    }
    l.default = e;
}, 98);