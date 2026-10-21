__d("memoize", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        let t = e;
        let n;
        return function(...args) {
            if (args.length) {
                s(0, 4494);
            }
            if (t) {
                n = t();
                t = null;
            }
            return n;
        };
    }
    l.default = e;
}, 98);