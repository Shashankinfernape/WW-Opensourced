__d("CurrentCanonicalRoute", [
    "currentCometRouterInstance",
    "getTopMostRoute"
], function(t, n, r, o, a, i, l) {
    function e() {
        const t = o("currentCometRouterInstance").get_THIS_IS_NOT_WHAT_YOU_WANT()?.getCurrentRouterState();
        if (t != null) {
            const n = r("getTopMostRoute")(t);
            return n.canonicalRouteName;
        }
        return null;
    }
    l.getForGlobalLoggingOnly = e;
}, 98);