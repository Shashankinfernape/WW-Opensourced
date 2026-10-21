__d("WACryptoSha256", [
    "WABase64",
    "WACryptoDependencies"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return o("WACryptoDependencies").getCrypto().subtle.digest({
            name: "SHA-256"
        }, e);
    }
    function s(t) {
        return e(t).then(o("WABase64").encodeB64);
    }
    function u(e) {
        return s(c(e));
    }
    function c(e) {
        const t = new ArrayBuffer(e.length);
        const n = new Uint8Array(t);
        for(let r = 0, o = e.length; r < o; r++){
            n[r] = e.charCodeAt(r);
        }
        return t;
    }
    l.sha256 = e;
    l.sha256Base64 = s;
    l.sha256Str = u;
}, 98);