__d("WAMemoizeOne", [
    "shallowEqual"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t = r("shallowEqual")) {
        let n = null;
        const o = function(params) {
            if (n == null || !t(n.params, params)) {
                n = {
                    params,
                    result: e.call(this, params)
                };
            } else {
                n.params = params;
            }
            return n.result;
        };
        o.clear = function() {
            n = null;
        };
        return o;
    }
    l.default = e;
}, 98);