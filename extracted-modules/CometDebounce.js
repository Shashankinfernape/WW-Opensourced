__d("CometDebounce", [
    "clearTimeout",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t = {}) {
        const n = t;
        const { leading, wait } = n;
        let i = true;
        let l;
        function s(...n) {
            let c;
            if (leading === true) {
                c = function() {
                    i = true;
                    l = undefined;
                };
                if (!i) {
                    r("clearTimeout")(l);
                    l = r("setTimeout")(c, wait);
                    return;
                }
                i = false;
                e(...n);
            } else {
                s.reset();
                c = function() {
                    l = undefined;
                    e(...n);
                };
            }
            l = r("setTimeout")(c, wait);
        }
        s.isPending = function() {
            return l != null;
        };
        s.reset = function() {
            r("clearTimeout")(l);
            l = undefined;
            i = true;
        };
        return s;
    }
    l.default = e;
}, 98);