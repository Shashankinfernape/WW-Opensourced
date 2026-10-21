__d("WAWebCanonicalCredentialRecoveryJob", [
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalRecoveryActions",
    "WAWebCanonicalUtils",
    "WAWebODS",
    "WAWebUserPrefsCanonical",
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
    let y;
    const C = 30;
    const b = 2;
    function v() {
        const t = o("WAWebUserPrefsCanonical").getRetryBackoffSeconds();
        const n = t <= 0 ? C : Math.min(t * b, o("WATimeUtils").HOUR_SECONDS);
        o("WAWebUserPrefsCanonical").setRetryBackoffSeconds(n);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] next recovery retry in ",
            "s"
        ])), n);
        return n;
    }
    function S() {
        o("WAWebUserPrefsCanonical").clearRetryBackoffSeconds();
        o("WAWebUserPrefsCanonical").clearNonceRequestTimestamp();
    }
    function R() {
        o("WAWebBackendApi").frontendFireAndForget("scheduleCanonicalReload", undefined);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebCanonicalGating").isCanonicalRecoveryEnabled()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] trying cached nonce recovery"
                ])));
                const e = yield o("WAWebCanonicalRecoveryActions").fetchCachedNonce();
                if (e) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] recovery succeeded via cached nonce"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.recovery.success");
                    S();
                    R();
                    return true;
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] cached nonce failed, trying peer request"
                ])));
            }
            if (o("WAWebCanonicalRecoveryActions").isWaitingForPeerResponse()) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] peer request throttled, awaiting response"
                ])));
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] sending peer nonce request to primary"
                ])));
                yield o("WAWebCanonicalRecoveryActions").requestNonceFromPrimary();
            }
            return false;
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                if (!o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || !o("WAComms").isCommsInitialized()) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] backend not ready, deferring recovery"
                    ])));
                    return C;
                }
                if (o("WAWebCanonicalUtils").isCanonicalReloadPending()) {
                    return o("WATimeUtils").DAY_SECONDS;
                }
                if (o("WAWebCanonicalUtils").isCanonicalTokenPresent()) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token present, scheduling reload"
                    ])));
                    R();
                    return o("WATimeUtils").DAY_SECONDS;
                }
                if (o("WAWebCanonicalUtils").isCanonicalPresent()) {
                    const e = yield o("WAWebCanonicalRecoveryActions").validateExistingToken();
                    if (e !== false) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[canonical] token valid, reschedule in 1 day"
                        ])));
                        S();
                        return o("WATimeUtils").DAY_SECONDS;
                    }
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token invalid, starting recovery"
                    ])));
                } else {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token missing, starting recovery"
                    ])));
                }
                r("WAWebODS").incr("web.app.canonical.recovery.attempt");
                const t = yield L();
                if (t) {
                    return o("WATimeUtils").DAY_SECONDS;
                }
                return v();
            } catch (error) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] recovery job failed: ",
                    ""
                ])), error).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                r("WAWebODS").incr("web.app.canonical.recovery.error");
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("recovery_job_unexpected_error", "recovery", String(error));
                return v();
            }
        });
        return I.apply(this, arguments);
    }
    l.maybeRecoverCanonicalCredentials = k;
}, 98);