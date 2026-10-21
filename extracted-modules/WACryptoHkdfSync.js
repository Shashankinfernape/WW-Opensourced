__d("WACryptoHkdfSync", [
    "WABinary",
    "WACryptoSha256HmacBuilder",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 32;
    const s = new Uint8Array(e);
    const u = 255 * e;
    function c(e, t) {
        return new (o("WACryptoSha256HmacBuilder")).Sha256HMacBuilder(t ?? s).update(e).finish();
    }
    function d(t, n, a = new Uint8Array(0)) {
        if (n < 0 || n > u) {
            throw r("err")(`HKDF::expand given bad length ${n}`);
        }
        for(var i = Math.ceil(n / e), l = new Uint8Array(0), s = new (o("WABinary")).Binary, c = 1; c <= i; c++){
            l = new (o("WACryptoSha256HmacBuilder")).Sha256HMacBuilder(t).update(o("WABinary").Binary.build(l, a, c).readByteArrayView()).finish();
            s.writeByteArray(l);
        }
        return s.readByteArrayView(n);
    }
    function m(e, t, n, r) {
        return d(c(e, t), r, n);
    }
    l.hkdf = m;
}, 98);