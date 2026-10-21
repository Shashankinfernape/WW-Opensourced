__d("WAWebShortcakeLinkingPairingRequest", [
    "WABase64",
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: building PairingRequest"
            ])));
            const t = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            if (t == null) {
                throw r("err")("Shortcake: noise info not available");
            }
            const n = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
            if (n == null) {
                throw r("err")("Shortcake: registration info not available");
            }
            const a = yield o("WAWebAdvSignatureApi").getADVSecretKey();
            const advSecret = o("WABase64").decodeB64(a);
            return o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").PairingRequestSpec, {
                companionPublicKey: t.staticKeyPair.pubKey,
                companionIdentityKey: n.identityKeyPair.pubKey,
                advSecret
            }).readBuffer();
        });
        return u.apply(this, arguments);
    }
    l.default = s;
}, 98);