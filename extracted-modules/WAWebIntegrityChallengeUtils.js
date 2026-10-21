__d("WAWebIntegrityChallengeUtils", [
    "$InternalEnum",
    "WABase64UrlSafe",
    "asyncToGeneratorRuntime",
    "err",
    "unsafeCast"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "PASSKEY",
        "CAPTCHA"
    ]);
    const s = "WAIntegrityChallengeState";
    const u = "whatsapp-challenge";
    function c(e) {
        const t = o("WABase64UrlSafe").urlSafeBase64ToStandard(e);
        const n = `${t}===`.slice(0, t.length + (4 - t.length % 4) % 4);
        return o("WABase64UrlSafe").getBytesFromBase64(n);
    }
    function d(e) {
        for(var t = new Uint8Array(e), n = "", r = 0; r < t.length; r++){
            n += String.fromCharCode(t[r]);
        }
        const a = btoa(n);
        return o("WABase64UrlSafe").urlSafeBase64(a).replace(/=/g, "");
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const challenge = c(e);
            const first = new TextEncoder().encode(u);
            const publicKey = {
                challenge,
                rpId: "whatsapp.com",
                userVerification: "preferred",
                timeout: 600000,
                extensions: {
                    prf: {
                        eval: {
                            first
                        }
                    }
                }
            };
            const navigator_credentials = navigator.credentials;
            if (navigator_credentials == null) {
                throw r("err")("WebAuthn credentials API is not available");
            }
            const s = yield navigator_credentials.get({
                publicKey
            });
            if (s == null) {
                throw r("err")("No credential returned from WebAuthn API");
            }
            const m = r("unsafeCast")(s);
            const p = m.getClientExtensionResults()?.prf?.results?.first ?? null;
            return {
                credential_id: m.id,
                raw_id: d(m.rawId),
                type: m.type,
                authenticator_data: d(m.response.authenticatorData),
                client_data_json: d(m.response.clientDataJSON),
                signature: d(m.response.signature),
                user_handle: m.response.userHandle != null ? d(m.response.userHandle) : "",
                prf_output: p != null ? d(p) : null
            };
        });
        return p.apply(this, arguments);
    }
    l.ChallengeTypes = e;
    l.INTEGRITY_CHALLENGE_IDB_KEY = s;
    l.performPasskeyAssertion = m;
}, 98);