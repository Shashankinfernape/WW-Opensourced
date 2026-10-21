__d("WAWebMmsClientSelectHost", [], function(t, n, r, o, a, i) {
    const e = 4;
    function l({ attemptCount: n, fallbackHost: r, lastFetchMadeProgress: o, lastHostUsed: a, selectedHost: i }) {
        if (o && a) {
            return a;
        }
        if (n <= 1) {
            return i;
        }
        if (n === e - 1 && r) {
            return r;
        }
        if (a?.equals(i) && i.fallback != null) {
            return i.fallback;
        }
        return r ?? i;
    }
    i.default = l;
}, 66);