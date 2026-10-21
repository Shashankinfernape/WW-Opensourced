__d("useWAWebShiftTimerCallback", [
    "WAShiftTimer",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useMemo } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(8);
        const n = r("useWAWebStableCallback")(e);
        let a;
        if (t[0] !== n) {
            a = new (o("WAShiftTimer")).ShiftTimer(n);
            t[0] = n;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== i.cancel) {
            l = function() {
                return i.cancel;
            };
            t[2] = i.cancel;
            t[3] = l;
        } else {
            l = t[3];
        }
        let s;
        if (t[4] !== i) {
            s = [
                i
            ];
            t[4] = i;
            t[5] = s;
        } else {
            s = t[5];
        }
        useEffect(l, s);
        let u;
        if (t[6] !== i) {
            u = function(t, n) {
                if (t === undefined) {
                    i.onOrBeforeRepaint();
                } else if (n === undefined) {
                    i.debounce(t);
                } else {
                    i.debounceAndCap(t, n);
                }
            };
            t[6] = i;
            t[7] = u;
        } else {
            u = t[7];
        }
        return u;
    }
    l.default = m;
}, 98);