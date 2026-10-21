__d("useCometRouteTracePolicy", [
    "CometRouterRouteTracePolicyContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    const u = "comet.app";
    function useC() {
        return useContext(r("CometRouterRouteTracePolicyContext")) ?? u;
    }
    l.default = useC;
}, 98);