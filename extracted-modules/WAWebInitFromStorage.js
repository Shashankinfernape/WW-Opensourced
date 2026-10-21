__d("WAWebInitFromStorage", [
    "Promise",
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebBackendApi",
    "WAWebConnModel",
    "WAWebLogoutReasonConstants",
    "WAWebMobilePlatforms",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebSchemaNonMessageDataRequest",
    "WAWebSocketModel",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[InitFromStorage] init metadata from storage"
            ])));
            o("WAWebConnModel").Conn.trigger("me_ready");
            o("WAWebConnModel").Conn.meReadyTriggered = true;
            const t = o("WAWebUserPrefsGeneral").getPushname();
            const n = yield o("WAWebUserPrefsGeneral").getLastMobilePlatform();
            if (n == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "platform not found in UserPrefs."
                ])));
                return o("WAWebSocketModel").Socket.logout(o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion);
            }
            yield o("WAWebMobilePlatforms").setMobilePlatform(n, false);
            o("WAWebConnModel").Conn.pushname = t;
            o("WAWebConnModel").Conn.platform = n;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[InitFromStorage] important metadata loaded"
            ])));
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking");
            const t = yield e.getAccountLinkingStatus();
            o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
                isFBLinked: t.isFBLinked,
                isIGLinked: t.isIGLinked,
                linkState: t.linkState
            });
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (c || (c = n("Promise"))).all([
                o("WAWebUserPrefsStatus").getShareToFB(),
                o("WAWebUserPrefsStatus").getShareToIG()
            ]);
            const t = e[0];
            const r = e[1];
            o("WAWebBackendApi").frontendFireAndForget("updateCrosspostAutoShareSettings", {
                shareToFB: t,
                shareToIG: r
            });
        });
        return g.apply(this, arguments);
    }
    function h() {
        return o("WAWebSchemaNonMessageDataRequest").getNonMessageDataRequestTable().all().then((e)=>{
            o("WAWebNonMessageDataRequestMediaHandlingUtils").initializeMediaUploadResultFromStorage(e);
        });
    }
    l.restoreImportantMetaData = d;
    l.restoreAccountLinkingSettings = p;
    l.restoreCrosspostAutoShareSettings = f;
    l.restoreMediaUploadResult = h;
}, 98);