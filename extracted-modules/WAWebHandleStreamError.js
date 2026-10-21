__d("WAWebHandleStreamError", [
    "Promise",
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebABPropsUpdateFromStorage",
    "WAWebBackendEventBus",
    "WAWebCompanionRegUtils",
    "WAWebCoreActionsODS",
    "WAWebInitializeCryptoLibrary",
    "WAWebJestE2ELogUtils",
    "WAWebSocketModel",
    "WAWebStartBackend",
    "WAWebUserPrefsTabMutex",
    "WAWebWamDeviceLinkReporter",
    "asyncToGeneratorRuntime",
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
    const _ = new (r("WADeprecatedWapParser"))("streamErrorParser", function(t) {
        t.assertTag("stream:error");
        if (t.hasChild("conflict")) {
            const n = t.child("conflict");
            const r = n.attrString("type");
            switch(r){
                case "replaced":
                    return {
                        type: "replaced"
                    };
                case "device_removed":
                default:
                    return {
                        type: "device_removed"
                    };
            }
        } else {
            if (t.hasAttr("code")) {
                return {
                    type: "code",
                    code: t.attrInt("code")
                };
            }
            if (t.hasChild("ack")) {
                return {
                    type: "ack",
                    id: t.child("ack").hasAttr("id") ? t.child("ack").attrString("id") : null
                };
            }
            if (t.hasChild("xml-not-well-formed")) {
                return {
                    type: "xml-not-well-formed"
                };
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unrecognized stream:error: ",
                ""
            ])), t.toString());
            return {
                type: "other"
            };
        }
    });
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = _.parse(e);
            if (t.error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                return (p || (p = n("Promise"))).reject(t.error);
            }
            const t_success = t.success;
            if (t_success.type === "code" && t_success.code >= 500 && t_success.code < 600) {
                if (t_success.code === 515) {
                    o("WAComms").stopComms();
                    yield o("WAWebCompanionRegUtils").startLogin();
                    yield o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage();
                    o("WAWebInitializeCryptoLibrary").initializeCryptoLibrary();
                    o("WAWebStartBackend").startBackend();
                    return (p || (p = n("Promise"))).resolve("NO_ACK");
                }
                if (t_success.code === 516) {
                    o("WAComms").stopComms();
                    if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                        o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                    }
                    yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(516);
                    yield o("WAWebCompanionRegUtils").startLogout();
                    if (!r("justknobx")._("3462")) {
                        o("WAWebStartBackend").startBackend();
                    }
                    return (p || (p = n("Promise"))).resolve("NO_ACK");
                }
                o("WAComms").onStreamErrorReceived();
            } else {
                if (t_success.type === "device_removed") {
                    o("WAWebBackendEventBus").BackendEventBus.triggerStartingLogout();
                    o("WAComms").stopComms();
                    if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                        o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout();
                    }
                    yield o("WAWebSocketModel").Socket.clearCredentialsAndStoredData();
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "stream error due to device removed, logging out"
                    ])));
                    o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole("stream error due to device removed, logging out");
                    o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                    return (p || (p = n("Promise"))).resolve("NO_ACK");
                }
                if (t_success.type === "replaced") {
                    if (o("WAWebUserPrefsTabMutex").currentTabHasMutex()) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[handleStreamError] replaced with mutex, closing"
                        ]))).sendLogs("invalid-session-replacement", {
                            sampling: 0.01
                        });
                    }
                    o("WAComms").stopComms();
                    return (p || (p = n("Promise"))).resolve("NO_ACK");
                }
                if (t_success.type === "xml-not-well-formed") {
                    if (r("gkx")("26258")) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[handleStreamError] bad xml, closing socket"
                        ])));
                    } else {
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[handleStreamError] bad xml, closing socket"
                        ]))).sendLogs("sent-xml-not-well-formed");
                    }
                }
            }
            return (p || (p = n("Promise"))).resolve("CLOSE_SOCKET");
        });
        return g.apply(this, arguments);
    }
    l.default = f;
}, 98);