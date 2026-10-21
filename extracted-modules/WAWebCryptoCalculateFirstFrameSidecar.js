__d("WAWebCryptoCalculateFirstFrameSidecar", [
    "WACryptoHmac",
    "WAWebCryptoCalculateStreamingSidecar"
], function(t, n, r, o, a, i, l) {
    const e = 16;
    function s(t, n, r) {
        const a = Math.ceil(t / e) * e;
        const i = n.slice(0, o("WAWebCryptoCalculateStreamingSidecar").IV_LENGTH + a);
        return o("WACryptoHmac").hmacSha256(r, i, o("WAWebCryptoCalculateStreamingSidecar").HMAC_LENGTH);
    }
    l.default = s;
}, 98);