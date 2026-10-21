__d("useWAWebInterval", [
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef } = s;
    function useM(e, t, n) {
        const a = o("react-compiler-runtime").c(12);
        const i = t === undefined ? 0 : t;
        let l;
        if (a[0] !== n) {
            l = n ?? {};
            a[0] = n;
            a[1] = l;
        } else {
            l = a[1];
        }
        const { immediate = false } = l;
        const p = r("useWAWebStableCallback")(e);
        const _RefRef = useRef();
        let f;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                if (_RefRef.current != null) {
                    self.clearInterval(_RefRef.current);
                }
            };
            a[2] = f;
        } else {
            f = a[2];
        }
        const g = f;
        let h;
        if (a[3] !== i || a[4] !== p) {
            h = function() {
                g();
                _RefRef.current = self.setInterval(p, i);
            };
            a[3] = i;
            a[4] = p;
            a[5] = h;
        } else {
            h = a[5];
        }
        const y = h;
        let C;
        let b;
        if (a[6] !== immediate || a[7] !== y) {
            C = function() {
                if (immediate) {
                    y();
                }
                return g;
            };
            b = [
                immediate,
                y,
                g
            ];
            a[6] = immediate;
            a[7] = y;
            a[8] = C;
            a[9] = b;
        } else {
            C = a[8];
            b = a[9];
        }
        useEffect(C, b);
        let v;
        if (a[10] !== y) {
            v = [
                y,
                g
            ];
            a[10] = y;
            a[11] = v;
        } else {
            v = a[11];
        }
        return v;
    }
    l.default = useM;
}, 98);