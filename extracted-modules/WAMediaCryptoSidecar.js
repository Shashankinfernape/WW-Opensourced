__d("WAMediaCryptoSidecar", [
    "WAConcurrentIterate",
    "WACryptoHmac",
    "WAMediaUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e === "video";
    }
    const s = 16;
    const u = 10;
    const c = 64 * 1024;
    function d(e, t, n = 1) {
        const byteLength = t.buffer.byteLength;
        const a = Math.ceil((byteLength - s) / c);
        const i = new Uint8Array(u * a);
        return o("WAConcurrentIterate").concurrentIterate(a, function(n) {
            const r = n * c;
            const a = r + s + c;
            const l = t.subarray(r, a);
            return o("WACryptoHmac").sign(e, l).then((e)=>{
                const t = new Uint8Array(e, 0, u);
                i.set(t, n * u);
            });
        }, n).then(()=>o("WAMediaUtils").castToStreamingSidecar(i.buffer));
    }
    l.shouldHaveStreamingSidecar = e;
    l.calculateStreamingSidecar = d;
}, 98);