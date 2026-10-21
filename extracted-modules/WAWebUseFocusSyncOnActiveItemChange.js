__d("WAWebUseFocusSyncOnActiveItemChange", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e, t, n) {
        const r = o("react-compiler-runtime").c(5);
        const aRef = useRef(e);
        let i;
        let l;
        if (r[0] !== e || r[1] !== t || r[2] !== n) {
            i = function() {
                if (aRef.current !== e) {
                    aRef.current = e;
                    const r = t.current;
                    if (r != null && r.contains(document.activeElement)) {
                        n();
                    }
                }
            };
            l = [
                e,
                t,
                n
            ];
            r[0] = e;
            r[1] = t;
            r[2] = n;
            r[3] = i;
            r[4] = l;
        } else {
            i = r[3];
            l = r[4];
        }
        useEffect(i, l);
    }
    l.useFocusSyncOnActiveItemChange = d;
}, 98);