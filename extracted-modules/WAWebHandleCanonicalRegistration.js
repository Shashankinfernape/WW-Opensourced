__d("WAWebHandleCanonicalRegistration", [
    "WABase64",
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdfSync",
    "WAJids",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebODS",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
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
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = R(t);
                const { data: a, iv: i, tag: l } = n;
                const s = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
                const c = r("nullthrows")(s).staticKeyPair.pubKey;
                const d = S(new Uint8Array(o("WABase64").decodeB64(e)), new Uint8Array(c));
                const m = L(a, l);
                return yield o("WACryptoAesGcm").gcmDecrypt(d, i, m);
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Error while decrypting nonce: ",
                    ""
                ])), e).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                return null;
            }
        });
        return b.apply(this, arguments);
    }
    function v(t) {
        try {
            const n = new TextDecoder("utf-8").decode(t);
            const r = JSON.parse(n);
            const { access_token: a, fbid: i, nonce: l, timestamp: u } = r;
            if (l == null || i == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Nonce payload missing required fields"
                ])));
                return null;
            }
            return {
                nonce: l,
                fbid: i,
                timestamp: u,
                accessToken: a ?? null
            };
        } catch (e) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Error while parsing nonce payload: ",
                ""
            ])), e).sendLogs("canonical-error", {
                sampling: 0.01
            });
            return null;
        }
    }
    function S(e, t) {
        return o("WACryptoHkdfSync").hkdf(e, t, o("WABinary").Binary.build("Canonical Ent Companion Nonce Encrypt").readByteArrayView(), 32);
    }
    function R({ nonceElementValue: t, authTagElementValue: n, encryptedDataElementValue: r }) {
        return {
            iv: t,
            tag: n,
            data: r
        };
    }
    function L(e, t) {
        const n = new Uint8Array(e.length + t.length);
        n.set(e);
        n.set(t, e.length);
        return n;
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                if (!o("WAWebCanonicalGating").isCanonicalEnabled()) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] canonical reg is disabled"
                    ])));
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] begin canonical reg process"
                ])));
                r("WAWebODS").incr("web.app.canonical.registration.start");
                if (n == null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] device jid not present in pair success"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.registration.missing_jid");
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("registration_missing_jid", "registration");
                    return;
                }
                const a = o("WAJids").extractDeviceId(n);
                o("WAWebCanonicalEntRecoveryWam").logCompanionRegistered();
                if (t == null) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] encryption metadata not present in pair success"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.registration.missing_metadata");
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("registration_missing_metadata", "registration");
                    return;
                }
                const i = yield C(e, t);
                if (i == null) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] failed to decrypt nonce from encryption metadata"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.registration.nonce_decryption_failed");
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("nonce_decryption_failed", "registration");
                    return;
                }
                const l = v(i);
                if (l == null) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] failed to parse decrypted nonce payload"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.registration.nonce_parse_failed");
                    o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("nonce_parse_failed", "registration");
                    return;
                }
                const s = {
                    userId: l.fbid,
                    deviceId: Number(a),
                    nonce: l.nonce,
                    accessToken: l.accessToken
                };
                const u = l.accessToken != null && l.accessToken !== "" ? yield o("WAWebCanonicalTokenExchange").storeCanonicalCredentials(s, "registration") : yield o("WAWebCanonicalTokenExchange").exchangeNonceForToken(s, "registration");
                if (u === o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token exchange succeeded"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.registration.success");
                } else {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token exchange failed"
                    ])));
                    r("WAWebODS").incr("web.app.canonical.registration.nonce_exchange_failed");
                }
            } catch (e) {
                r("WAWebODS").incr("web.app.canonical.registration.unexpected_error");
                const b = r("getErrorSafe")(e);
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] unexpected error in canonical reg process"
                ]))).catching(b).sendLogs("canonical-error", {
                    sampling: 0.01
                });
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent("registration_unexpected_error", "registration", String(e));
            }
        });
        return k.apply(this, arguments);
    }
    l.decryptNonce = C;
    l.parseNoncePayload = v;
    l.handleCanonicalRegistration = E;
}, 98);