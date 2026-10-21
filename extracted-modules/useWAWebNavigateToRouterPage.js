__d("useWAWebNavigateToRouterPage", [
    "WAWebCometRouterGating",
    "WAWebNavBarCometRouting",
    "react",
    "react-compiler-runtime",
    "useCometRouterDispatcher",
    "useWAWebUiIdle"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    const u = new Set;
    function useC(e, t) {
        const n = o("react-compiler-runtime").c(11);
        const a = r("useCometRouterDispatcher")();
        let i;
        if (n[0] !== e) {
            i = o("WAWebNavBarCometRouting").getCometRouteForNavBarItem(e);
            n[0] = e;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        const c = r("useWAWebUiIdle")();
        let d;
        let m;
        if (n[2] !== l || n[3] !== a || n[4] !== c) {
            d = function() {
                if (!(l == null || a == null || !o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() || u.has(l))) {
                    u.add(l);
                    c(function() {
                        a.prefetchRouteDefinition(l);
                    });
                }
            };
            m = [
                a,
                l,
                c
            ];
            n[2] = l;
            n[3] = a;
            n[4] = c;
            n[5] = d;
            n[6] = m;
        } else {
            d = n[5];
            m = n[6];
        }
        useEffect(d, m);
        let p;
        if (n[7] !== l || n[8] !== a || n[9] !== t) {
            p = l != null && a != null && o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() ? function() {
                a.go(l, babelHelpers.extends({
                    navigationType: "navigation"
                }, t));
            } : null;
            n[7] = l;
            n[8] = a;
            n[9] = t;
            n[10] = p;
        } else {
            p = n[10];
        }
        return p;
    }
    l.default = useC;
}, 98);