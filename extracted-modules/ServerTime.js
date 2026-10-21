__d("ServerTime", [
    "ServerTimeData"
], function(t, n, r, o, a, i, l) {
    let s = 0;
    let u = 0;
    let c = null;
    const d = (typeof window !== "undefined" ? window : self).performance?.timing;
    if (d) {
        const { requestStart, domLoading } = d;
        if (requestStart && domLoading) {
            const _ = r("ServerTimeData").timeOfResponseStart - r("ServerTimeData").timeOfRequestStart;
            const f = domLoading - requestStart - _;
            u = f / 2;
            const g = domLoading - r("ServerTimeData").timeOfResponseStart - u;
            const h = Math.max(50, f * 0.8);
            if (Math.abs(g) > h) {
                s = Math.round(g);
                c = Date.now();
            }
        }
    } else {
        b(r("ServerTimeData").serverTime);
    }
    function y() {
        return Date.now() - s;
    }
    function C() {
        return s;
    }
    function b(e) {
        const t = Date.now() - e;
        if (Math.abs(s - t) > 60000) {
            s = Math.round(t);
            c = Date.now();
        }
    }
    function v() {
        if (c === null) {
            return null;
        }
        return Date.now() - c;
    }
    const S = y;
    const R = C;
    l.getMillis = y;
    l.getOffsetMillis = C;
    l.update = b;
    l.getMillisSinceLastUpdate = v;
    l.get = S;
    l.getSkew = R;
}, 98);