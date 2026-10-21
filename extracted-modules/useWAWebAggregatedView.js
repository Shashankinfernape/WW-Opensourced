__d("useWAWebAggregatedView", [
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useMemo, useState } = s;
    function p(e, t) {
        const n = o("react-compiler-runtime").c(2);
        const a = useComponent(e, t);
        const i = a[0];
        let l;
        if (n[0] !== i) {
            l = r("nullthrows")(i);
            n[0] = i;
            n[1] = l;
        } else {
            l = n[1];
        }
        return l;
    }
    function useComponent(e, t) {
        const n = useState(1);
        const r = n[0];
        const o = n[1];
        const a = useCallback(function() {
            return o(function(e) {
                return e + 1;
            });
        }, [
            o
        ]);
        const i = useMemo(function() {
            if (t == null) {
                return null;
            }
            return e(t);
        }, (Array.isArray(t) ? t : [
            t
        ]).concat([
            r
        ]));
        useEffect(function() {
            i?.on("all", a);
            return function() {
                i?.off("all", a);
            };
        }, [
            i,
            a
        ]);
        return [
            i,
            r
        ];
    }
    l.useAggregatedView = p;
    l.useAggregatedViewImpl = useComponent;
}, 98);