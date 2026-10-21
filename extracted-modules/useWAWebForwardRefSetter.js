__d("useWAWebForwardRefSetter", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = c(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function c(e) {
        return function(t) {
            if (e) {
                if (typeof e === "function") {
                    e(t);
                } else {
                    e.current = t;
                }
            }
        };
    }
    l.default = u;
}, 98);