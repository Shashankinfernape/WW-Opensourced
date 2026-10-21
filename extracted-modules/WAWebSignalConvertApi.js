__d("WAWebSignalConvertApi", [
    "Promise",
    "WALogger",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrarySenderkeySessionConversionApi",
    "WAWebCryptoLibrarySessionConversionApi",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        if (e == null || typeof e !== "object" || e instanceof ArrayBuffer || !("sessions" in e)) {
            return false;
        }
        return e.sessions != null;
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                if (e == null || !m(e)) {
                    return e;
                }
                const t = yield (d || (d = n("Promise"))).all([
                    o("WAWebSignalProtocolStore").getSignalProtocolStore().getIdentityKeyPair(),
                    o("WAWebSignalProtocolStore").getSignalProtocolStore().getLocalRegistrationId()
                ]);
                const a = t[0];
                const i = t[1];
                if (!a || i == null) {
                    throw r("err")("Attempted to loadSession without registration info");
                }
                const l = {
                    identityKeyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(a),
                    registrationId: i
                };
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeConvertSession: converting to crypto library"
                ]))).sendLogs("libsignal-to-cryptolib-session", {
                    sampling: 0
                });
                return o("WAWebCryptoLibrarySessionConversionApi").toCryptoLibrarySessionPrevSessions(e, l);
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeConvertSession: failed with error ",
                    ""
                ])), e).sendLogs("session-convert-error");
                throw e;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return e.sessions != null;
    }
    function g(t) {
        try {
            if (t == null || !f(t)) {
                return t;
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "maybeConvertSenderKey: converting to crypto library"
            ]))).sendLogs("libsignal-to-cryptolib-senderkey", {
                sampling: 0
            });
            return o("WAWebCryptoLibrarySenderkeySessionConversionApi").toCryptoManagerSenderKeySession(t);
        } catch (e) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "maybeConvertSenderKey: failed with error ",
                ""
            ])), e).sendLogs("senderkey-convert-error");
            throw e;
        }
    }
    l.shouldConvertSession = m;
    l.maybeConvertSession = p;
    l.maybeConvertSenderKey = g;
}, 98);