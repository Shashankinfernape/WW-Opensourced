__d("WACryptoHkdf", [
    "Promise",
    "WABinary",
    "WACryptoHmac",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 255 * o("WACryptoHmac").SHA256_BYTE_LENGTH;
    function u(t, a, i) {
        if (i < 0 || i > s) {
            return (e || (e = n("Promise"))).reject(r("err")(`HKDF::expand given bad length ${i}`));
        }
        let l;
        for(var u = Math.ceil(i / o("WACryptoHmac").SHA256_BYTE_LENGTH), c = o("WABinary").Binary.build(a).readByteArrayView(), d = new (o("WABinary")).Binary, m = o("WACryptoHmac").encodeKeySha256(t).then((e)=>{
            l = e;
            return new Uint8Array(0);
        }), p = function(t) {
            m = m.then((e)=>o("WACryptoHmac").sign(l, o("WABinary").Binary.build(e, c, t).readByteArrayView())).then((e)=>{
                const t = new Uint8Array(e);
                d.writeByteArray(t);
                return t;
            });
        }, _ = 1; _ <= u; _++){
            p(_);
        }
        return m.then(()=>d.readBuffer(i));
    }
    function c(e, t, n) {
        return o("WACryptoHmac").extractSha256(null, e).then((e)=>u(new Uint8Array(e), t, n));
    }
    function d(e, t, n, r) {
        return o("WACryptoHmac").extractSha256(t, e).then((e)=>u(new Uint8Array(e), n, r));
    }
    l.expand = u;
    l.extractAndExpand = c;
    l.extractWithSaltAndExpand = d;
}, 98);