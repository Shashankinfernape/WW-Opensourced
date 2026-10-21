__d("WAOnceWithReset", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    function l(t) {
        let n = e;
        const r = function(...args) {
            if (n === e) {
                for(var r = args.length, o = new Array(r), a = 0; a < r; a++){
                    o[a] = args[a];
                }
                n = t.call(...[
                    this
                ].concat(o));
            }
            return n;
        };
        r.reset = function() {
            n = e;
        };
        return r;
    }
    i.default = l;
}, 66);