__d("useWAWebLogEventOnce", [
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const nRef = useRef(false);
        const a = r("useWAWebStableCallback")(e);
        let i;
        let l;
        if (t[0] !== a) {
            i = function() {
                if (!nRef.current) {
                    nRef.current = true;
                    a();
                }
            };
            l = [
                a
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useEffect(i, l);
    }
    l.useLogEventOnce = d;
}, 98);