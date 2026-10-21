__d("performanceNavigationStart", [
    "performance"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = typeof window !== "undefined" ? window : self;
    let u;
    if ((e || (e = r("performance"))).now) {
        if ((e || (e = r("performance"))).timing && (e || (e = r("performance"))).timing.navigationStart) {
            u = function() {
                return (e || (e = r("performance"))).timing.navigationStart;
            };
        } else {
            if (typeof s._cstart === "number") {
                u = function() {
                    return s._cstart;
                };
            } else {
                const c = Date.now();
                u = function() {
                    return c;
                };
            }
            u.isPolyfilled = true;
        }
    } else {
        const d = function() {
            return 0;
        };
        u = d;
        d.isPolyfilled = true;
    }
    l.default = u;
}, 98);