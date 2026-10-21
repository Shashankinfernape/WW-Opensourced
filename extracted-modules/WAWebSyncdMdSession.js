__d("WAWebSyncdMdSession", [
    "WABinary",
    "WACryptoSha256",
    "WAWebCryptoCurve25519",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebSignalCommonUtils").createSignalAddress(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()).toString();
            const t = r("nullthrows")((yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().loadIdentityKey(e)));
            const n = o("WAWebCryptoCurve25519").toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(t));
            const a = r("nullthrows")((yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().getIdentityKeyPair()));
            const i = o("WAWebCryptoCurve25519").toCurveKeyPubKey(a.pubKey);
            return u(n, i);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.byteLength !== 32) {
                throw r("err")(`genSessionId: primary identity public key is ${e.byteLength} bytes, should be 32!`);
            }
            if (t.byteLength !== 32) {
                throw r("err")(`genSessionId: companion identity public key is ${e.byteLength} bytes, should be 32!`);
            }
            const n = new (o("WABinary")).Binary;
            n.writeBuffer(e);
            n.write(95);
            n.writeBuffer(t);
            const a = n.readByteArrayView();
            const i = yield o("WACryptoSha256").sha256Base64(a);
            return i;
        });
        return c.apply(this, arguments);
    }
    l.genCurrentSessionId = e;
    l.genSessionId = u;
}, 98);