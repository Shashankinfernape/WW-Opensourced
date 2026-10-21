__d("useWAWebLogUnknownUserDisplayed", [
    "WAWebUnknownUserDisplayEnricher",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useU(e, t, n) {
        const r = o("react-compiler-runtime").c(5);
        const a = t?.id;
        let i;
        let l;
        if (r[0] !== e || r[1] !== n || r[2] !== a) {
            i = function() {
                if (e != null && a != null && n) {
                    o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed(e, a);
                }
            };
            l = [
                e,
                a,
                n
            ];
            r[0] = e;
            r[1] = n;
            r[2] = a;
            r[3] = i;
            r[4] = l;
        } else {
            i = r[3];
            l = r[4];
        }
        useEffect(i, l);
    }
    l.useLogUnknownUserDisplayed = useU;
}, 98);