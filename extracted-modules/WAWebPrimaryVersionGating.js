__d("WAWebPrimaryVersionGating", [
    "WAWebPrimaryVersion"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = s(o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion(), e);
        return t != null && t >= 0;
    }
    function s(e, t) {
        const n = e == null ? null : u(e);
        const r = u(t);
        if (n == null || r == null) {
            return null;
        }
        for(let o = Math.max(n.length, r.length), a = 0; a < o; a++){
            const s = (n[a] ?? 0) - (r[a] ?? 0);
            if (s !== 0) {
                return s;
            }
        }
        return 0;
    }
    function u(e) {
        const t = e.trim().split(".");
        if (t.some((e)=>!/^\d+$/.test(e))) {
            return null;
        }
        return t.map(Number);
    }
    l.primaryVersionIsAtLeast = e;
}, 98);