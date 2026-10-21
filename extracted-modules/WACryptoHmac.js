__d("WACryptoHmac", [
    "WACryptoDependencies",
    "WATypedArraysCast"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 32;
    const s = new Uint8Array(e);
    const u = {
        name: "HMAC",
        hash: "SHA-256"
    };
    const c = {
        name: "HMAC",
        hash: "SHA-512"
    };
    const d = {
        name: "HMAC",
        hash: "SHA-1"
    };
    function m(e, t) {
        const n = o("WATypedArraysCast").castTypedArrays(Uint8Array, t);
        return o("WACryptoDependencies").getCrypto().subtle.importKey("raw", n, e, false, [
            "sign"
        ]).then((t)=>({
                key: t,
                algo: e
            }));
    }
    function p(e) {
        return m(u, e);
    }
    function _({ algo: r, key }, t, n) {
        return o("WACryptoDependencies").getCrypto().subtle.sign(r, key, t).then((e)=>{
            if (n != null && n !== 0) {
                return e.slice(0, n);
            }
            return e;
        });
    }
    function f(e, t) {
        return m(u, e ?? s).then((e)=>_(e, t));
    }
    function g(e, t, n) {
        return m(u, e).then((e)=>_(e, t, n));
    }
    function h(e, t, n) {
        return m(c, e).then((e)=>_(e, t, n));
    }
    function y(e, t, n) {
        return m(d, e).then((e)=>_(e, t, n));
    }
    l.SHA256_BYTE_LENGTH = e;
    l.encodeKeySha256 = p;
    l.sign = _;
    l.extractSha256 = f;
    l.hmacSha256 = g;
    l.hmacSha512 = h;
    l.hmacSha1 = y;
}, 98);