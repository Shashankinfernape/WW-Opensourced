__d("WAWebNonMessageDataRequestHandlerCanonicalEntNonce", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUtils",
    "WAWebODS",
    "WAWebUserPrefsCanonical",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
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
    let g;
    let h;
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Handling canonical ent nonce fetch response"
                ])));
                r("WAWebODS").incr("web.app.canonical.recovery.handler.handle_nonce_response");
                o("WAWebCanonicalEntRecoveryWam").logReceivedNonceFromPrimary();
                o("WAWebUserPrefsCanonical").clearNonceRequestTimestamp();
                if (e == null || e.length === 0) {
                    r("WAWebODS").incr("web.app.canonical.recovery.handler.response_data_missing");
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] No results in canonical ent nonce fetch response"
                    ])));
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("recovery_response_empty", "recovery");
                    return;
                }
                const n = e[0];
                const a = n?.companionCanonicalUserNonceFetchRequestResponse;
                if (a == null) {
                    r("WAWebODS").incr("web.app.canonical.recovery.handler.response_data_missing");
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] No companionCanonicalUserNonceFetchRequestResponse"
                    ])));
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("recovery_response_missing", "recovery");
                    return;
                }
                const { forceRefresh, nonce, waFbid } = a;
                if (nonce == null || waFbid == null) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] Nonce payload missing required fields"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.recovery.handler.response_data_missing");
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("recovery_nonce_payload_missing_fields", "recovery");
                    return;
                }
                if (t !== true && !b(forceRefresh)) {
                    return;
                }
                const deviceId = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
                const y = yield o("WAWebCanonicalTokenExchange").exchangeNonceForToken({
                    userId: Number(waFbid),
                    deviceId,
                    nonce
                }, "recovery");
                if (y !== o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] Failed to exchange canonical ent nonce for token"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.recovery.handler.nonce_exchange_failed");
                    return;
                }
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Successfully exchanged canonical ent nonce for token"
                ])));
                r("WAWebODS").incr("web.app.canonical.recovery.handler.success");
                o("WAWebUserPrefsCanonical").clearRetryBackoffSeconds();
                if (o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled() && !o("WAWebCanonicalUtils").isCanonicalReloadPending()) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] Scheduling canonical recovery app reload"
                    ])));
                    o("WAWebBackendApi").frontendFireAndForget("scheduleCanonicalReload", undefined);
                }
            } catch (error) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Unexpected error during Canonical Response Handle: ",
                    ""
                ])), error).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                r("WAWebODS").incr("web.app.canonical.recovery.handler.unexpected_error");
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("recovery_handler_unexpected_error", "recovery", String(error));
            }
        });
        return C.apply(this, arguments);
    }
    function b(forceRefresh) {
        if (forceRefresh === true) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Should force refresh token"
            ])));
            r("WAWebODS").incr("web.app.canonical.recovery.handler.force_refresh");
            return true;
        }
        if (o("WAWebCanonicalUtils").isCanonicalPresent()) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] skipping recovery, user is already authenticated"
            ])));
            r("WAWebODS").incr("web.app.canonical.recovery.handler.already_authenticated");
            return false;
        }
        if (o("WAWebCanonicalUtils").isCanonicalTokenPresent()) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] skipping recovery, token is already present"
            ])));
            r("WAWebODS").incr("web.app.canonical.recovery.handler.token_present");
            return false;
        }
        return true;
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebCanonicalUtils").isDebugForceTokenRefresh();
            if (t) {
                o("WAWebCanonicalUtils").setDebugForceTokenRefresh(false);
            }
            if (!(!t && !o("WAWebCanonicalGating").isCanonicalRecoveryEnabled())) {
                yield y(e, t);
            }
        });
        return S.apply(this, arguments);
    }
    l.handleCanonicalEntNonceFetchResponse = v;
}, 98);