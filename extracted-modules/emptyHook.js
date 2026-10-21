__d("emptyHook", [
    "emptyFunction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function thatReturns(e) {
        function t() {
            return e;
        }
        return t;
    }
    const s = {
        thatReturns,
        thatReturnsNull: thatReturns(null),
        thatReturnsTrue: thatReturns(true),
        thatReturnsFalse: thatReturns(false),
        thatReturnsEmptyFunction: thatReturns(r("emptyFunction"))
    };
    l.default = s;
}, 98);