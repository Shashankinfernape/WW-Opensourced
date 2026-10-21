__d("WAWebPrefetchIdentityKeysContactAction", [
    "WALogger",
    "WAWebManageE2ESessionsJob",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
                const wids = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob(t != null ? [
                    t,
                    n
                ] : [
                    n
                ]);
                yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    identityChanged: false,
                    sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                    wids
                });
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[security-code] identity key prefetch failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("security-code-identity-key-prefetch-failed");
            }
        });
        return u.apply(this, arguments);
    }
    l.prefetchIdentityKeysForSecurityCode = s;
}, 98);