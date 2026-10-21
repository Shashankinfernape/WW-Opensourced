__d("WAWebCanonicalRecoveryActions", [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUserValidQuery",
    "WAWebMexCachedTokenJob",
    "WAWebODS",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebUserPrefsCanonical",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 4;
    const p = o("WATimeUtils").HOUR_MILLISECONDS * m;
    function _() {
        const e = o("WAWebUserPrefsCanonical").getPeerRequestTimestamp();
        if (e == null) {
            return false;
        }
        return Date.now() - e < p;
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] skipping peer nonce request, me not loaded yet"
                ])));
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] requesting nonce from primary"
            ])));
            yield o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_CANONICAL_USER_NONCE_FETCH, {});
            o("WAWebCanonicalEntRecoveryWam").logRequestNonceFromPrimary();
            o("WAWebUserPrefsCanonical").setPeerRequestTimestamp(Date.now());
        });
        return g.apply(this, arguments);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebMexCachedTokenJob").fetchCachedNonceToken();
                const { accessToken, fbid } = e;
                const deviceId = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
                if (deviceId == null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] cached nonce skipped, no deviceId"
                    ])));
                    return false;
                }
                const a = yield o("WAWebCanonicalTokenExchange").storeCanonicalCredentials({
                    userId: fbid,
                    deviceId,
                    accessToken
                }, "recovery");
                return a === o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS;
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] cached nonce recovery failed: ",
                    ""
                ])), error).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("cached_nonce_recovery_failed", "recovery", String(error));
                return false;
            }
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebCanonicalUserValidQuery").fetchCanonicalUserValid();
                switch(e){
                    case "valid":
                        r("WAWebODS").incr("web.app.canonical.validation.valid");
                        return true;
                    case "error":
                        r("WAWebODS").incr("web.app.canonical.validation.error");
                        return null;
                    default:
                        r("WAWebODS").incr("web.app.canonical.validation.invalid");
                        return false;
                }
            } catch (error) {
                r("WAWebODS").incr("web.app.canonical.validation.error");
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] token validation failed: ",
                    ""
                ])), error).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                return null;
            }
        });
        return b.apply(this, arguments);
    }
    l.isWaitingForPeerResponse = _;
    l.requestNonceFromPrimary = f;
    l.fetchCachedNonce = h;
    l.validateExistingToken = C;
}, 98);