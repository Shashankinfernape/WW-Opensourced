__d("performanceNow", [
    "performance"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    if ((e || (e = r("performance"))).now) {
        s = function() {
            return (e || (e = r("performance"))).now();
        };
    } else {
        const u = t._cstart;
        const c = Date.now();
        let d = typeof u === "number" && u < c ? u : c;
        let m = 0;
        s = function() {
            const e = Date.now();
            let t = e - d;
            if (t < m) {
                d -= m - t;
                t = e - d;
            }
            m = t;
            return t;
        };
    }
    l.default = s;
}, 98);