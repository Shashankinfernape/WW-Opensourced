__d("ifRequired", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        let r;
        let a;
        if ((r = o) != null) {
            r.call(null, [
                e
            ], function(e) {
                a = e;
            });
        }
        if (a && t) {
            return t(a);
        }
        if (!a && n) {
            return n();
        }
    }
    i.default = e;
}, 66);