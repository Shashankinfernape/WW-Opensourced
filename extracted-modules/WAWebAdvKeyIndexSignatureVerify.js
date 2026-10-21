__d("WAWebAdvKeyIndexSignatureVerify", [
    "invariant",
    "WABinary",
    "WAWebAdvSignatureConstants",
    "WAWebCryptoCurve25519VerifySignature"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
        const r = o("WABinary").Binary.build(o("WAWebAdvSignatureConstants").ADV_PREFIX_KEY_INDEX_LIST_ACCOUNT_SIGNATURE, e).readByteArrayView();
        return o("WAWebCryptoCurve25519VerifySignature").verifySignature(new Uint8Array(n), r, t);
    }
    function u({ details, accountSignature }, n) {
        if (details == null) {
            s(0, 128802);
        }
        if (accountSignature == null) {
            s(0, 56295);
        }
        return e(new Uint8Array(details), new Uint8Array(accountSignature), n);
    }
    l.verifyKeyIndexListSignature = e;
    l.verifyKeyIndexListAccountSignature = u;
}, 98);