__d("useWAWebTimeLeftMs", [
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebThrottledCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    const u = 0.01;
    function useC(e, t, n) {
        const a = o("react-compiler-runtime").c(7);
        const i = n === undefined ? 1000 : n;
        const l = r("useLazyRef")(d);
        const cRef = useRef(0);
        const mRef = useRef(0);
        let p;
        if (a[0] !== e || a[1] !== l || a[2] !== t) {
            p = function() {
                if (l.current == null || cRef.current == null || t == null || e == null) {
                    return null;
                }
                const n = Date.now();
                const r = e - cRef.current;
                const o = n - l.current;
                cRef.current = e;
                l.current = n;
                if (o === 0) {
                    return null;
                }
                const a = t - e;
                const i = r / o;
                mRef.current = mRef.current === 0 ? i : i * u + mRef.current * (1 - u);
                return a / mRef.current;
            };
            a[0] = e;
            a[1] = l;
            a[2] = t;
            a[3] = p;
        } else {
            p = a[3];
        }
        let _;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                trailing: false,
                leading: true
            };
            a[4] = _;
        } else {
            _ = a[4];
        }
        const f = r("useWAWebThrottledCallback")(p, i, _);
        let g;
        if (a[5] !== f) {
            g = f();
            a[5] = f;
            a[6] = g;
        } else {
            g = a[6];
        }
        return g;
    }
    function d() {
        return Date.now();
    }
    l.useTimeLeftMs = useC;
}, 98);