__d("CometVisibilityUserActivityMonitor", [
    "Visibility"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        isUserActive: function() {
            return r("Visibility").isHidden() === false;
        },
        subscribe: function(t) {
            let e;
            const n = (e = r("Visibility")).addListener(e.HIDDEN, function() {
                return t(false);
            });
            const o = e.addListener(e.VISIBLE, function() {
                return t(true);
            });
            return function() {
                if (n) {
                    n.remove();
                }
                if (o) {
                    o.remove();
                }
            };
        }
    };
    l.default = e;
}, 98);