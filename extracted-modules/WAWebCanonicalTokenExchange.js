__d("WAWebCanonicalTokenExchange", [
    "$InternalEnum",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebODS",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebAuthControllerRouteBuilder",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = n("$InternalEnum").Mirrored([
        "SUCCESS",
        "FAILED"
    ]);
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            try {
                const { accessToken: l, deviceId: c, nonce: d, userId: p } = t;
                const _ = r("WAXWhatsAppWebAuthControllerRouteBuilder").buildUri({
                    access_token: l ?? "",
                    nonce: d ?? "",
                    user_id: p,
                    device_id: c
                });
                const f = yield o("WAWebXControllerFetchUtils").fetchFromXController(_.toString(), {
                    method: "POST",
                    retry: n.retry
                });
                if (!f.ok) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] Auth controller failed: HTTP ",
                        ""
                    ])), f.status);
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("auth_controller_http_error", a, JSON.stringify({
                        status: f.status
                    }));
                    return m.FAILED;
                }
                const g = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(f);
                if (g == null || g.payload?.status !== "success") {
                    const v = g?.payload?.status ?? "invalid response";
                    const S = g?.payload?.error ?? "unknown";
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] Auth controller fail: ",
                        " err=",
                        ""
                    ])), v, S).sendLogs("canonical-error", {
                        sampling: 0.01
                    });
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("auth_controller_payload_error", a, JSON.stringify({
                        status: v,
                        server_error: S
                    }));
                    return m.FAILED;
                }
                return m.SUCCESS;
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Unexpected error in auth controller: ",
                    ""
                ])), e).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("auth_controller_unexpected_error", a, String(e));
                return m.FAILED;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        if (e === m.SUCCESS) {
            o("WAWebCanonicalUtils").setCanonicalTokenPresent(true);
            o("WAWebCanonicalEntRecoveryWam").logCredentialsStored(t);
            o("WAWebCanonicalWamFalcoBuffer").drainCanonicalWamFalcoBuffer();
        } else if (e === m.FAILED) {
            o("WAWebCanonicalUtils").setCanonicalTokenPresent(false);
        }
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Storing canonical credentials directly"
            ])));
            const n = yield p(e, {
                retry: true
            }, t);
            f(n, t);
            return n;
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Exchanging nonce for token"
            ])));
            const n = o("WAWebCanonicalEntRecoveryWam").generateRequestId();
            o("WAWebCanonicalEntRecoveryWam").logExchangeNonceStart(t, n);
            r("WAWebODS").incr("web.app.canonical.exchange.attempt");
            const a = yield p(e, {
                retry: true
            }, t);
            f(a, t);
            if (a === m.SUCCESS) {
                r("WAWebODS").incr("web.app.canonical.exchange.success");
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceSuccess(t, n);
            } else if (a === m.FAILED) {
                r("WAWebODS").incr("web.app.canonical.exchange.failed");
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceError(t, n);
            }
            return a;
        });
        return C.apply(this, arguments);
    }
    l.TokenExchangeResult = m;
    l.storeCanonicalCredentials = g;
    l.exchangeNonceForToken = y;
}, 98);