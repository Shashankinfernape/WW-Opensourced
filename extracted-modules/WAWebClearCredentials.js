__d("WAWebClearCredentials", [
    "WALogger",
    "WAWebCryptoEncKeyHelper",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebLocalStorageClearOnLogout",
    "WAWebSignalStorage",
    "WAWebUserPrefsClearLocalState",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamLabelSyncTrackingReporter",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t = false;
            try {
                o("WAWebUserPrefsGeneral").setBrowserId();
            } catch (error) {
                t = true;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:clearState error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            try {
                o("WAWebUserPrefsMeUser").setUnknownId();
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:setUnknownId error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            try {
                o("WAWebUserPrefsMeUser").setMe();
            } catch (error) {
                t = true;
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:setMe error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            try {
                yield o("WAWebUserPrefsMultiDevice").clearRegistrationInfo();
            } catch (error) {
                t = true;
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:clearRegistrationInfo error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            try {
                yield o("WAWebSignalStorage").destroy();
            } catch (error) {
                t = true;
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:destroySignal error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            try {
                yield o("WAWebCryptoEncKeyHelper").deleteEncKeysAndCache();
                yield o("WAWebCryptoEncryptionSaltHelper").deleteSalt();
            } catch (e) {
                t = true;
            }
            try {
                o("WAWebWamLabelSyncTrackingReporter").resetLabelSyncTrackingState();
            } catch (error) {
                t = true;
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:resetLabelSyncTrackingState error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            o("WAWebLocalStorageClearOnLogout").clearLocalStorageKeysOnLogout();
            try {
                yield o("WAWebUserPrefsClearLocalState").clearAllLocalState();
            } catch (error) {
                t = true;
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:clearAllLocalState error"
                ]))).catching(r("getErrorSafe")(error)).tags("logout");
            }
            return t;
        });
        return f.apply(this, arguments);
    }
    l.default = _;
}, 98);