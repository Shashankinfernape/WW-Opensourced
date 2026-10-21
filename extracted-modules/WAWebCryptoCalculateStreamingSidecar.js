__d("WAWebCryptoCalculateStreamingSidecar", [
    "Promise",
    "WAArrayBuffersConcat",
    "WACryptoHmac",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 65536;
    const u = 16;
    const c = 10;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = t instanceof ArrayBuffer ? t.byteLength : t.buffer.byteLength;
            const i = a - u;
            const l = Math.ceil(i / s);
            const d = Array.from({
                length: l
            }, function(e, n) {
                const a = n * s;
                const i = a + u + s;
                const l = t.slice(a, i);
                return o("WACryptoHmac").hmacSha256(r, l, c);
            });
            const m = yield (e || (e = n("Promise"))).all(d);
            return o("WAArrayBuffersConcat").concatArrayBuffers.apply(void 0, m);
        });
        return m.apply(this, arguments);
    }
    l.IV_LENGTH = u;
    l.HMAC_LENGTH = c;
    l.calculateStreamingSidecar = d;
}, 98);