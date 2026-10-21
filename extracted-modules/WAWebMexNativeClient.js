__d("WAWebMexNativeClient", [
    "WACustomError",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexLogging",
    "WAWebMexRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 1000;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = new (o("WAWebMexLogging")).MexPerfTracker(true);
            a.start();
            try {
                const i = f(t);
                const l = i.params;
                a.setQueryId(l.id);
                a.setOperationName(l.name);
                const c = {
                    metadata: {
                        mexPerfTracker: a
                    }
                };
                const d = yield o("WAWebMexRelayEnvironment").fetchFunc(i.params, n, c);
                const m = _(d, a);
                a.setHasData(true);
                a.stop();
                a.logEvent();
                return m.data;
            } catch (n) {
                if (n instanceof o("WAWebMexRelayEnvironment").MexIqError || n instanceof o("WAWebMexRelayEnvironment").MexPayloadParsingError || n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError) {
                    if (!(n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError)) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex][native-client] infra error"
                        ]))).catching(n).tags("mex", "native-client").sendLogs("mex-native-client-infra-error");
                    }
                } else {
                    const g = r("getErrorSafe")(n);
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][native-client] unexpected error"
                    ]))).catching(g).tags("mex", "native-client").sendLogs("mex-native-client-unexpected-error");
                    a.setHasData(false);
                    a.setErrors([
                        o("WAWebMexLogging").createLoggingClientError(417, g.message)
                    ]);
                }
                a.stop();
                a.logEvent();
                if (!(n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError)) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][",
                        "] fetch query error"
                    ])), h(t)).tags("GQL", "MEX");
                }
                if (n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError) {
                    const y = n.error.extensions;
                    const { backoff_sec: C, error_code: b, is_retryable: v } = y;
                    throw new (o("WAWebBackendErrors")).MexServerStatusCodeError(Number(b), `MexFatalExtensionError: ${h(t)}: ${n.error.message}`, {
                        backoffMs: p(C),
                        retryable: v
                    });
                }
                throw n instanceof o("WAWebMexRelayEnvironment").MexIqError ? new (o("WAWebBackendErrors")).ServerStatusCodeError(n.code, `MexIqError: ${n.message}`) : n;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        if (e != null && Number.isFinite(e) && e > 0) {
            return e * c;
        }
        return null;
    }
    function _(e, t) {
        if (e.data != null) {
            return {
                data: e.data
            };
        }
        if (Array.isArray(e)) {
            const n = "mex response is an array";
            t.setErrors([
                o("WAWebMexLogging").createLoggingClientError(472, n)
            ]);
            throw new (o("WAWebMexRelayEnvironment")).MexPayloadParsingError(r("err")(n));
        }
        const a = "data is missing in mex response";
        t.setErrors([
            o("WAWebMexLogging").createLoggingClientError(472, a)
        ]);
        throw new (o("WAWebMexRelayEnvironment")).MexPayloadParsingError(r("err")(a));
    }
    function f(e) {
        const n = g(e);
        if (n != null) {
            return n;
        }
        const r = e.default != null ? e.default.kind : e.kind;
        throw new (o("WACustomError")).CustomError(`operation kind ${JSON.stringify(r) ?? ""} is not 'Request'`);
    }
    function g(e) {
        if (e.kind === "Request" && e.default == null) {
            return e;
        }
        if (e.default != null && e.default.kind === "Request") {
            return e.default;
        }
        return null;
    }
    function h(e) {
        const t = g(e);
        if (t != null) {
            return t.params.name;
        }
        return "unknown-operation";
    }
    l.fetchQuery = d;
}, 98);