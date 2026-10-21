__d("WAWebHandleFailure", [
    "Promise",
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebCoreActionsODS",
    "WAWebE2ETestPairingConstants",
    "WAWebFailureErrorCodes",
    "WAWebJestE2ELogUtils",
    "WAWebLocalStorage",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "WAWebUpdaterPlatforms",
    "WAWebUpdaterVersion",
    "WAWebWamPlatform",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = new (r("WADeprecatedWapParser"))("failureParser", function(e) {
        e.assertTag("failure");
        return {
            reason: e.attrInt("reason", 400, 599),
            location: e.attrString("location"),
            code: e.maybeAttrInt("code"),
            expire: e.maybeAttrInt("expire"),
            message: e.maybeAttrString("message"),
            url: e.maybeAttrString("url"),
            logoutMessageHeader: e.maybeAttrString("logout_message_header"),
            logoutMessageSubtext: e.maybeAttrString("logout_message_subtext"),
            logoutMessageLocale: e.maybeAttrString("logout_message_locale")
        };
    });
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (r("gkx")("26256")) {
                o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(`received failure stanza, ${t.toString()}`);
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").removeItem(o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY);
                }
            }
            const a = g.parse(t);
            if (a.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " parsing ",
                    ""
                ])), a.error.toString(), t.toString());
                return (f || (f = n("Promise"))).reject(a.error);
            }
            switch(a.success.reason){
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED:
                    {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "received failure stanza, reason: ",
                            ", logging out"
                        ])), a.success.reason);
                        if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                            o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                        }
                        const i = a.success;
                        const { logoutMessageHeader, logoutMessageLocale, logoutMessageSubtext } = i;
                        let C = null;
                        const b = yield o("WAWebBackendApi").frontendSendAndReceive("getNormalizedLocale", undefined);
                        if (logoutMessageLocale === b && (logoutMessageHeader != null || logoutMessageSubtext != null)) {
                            C = {
                                logoutMessageHeader,
                                logoutMessageSubtext
                            };
                        }
                        if (r("justknobx")._("4751")) {
                            o("WAComms").stopComms();
                        }
                        yield o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked, C);
                        o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                        break;
                    }
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_NOT_AUTHORIZED:
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BANNED:
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "received failure stanza, reason: ",
                        ", logging out"
                    ])), a.success.reason);
                    if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                        o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                    }
                    if (r("justknobx")._("4751")) {
                        o("WAComms").stopComms();
                    }
                    yield o("WAWebSocketModel").Socket.clearCredentialsAndStoredData();
                    o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                    break;
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_CLIENT_TOO_OLD:
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BAD_USER_AGENT:
                    {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Client outdated/bad user agent, updating app"
                        ])));
                        const v = o("WAWebUpdaterVersion").SANITIZED_VERSION_STR;
                        const S = o("WAWebUpdaterPlatforms").PLATFORMS[o("WAWebWamPlatform").getWamPlatform()];
                        o("WAWebBackendApi").frontendFireAndForget("forceAppUpdate", {
                            version: S === "web" ? v : null,
                            belowSoft: false,
                            belowHard: 0
                        });
                        o("WAComms").stopComms();
                        break;
                    }
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_TEMP_BANNED:
                    {
                        const R = a.success;
                        const { code, expire, message, url } = R;
                        if (code != null && expire != null) {
                            o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
                                banned: true,
                                code,
                                message,
                                url,
                                expire
                            });
                        } else {
                            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "Incorrect temporary ban data ",
                                " ",
                                ""
                            ])), code, expire);
                            throw r("err")("handleFailure: wrong temp ban data");
                        }
                        break;
                    }
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE:
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_INTERNAL_SERVER_ERROR:
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_EXPERIMENTAL:
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "handleFailure: got failure code ",
                        ""
                    ])), a.success.reason);
                    break;
                case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_SERVICE_UNAVAILABLE:
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "handleFailure: got failure code ",
                        ""
                    ])), a.success.reason);
                    o("WAWebBackendEventBus").BackendEventBus.triggerServiceUnavailable();
                    if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                        o("WAWebCoreActionsODS").logPageLoadErrorServiceUnavailable();
                    }
                    break;
                default:
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "failure reason ",
                        " not implemented yet"
                    ])), a.success.reason);
                    return (f || (f = n("Promise"))).reject(r("err")(`failure reason ${a.success.reason} not implemented yet`));
            }
        });
        return y.apply(this, arguments);
    }
    l.default = h;
}, 98);