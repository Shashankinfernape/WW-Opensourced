__d("WAWebDebounce", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t = 100, n) {
        const a = n?.leading ?? false;
        const i = n?.trailing ?? !a;
        let l = null;
        let s = null;
        let u = null;
        const c = function() {
            if (l != null) {
                self.clearTimeout(l);
            }
            l = null;
        };
        const d = function() {
            if (s != null) {
                self.clearTimeout(s);
            }
            s = null;
        };
        const m = function(r) {
            e.apply(n?.context, r);
        };
        const p = function() {
            if (l != null) {
                c();
                d();
                const e = u;
                u = null;
                if (i && e != null) {
                    m(e);
                }
            }
        };
        function _(..._) {
            const e = n?.maxWait;
            const r = a && l == null;
            u = r ? null : [].concat(_);
            c();
            if (r) {
                m(_);
            }
            l = self.setTimeout(function() {
                l = null;
                d();
                const e = u;
                u = null;
                if (i && e != null) {
                    m(e);
                }
            }, t);
            if (e != null && s == null) {
                s = self.setTimeout(function() {
                    s = null;
                    p();
                }, e);
            }
        }
        const f = function() {
            c();
            d();
            u = null;
        };
        _.reset = f;
        _.cancel = f;
        _.isPending = function() {
            return l != null;
        };
        _.flush = p;
        return _;
    }
    i.default = e;
}, 66);