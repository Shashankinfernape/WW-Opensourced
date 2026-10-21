__d("nullthrows", [], function(t, n, r, o, a, i) {
    function e(e, t = "Got unexpected null or undefined") {
        if (e != null) {
            return e;
        }
        const n = new Error(t);
        n.framesToPop = 1;
        n.stack;
        throw n;
    }
    i.default = e;
}, 66);