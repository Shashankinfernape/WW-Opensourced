__d("WAWebShortcakeLinkingDbscRegistration", [
    "WABase64",
    "WACryptoSha256",
    "WAExponentialBackoff",
    "WALogger",
    "WAWebUserPrefsInfoStore",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebDbscRegisterControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = "Secure-Session-Registration";
    const minTimeout = 200;
    const maxTimeout = 400;
    const g = 2;
    function h(t) {
        return y(t).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[shortcake] DBSC registration failed"
            ]))).catching(r("getErrorSafe")(t)).tags("wa-ice", "wa_app_compromise", "shortcake").sendLogs("dbsc-registration-failed");
        });
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield v();
            if (t == null) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] DBSC registration: no Noise static key"
                ]))).sendLogs("dbsc-registration-noise-key-missing");
                return;
            }
            const n = new TextDecoder().decode(e);
            yield b(n, t);
        });
        return C.apply(this, arguments);
    }
    function b(challenge, companion_noise_key_hash) {
        return o("WAExponentialBackoff").exponentialBackoff({
            minTimeout,
            maxTimeout,
            retries: g,
            timeoutIncludesTaskDuration: false
        }, (()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, a) {
                const i = yield o("WAWebXControllerFetchUtils").fetchFromXController(r("WAXWhatsAppWebDbscRegisterControllerRouteBuilder").buildUri({}).toString(), {
                    method: "POST",
                    additionalParams: {
                        challenge,
                        companion_noise_key_hash
                    }
                });
                if (!i.ok) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[shortcake] DBSC registration HTTP ",
                        ""
                    ])), i.status).tags("wa-ice", "wa_app_compromise", "shortcake").sendLogs("dbsc-registration-http-error");
                    return;
                }
                if (i.headers.has(p)) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[shortcake] DBSC registration requested after ",
                        " retries"
                    ])), a);
                    return;
                }
                if (a >= g) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[shortcake] DBSC registration response header missing after retries"
                    ]))).tags("wa-ice", "wa_app_compromise", "shortcake").sendLogs("dbsc-registration-header-missing");
                    return;
                }
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[shortcake] DBSC registration response header missing; retry ",
                    " of ",
                    ""
                ])), a + 1, g);
                return n(r("err")("DBSC registration response header missing"));
            });
            return function(e, t) {
                return a.apply(this, arguments);
            };
        })());
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            if (e == null) {
                return null;
            }
            return o("WABase64").encodeB64UrlSafe((yield o("WACryptoSha256").sha256(e.staticKeyPair.pubKey)));
        });
        return S.apply(this, arguments);
    }
    l.startDbscRegistration = h;
}, 98);