__d("WAWebShortcakeLinkingRequestOptionsCache", [
    "WALogger",
    "WAWebABProps",
    "WAWebShortcakeLinkingIq",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        const t = o("WAWebABProps").getABPropConfigValue("shortcake_companion_prologue__passkeys__request_options_ttl_seconds") ?? 600;
        return t * 1000;
    }
    let c = null;
    let d = 0;
    function m(e) {
        c = e;
        d = Date.now();
    }
    function p() {
        c = null;
        d = 0;
    }
    function _() {
        return c;
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = _();
            if (t != null && Date.now() - d < u()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake prologue: using cached PasskeyRequestOptions"
                ])));
                return t;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[shortcake] fetching fresh PasskeyRequestOptions"
            ])));
            const n = yield o("WAWebShortcakeLinkingIq").requestPasskeyRequestOptions();
            m(n);
            return n;
        });
        return g.apply(this, arguments);
    }
    l.setCachedRequestOptions = m;
    l.clearCachedRequestOptions = p;
    l.getCachedRequestOptions = _;
    l.getRequestOptions = f;
}, 98);