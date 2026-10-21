__d("WAWebMdSessionIdCache", [
    "WAWebLocalStorage"
], function(t, n, r, o, a, i, l) {
    const e = "mdSessionId";
    let s = null;
    function u() {
        if (s != null) {
            return s;
        }
        const t = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(e);
        if (t != null && typeof t === "string" && t.length > 0) {
            s = t;
            return s;
        }
        return null;
    }
    function c(t) {
        if (t == null) {
            d();
            return;
        }
        if (t.length !== 0) {
            s = t;
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").setItem(e, t);
            }
        }
    }
    function d() {
        s = null;
        if (r("WAWebLocalStorage") != null) {
            r("WAWebLocalStorage").removeItem(e);
        }
    }
    l.getCachedMdSessionId = u;
    l.setMdSessionId = c;
    l.clearMdSessionId = d;
}, 98);