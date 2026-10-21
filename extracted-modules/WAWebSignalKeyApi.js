__d("WAWebSignalKeyApi", [
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryUtilsApi"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = r("WAWebCryptoLibraryUtilsApi").makePreKey(e);
        const { preKeyId, privKey, pubKey } = t;
        const keyPair = {
            privKey,
            pubKey
        };
        return {
            keyId: preKeyId,
            keyPair,
            isDirectDistribution: 0
        };
    }
    function s(e, t) {
        const n = r("WAWebCryptoLibraryUtilsApi").makeSignedPreKey(o("WAWebCryptoCurve25519").toCurveKeyPair(e), t);
        const { preKeyId, privKey, pubKey, signature } = n;
        const u = {
            privKey,
            pubKey
        };
        return {
            keyId: preKeyId,
            keyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(u),
            signature
        };
    }
    function u() {
        return r("WAWebCryptoLibraryUtilsApi").makeKeyPair();
    }
    l.generatePreKeyPair = e;
    l.generateSignedKeyPair = s;
    l.generateIdentityKeyPair = u;
}, 98);