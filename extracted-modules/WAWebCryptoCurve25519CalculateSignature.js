__d("WAWebCryptoCurve25519CalculateSignature", [
    "WAWebCryptoLibraryUtilsApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield r("WAWebCryptoLibraryUtilsApi").signMsg(e.pubKey, e.privKey, t);
            return n;
        });
        return s.apply(this, arguments);
    }
    l.calculateSignature = e;
}, 98);