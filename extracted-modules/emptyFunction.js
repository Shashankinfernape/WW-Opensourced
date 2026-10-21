__d("emptyFunction", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return function() {
            return e;
        };
    }
    const l = function() {};
    l.thatReturns = e;
    l.thatReturnsFalse = e(false);
    l.thatReturnsTrue = e(true);
    l.thatReturnsNull = e(null);
    l.thatReturnsThis = function() {
        return this;
    };
    l.thatReturnsArgument = function(e) {
        return e;
    };
    i.default = l;
}, 66);