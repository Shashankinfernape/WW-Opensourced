__d("WAThrottle", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
        const a = n?.leading ?? true;
        const i = n?.trailing ?? true;
        let l = null;
        let s = null;
        let u = null;
        let c;
        function d(t) {
            l = Date.now();
            u = null;
            c = e(...t);
            return c;
        }
        function m() {
            s = null;
            const t = u;
            u = null;
            l = null;
            if (i && t != null) {
                c = e(...t);
            }
        }
        function p(...o) {
            const e = Date.now();
            const n = l == null ? t : e - l;
            u = o;
            if (l == null || n >= t) {
                if (s != null) {
                    self.clearTimeout(s);
                    s = null;
                }
                if (a) {
                    return d(o);
                }
                if (i) {
                    l = e;
                    s = self.setTimeout(m, t);
                }
            } else {
                if (s == null && i) {
                    s = self.setTimeout(m, t - n);
                }
            }
            return c;
        }
        const _ = function() {
            if (s != null) {
                self.clearTimeout(s);
                s = null;
            }
            u = null;
            l = null;
        };
        p.cancel = _;
        p.reset = _;
        p.flush = function() {
            if (s != null) {
                self.clearTimeout(s);
                s = null;
                const t = u;
                u = null;
                l = null;
                if (t != null) {
                    c = e(...t);
                }
            }
        };
        p.isPending = function() {
            return s != null;
        };
        return p;
    }
    i.throttle = e;
}, 66);