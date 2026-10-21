__d("getTopMostRouteInfo", [
    "pushViewToRouteInfo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ hosted, main, pushViewStack }) {
        if (pushViewStack && pushViewStack.length > 0) {
            return r("pushViewToRouteInfo")(pushViewStack[pushViewStack.length - 1]);
        }
        return hosted || main;
    }
    l.default = e;
}, 98);