__d("WAWebDeleteGuestSessionOnWebLoad", [
    "Promise",
    "WALogger",
    "WAWebGuestCoreLocalStorage",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== "") {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[guest] nuking existing guest session on this browser"
                ])));
                p();
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").clear();
                }
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").setItem(o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT, "1");
                }
                const t = yield o("WAWebIndexedDBPurge").deleteAllIdb();
                if (!(t || r("WAWebLocalStorage") == null)) {
                    r("WAWebLocalStorage").removeItem(o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT);
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                let e;
                const t = yield (e = window.navigator.serviceWorker) == null || e.getRegistrations == null ? void 0 : e.getRegistrations();
                if (t == null) {
                    return;
                }
                const r = [];
                for (const a of t){
                    if (f(a.scope)) {
                        r.push(a.unregister().catch((e)=>{
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[guest] failed to unregister service worker"
                            ])));
                        }));
                    }
                }
                yield (c || (c = n("Promise"))).all(r);
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[guest] failed to unregister service workers"
                ])));
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        try {
            return new URL(e).pathname.startsWith("/guest");
        } catch (e) {
            return false;
        }
    }
    l.maybeDeleteGuestSessionOnWebLoad = d;
    l.unregisterGuestServiceWorkers = p;
}, 98);