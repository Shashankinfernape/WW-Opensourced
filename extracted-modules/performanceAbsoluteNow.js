__d("performanceAbsoluteNow", [
    "performance",
    "performanceAbsoluteNowOnAdjust"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = function() {
        return Date.now();
    };
    function setFallback(e) {
        s = e;
    }
    let c = 0;
    let d = -1;
    const m = typeof (e || (e = r("performance"))) === "object";
    const p = m && typeof (e || (e = r("performance"))).now === "function";
    if (m) {
        if ((e || (e = r("performance"))).timeOrigin) {
            d = (e || (e = r("performance"))).timeOrigin;
        } else if ((e || (e = r("performance"))).timing && (e || (e = r("performance"))).timing.navigationStart) {
            d = (e || (e = r("performance"))).timing.navigationStart;
        }
    }
    let _;
    let adjusted;
    let __adjust = function() {
        return 0;
    };
    if (p && d !== -1) {
        _ = function() {
            return (e || (e = r("performance"))).now() + d;
        };
        adjusted = function() {
            return _() + c;
        };
        __adjust = function() {
            const e = Date.now() - _();
            if (e > 500) {
                c = e;
                r("performanceAbsoluteNowOnAdjust").call(e);
            }
            return e;
        };
        if (typeof window === "object" && typeof window.addEventListener === "function") {
            const h = {
                capture: false,
                passive: true
            };
            window.addEventListener("blur", __adjust, h);
            window.addEventListener("focus", __adjust, h);
        }
    } else {
        adjusted = _ = function() {
            return s();
        };
    }
    const y = {
        setFallback,
        fromRelativeTime: (()=>{
            if (d === -1) {
                const t = p ? Date.now() - (e || (e = r("performance"))).now() : 0;
                return function(e) {
                    return e + t;
                };
            } else {
                return function(e) {
                    return e + d;
                };
            }
        })(),
        __adjust,
        adjusted
    };
    function C() {
        return _();
    }
    C.setFallback = y.setFallback;
    C.fromRelativeTime = y.fromRelativeTime;
    C.__adjust = y.__adjust;
    C.adjusted = y.adjusted;
    l.default = C;
}, 98);