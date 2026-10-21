__d("WAWebExternalEntryPointPrefs", [
    "WALogger",
    "WATimeUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = Date.now();
        return t - e.addedTime > o("WATimeUtils").WEEK_MILLISECONDS;
    }
    function c(t) {
        try {
            Object.entries(t).forEach(([n, r])=>{
                if (u(r)) {
                    delete t[n];
                }
            });
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.EXTERNAL_ENTRY_POINT, t);
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[external_ctx] failed to persist entry points"
            ])));
        }
    }
    function d() {
        try {
            const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.EXTERNAL_ENTRY_POINT);
            return e ?? {};
        } catch (e) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[external_ctx] failed to load entry points"
            ])));
            return {};
        }
    }
    function m({ authSuccess, chatId, deepLinkType, partnerName }) {
        const a = d();
        const i = Date.now();
        a[chatId.toString()] = {
            addedTime: i,
            deepLinkType,
            authSuccess,
            partnerName: partnerName ?? null
        };
        c(a);
    }
    function p(e) {
        const t = d();
        const n = t[e.toString()];
        if (n != null) {
            delete t[e.toString()];
            c(t);
        }
    }
    function _(e) {
        const t = d();
        const n = t[e.toString()];
        if (n == null || u(n)) {
            return null;
        }
        return n;
    }
    l.saveExternalEntryPoint = m;
    l.deleteExternalEntryPoint = p;
    l.getExternalEntryPoint = _;
}, 98);