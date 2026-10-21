__d("WAWebHandlePreviousLogout", [
    "WALogger",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLogoutReason",
    "WAWebReloadAfterLogout",
    "WAWebURLUtils",
    "WAWebWAWCInit",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        const t = new URLSearchParams(window.location.search ?? "");
        const n = t.get("logout_reason");
        if (n != null) {
            o("WAWebLogoutReason").setPrevLogoutReasonCode(n);
        }
        const a = t.get("logout_message_header");
        const i = t.get("logout_message_subtext");
        if (a != null || i != null) {
            o("WAWebLogoutReason").setPrevCustomLogoutMessage({
                logoutMessageHeader: a,
                logoutMessageSubtext: i
            });
        }
        const l = t.get("post_logout") === "1";
        if (!(!l && n == null) && r("WAWebURLUtils").canMuckHistory()) {
            for (const s of o("WAWebReloadAfterLogout").POST_LOGOUT_URL_MARKERS){
                t.delete(s);
            }
            const u = t.toString();
            const c = u !== "" ? `${window.location.pathname}?${u}` : window.location.pathname;
            window.history.replaceState({}, document.title, c);
        }
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet();
            const n = o("WAWebLocalStorageUtils").isUserLoggedOut();
            if (t || n) {
                try {
                    yield o("WAWebIndexedDBPurge").deleteAllIdb();
                    yield o("WAWebWAWCInit").initWAWC();
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Preemptive db delete failed with error ",
                        ""
                    ])), t).tags("app-wrapper");
                }
            }
            if (t) {
                const i = new URLSearchParams(window.location.search ?? "");
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").clear();
                }
                i.set("post_logout", "1");
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] handlePreviousLogoutFailures"
                ])));
                window.location.href = `${window.location.pathname}?${i.toString()}`;
            }
            u();
        });
        return d.apply(this, arguments);
    }
    l.processLogoutReasonAndCleanupUrl = u;
    l.handlePreviousLogoutFailures = c;
}, 98);