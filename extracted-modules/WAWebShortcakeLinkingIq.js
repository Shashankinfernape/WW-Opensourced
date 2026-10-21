__d("WAWebShortcakeLinkingIq", [
    "WALogger",
    "WASmaxMdGetPasskeyRequestOptionsRPC",
    "WASmaxMdSetCompanionNonceRPC",
    "WASmaxMdSetEncryptedPairingRequestRPC",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: sending GetPasskeyRequestOptions IQ"
            ])));
            const t = yield o("WASmaxMdGetPasskeyRequestOptionsRPC").sendGetPasskeyRequestOptionsRPC();
            if (t.name !== "GetPasskeyRequestOptionsResponseSuccess") {
                throw r("err")("Shortcake: GetPasskeyRequestOptions IQ failed");
            }
            return t.value.passkeyRequestOptionsPasskeyRequestOptionsMixin.elementValue;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(companionNonceElementValue) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: sending SetCompanionNonce IQ"
            ])));
            const t = yield o("WASmaxMdSetCompanionNonceRPC").sendSetCompanionNonceRPC({
                companionNonceElementValue
            });
            if (t.name !== "SetCompanionNonceResponseSuccess") {
                throw r("err")("Shortcake: SetCompanionNonce IQ failed");
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(encryptedPairingRequestElementValue) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: sending SetEncryptedPairingRequest IQ"
            ])));
            const t = yield o("WASmaxMdSetEncryptedPairingRequestRPC").sendSetEncryptedPairingRequestRPC({
                encryptedPairingRequestElementValue
            });
            if (t.name !== "SetEncryptedPairingRequestResponseSuccess") {
                throw r("err")("Shortcake: SetEncryptedPairingRequest IQ failed");
            }
        });
        return f.apply(this, arguments);
    }
    l.requestPasskeyRequestOptions = c;
    l.sendCompanionNonce = m;
    l.sendEncryptedPairingRequest = _;
}, 98);