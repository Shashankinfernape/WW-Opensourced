__d("WAWebCryptoEncryptionSaltHelper", [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = 128;
            const r = !!o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            let a = null;
            if (!r) {
                a = new Uint8Array(t);
                self.crypto.getRandomValues(a);
                a = btoa(String.fromCharCode(...Array.from(new Uint8Array(a))));
                yield o("WAWebUserPrefsMultiDevice").setWebEncSalt(a);
            }
            a = o("WAWebUserPrefsMultiDevice").getWebEncSalt();
            if (a == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[DB ENC CRITICAL ERROR] null returned for local enc salt"
                ])));
                o("WAWebCoreActionsODS").logSessionForcedLogout();
                o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.MissingEncSalt);
            }
            a = Uint8Array.from(atob(a), function(e) {
                return e.charCodeAt(0);
            });
            return (s || (s = n("Promise"))).resolve(a);
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsMultiDevice").setWebEncSalt(null);
        });
        return m.apply(this, arguments);
    }
    l.getOrGenSalt = u;
    l.deleteSalt = d;
}, 98);