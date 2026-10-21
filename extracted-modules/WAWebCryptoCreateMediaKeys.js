__d("WAWebCryptoCreateMediaKeys", [
    "WABase64",
    "WACryptoHkdf",
    "WALogger",
    "WAWebCryptoMediaTypeInfo",
    "WAWebMediaFileErrors",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(t);
            let i;
            try {
                i = o("WABase64").decodeB64(n);
            } catch (t) {
                if (!r("gkx")("26258")) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "decodeB64: invalid base64 string ",
                        ""
                    ])), n);
                }
            }
            if (!n || !a || !i) {
                throw new (o("WAWebMediaFileErrors")).MediaEncryptionError(`createKeys fail: !!mediakey: ${String(!!n)} info: ${String(a)} type: ${t}`);
            }
            const l = yield o("WACryptoHkdf").extractAndExpand(i, a, 112);
            if (!l || l.byteLength < 112) {
                throw new (o("WAWebMediaFileErrors")).MediaEncryptionError("computeMediaKeys: hkdf error");
            }
            return {
                iv: l.slice(0, 16),
                encKey: l.slice(16, 48),
                macKey: l.slice(48, 80),
                refKey: l.slice(80, 112)
            };
        });
        return u.apply(this, arguments);
    }
    l.default = s;
}, 98);