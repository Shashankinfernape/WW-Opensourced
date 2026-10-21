__d("useWAWebMusicChatsRefresh", [
    "WAWebMusicChatsRefreshBatcher",
    "react",
    "react-compiler-runtime",
    "useWAWebIntersection"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    const threshold = 0.5;
    function useC(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                root: null,
                threshold
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = r("useWAWebIntersection")(n);
        const i = a[0];
        const l = a[1];
        const l_intersectionRatio = l.intersectionRatio;
        const d = l_intersectionRatio >= threshold;
        let m;
        let p;
        if (t[1] !== d || t[2] !== e) {
            m = function() {
                if (d) {
                    o("WAWebMusicChatsRefreshBatcher").requestMusicChatsRefresh(e);
                }
            };
            p = [
                d,
                e
            ];
            t[1] = d;
            t[2] = e;
            t[3] = m;
            t[4] = p;
        } else {
            m = t[3];
            p = t[4];
        }
        useEffect(m, p);
        return i;
    }
    l.default = useC;
}, 98);