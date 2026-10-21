__d("WAWebMetaAiWaffleAuthToken", [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const op = 1;
    const c = 1;
    const d = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("meta_ai_metering");
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t;
            try {
                t = yield d.getAccountLinkingData();
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Meta AI auth token: failed to read account linking data"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("waffle-metaai-auth-token-db-read-failed", {
                    sampling: 0.01
                });
                return null;
            }
            if (t == null) {
                return null;
            }
            const n = t;
            const { accesstoken, linkState } = n;
            if (linkState !== o("WAWebAccountLinkingConstants").AccountLinkState.Active || accesstoken == null || accesstoken === "") {
                return null;
            }
            try {
                const l = yield o("WAWebAccountLinkingCryptoUtils").wrapWafflePayload({
                    access_token: accesstoken,
                    op,
                    timestamp: Math.floor(Date.now() / 1000),
                    version: c
                });
                return o("WAWebAccountLinkingCryptoUtils").serializeWaffleEncryptedEnvelope(l);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Meta AI auth token: failed to build encrypted blob"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("waffle-metaai-auth-token-encrypt-failed", {
                    sampling: 0.01
                });
                return null;
            }
        });
        return p.apply(this, arguments);
    }
    l.buildMetaAiWaffleAuthTokenBlob = m;
}, 98);