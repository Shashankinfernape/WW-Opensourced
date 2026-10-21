__d("WAWebLoginBounceGuard", [
    "WAWebSessionStorage"
], function(t, n, r, o, a, i, l) {
    const e = 2;
    const s = "wa_web_login_bounce_count";
    function u() {
        const e = r("WAWebSessionStorage") == null ? void 0 : r("WAWebSessionStorage").getItem(s);
        const t = e != null ? parseInt(e, 10) : 0;
        if (Number.isNaN(t)) {
            return 0;
        }
        return t;
    }
    function c() {
        if (r("WAWebSessionStorage") != null) {
            r("WAWebSessionStorage").setItem(s, String(u() + 1));
        }
    }
    function d() {
        if (r("WAWebSessionStorage") != null) {
            r("WAWebSessionStorage").removeItem(s);
        }
    }
    l.MAX_LOGIN_BOUNCES = e;
    l.getLoginBounceCount = u;
    l.bumpLoginBounceCount = c;
    l.resetLoginBounceCount = d;
}, 98);