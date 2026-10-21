__d("useWAWebStaticButtonA11y", [
    "WAWebKeyboardIsKeyActivation",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useRef;
    function u(e) {}
    function c(e, t) {
        const i = o("react-compiler-runtime").c(6);
        const l = s();
        let c;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = function(t) {
                l.current = t;
            };
            i[0] = c;
        } else {
            c = i[0];
        }
        const d = c;
        let m;
        if (i[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    t.stopPropagation();
                    t.preventDefault();
                    l.current?.click();
                }
            };
            i[1] = m;
        } else {
            m = i[1];
        }
        const p = m;
        const _ = t?.disabled === true;
        const f = _ ? u : e;
        const g = t?.disabled ?? void 0;
        const h = _ ? -1 : t?.tabIndex ?? 0;
        let y;
        if (i[2] !== f || i[3] !== g || i[4] !== h) {
            y = [
                d,
                {
                    "aria-disabled": g,
                    onClick: f,
                    onKeyPress: p,
                    role: "button",
                    tabIndex: h
                }
            ];
            i[2] = f;
            i[3] = g;
            i[4] = h;
            i[5] = y;
        } else {
            y = i[5];
        }
        return y;
    }
    l.default = c;
}, 98);