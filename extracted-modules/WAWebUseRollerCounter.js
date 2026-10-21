__d("WAWebUseRollerCounter", [
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useRef, useState } = s;
    const d = 50;
    function useM(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = useState(e);
        const currentValueProp = n[0];
        const i = n[1];
        const l = useState(null);
        const previousValueProp = l[0];
        const m = l[1];
        const pRef = useRef(null);
        if (pRef.current == null) {
            pRef.current = currentValueProp;
        }
        let _;
        if (t[0] !== e) {
            _ = function() {
                if (pRef.current != null && pRef.current !== e) {
                    i(e);
                    m(pRef.current);
                }
                pRef.current = null;
            };
            t[0] = e;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = r("useWAWebDebouncedCallback")(_, d);
        if (e != null) {
            f();
        }
        let g;
        if (t[2] !== currentValueProp || t[3] !== previousValueProp) {
            g = {
                currentValueProp,
                previousValueProp
            };
            t[2] = currentValueProp;
            t[3] = previousValueProp;
            t[4] = g;
        } else {
            g = t[4];
        }
        return g;
    }
    l.useRollerCounter = useM;
}, 98);