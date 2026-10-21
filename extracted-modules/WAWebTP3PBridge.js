__d("WAWebTP3PBridge", [
    "WAWebFile3PSitevarConfig",
    "WAWebTP3PBridgeBase",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(n, r = t.getDefaultApp(), o) {
            return e.call(this, n, o ?? r.origin, r.topLevelOrigin) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.getDefaultApp = function() {
            const e = r("WAWebFile3PSitevarConfig")["application/pdf"];
            if (e.length === 0) {
                throw r("err")("No allowed PDF apps configured");
            }
            return e[0];
        };
        return t;
    })(o("WAWebTP3PBridgeBase").WAWebTP3PBridgeBase);
    l.WAWebTP3PBridge = e;
}, 98);