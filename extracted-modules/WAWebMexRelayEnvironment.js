__d("WAWebMexRelayEnvironment", [
    "WABinary",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebMexLogging",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let n;
        if (t != null) {
            n = {
                query_id: o("WAWap").CUSTOM_STRING(t)
            };
        }
        return o("WADeprecatedSendIq").deprecatedSendIq(o("WAWap").wap("iq", {
            id: o("WAWap").generateId(),
            to: o("WAWap").S_WHATSAPP_NET,
            type: "get",
            xmlns: "w:mex"
        }, new (o("WAWap")).WapNode("query", n, o("WABinary").Binary.build(JSON.stringify(e)).readByteArrayView())), new (r("WADeprecatedWapParser"))("mexParser", function(e) {
            return new TextDecoder("utf-8").decode(e.child("result").contentBytes());
        }));
    }
    const s = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this) || this;
            r.name = "MexIqError";
            r.code = t;
            r.message = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const u = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.name = "MexPayloadParsingError";
            n.error = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const c = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.name = "MexFatalExtensionError";
            n.error = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const i = n.metadata?.mexPerfTracker;
            const l = i instanceof o("WAWebMexLogging").MexPerfTracker ? i : null;
            if (l != null) {
                l.setQueryId(e.id);
                l.setOperationName(e.name);
            }
            const d = {
                variables: t
            };
            const m = yield _(d, r("nullthrows")(e.id), l);
            if (!m.success) {
                if (l != null) {
                    l.setHasData(false);
                    l.setErrors([
                        o("WAWebMexLogging").createLoggingTransportError(m.errorCode, m.errorText)
                    ]);
                }
                throw new s(m.errorCode, m.errorText);
            }
            let f = {};
            try {
                f = JSON.parse(m.result);
            } catch (e) {
                const g = r("getErrorSafe")(e);
                if (l != null) {
                    l.setHasData(false);
                    l.setErrors([
                        o("WAWebMexLogging").createLoggingClientError(472, g.message)
                    ]);
                }
                throw new u(g);
            }
            const h = f;
            if (l != null) {
                l.setHasData(h.data != null);
                l.setExtensionErrors(h.errors);
            }
            const y = p(h.errors);
            if (y != null) {
                throw new c(y);
            }
            return f;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        if (e == null || e.length === 0) {
            return null;
        }
        const n = e.find((e)=>e.extensions?.is_summary === true) ?? e.find((e)=>e.extensions?.error_code != null);
        if (n == null) {
            const r = e[0];
            r.extensions.error_code = 500;
            return r;
        }
        return n;
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            try {
                return yield e(t, n);
            } catch (e) {
                const i = r("getErrorSafe")(e);
                if (a != null) {
                    a.setHasData(false);
                    a.setErrors([
                        o("WAWebMexLogging").createLoggingClientError(471, i.message)
                    ]);
                }
                throw new s(500, i.message);
            }
        });
        return f.apply(this, arguments);
    }
    l.sendMexIq = e;
    l.MexIqError = s;
    l.MexPayloadParsingError = u;
    l.MexFatalExtensionError = c;
    l.fetchFunc = d;
    l.parseFatalExtensionError = p;
}, 98);