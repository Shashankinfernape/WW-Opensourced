__d("once", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = l(e);
        for(const n in e){
            if (Object.prototype.hasOwnProperty.call(e, n)) {
                t[n] = e[n];
            }
        }
        return t;
    }
    function l(e) {
        let t = e;
        let n;
        const r = function(...args) {
            if (t) {
                for(var e = args.length, r = new Array(e), o = 0; o < e; o++){
                    r[o] = args[o];
                }
                n = t.apply(this, r);
                t = null;
            }
            return n;
        };
        return r;
    }
    i.default = e;
}, 66);