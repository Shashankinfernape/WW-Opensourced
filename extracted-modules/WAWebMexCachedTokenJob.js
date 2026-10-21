__d("WAWebMexCachedTokenJob", [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebMexCachedTokenJobMutation.graphql",
    "WAWebMexClient",
    "WAWebODS",
    "WAWebPonyfillsCryptoRandomUUID",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexCachedTokenJobMutation.graphql");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys();
            const { privateKey, publicKey } = t;
            const i = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(publicKey);
            const client_pub_key = o("WABase64").encodeB64(new TextEncoder().encode(i));
            const c = yield o("WAWebMexClient").fetchQuery(u, {
                input: {
                    client_pub_key,
                    request_id: r("WAWebPonyfillsCryptoRandomUUID")()
                }
            });
            const d = c.xwa2_ent_trade_canonical_nonce_for_access_tokens?.encrypted_access_tokens;
            if (d == null) {
                throw r("err")("[canonical][cached-nonce] MEX response missing encrypted payload");
            }
            const m = new Uint8Array(o("WABase64").decodeB64(d.key));
            const p = new Uint8Array(o("WABase64").decodeB64(d.data));
            const _ = new Uint8Array(o("WABase64").decodeB64(d.nonce));
            const f = new Uint8Array(o("WABase64").decodeB64(d.tag));
            const g = yield o("WAWebAccountLinkingCryptoUtils").decryptRSAEncryptedPayload(privateKey, m, p, _, f);
            if (g == null || typeof g !== "object") {
                throw r("err")("[canonical][cached-nonce] decrypted payload is not an object");
            }
            const { access_token, fbid } = g;
            if (typeof access_token !== "string" || typeof fbid !== "number") {
                throw r("err")("[canonical][cached-nonce] decrypted payload missing access_token or fbid");
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical][cached-nonce] cached nonce fetch via MEX succeeded"
            ])));
            r("WAWebODS").incr("web.app.canonical.cached_nonce.decrypt_success");
            return {
                accessToken: access_token,
                fbid
            };
        });
        return d.apply(this, arguments);
    }
    l.fetchCachedNonceToken = c;
}, 98);