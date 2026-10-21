__d("WAWebFeatureDetectionCryptoSupport", [
    "Promise",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    const b = "whatsapp is da best";
    const v = I(b);
    const S = {
        name: "HMAC",
        hash: "SHA-256"
    };
    const R = {
        name: "AES-CBC",
        length: 256
    };
    function L() {
        return (C || (C = n("Promise"))).resolve().then(()=>self.crypto.subtle || self.crypto.webkitSubtle);
    }
    function E() {
        return L().then((t)=>t.generateKey(S, false, [
                "sign",
                "verify"
            ]).then((n)=>t.sign(S, n, v).then((e)=>t.verify(S, n, e, v.buffer)).catch((t)=>{
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[crypto] HMAC-SHA256 signing failed: ",
                        ""
                    ])), t);
                    return false;
                }).then((e)=>{
                    if (e) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[crypto] HMAC-SHA256 is verified"
                        ])));
                        return true;
                    }
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[crypto] HMAC-SHA256 is not verified"
                    ])));
                    return false;
                }).catch((e)=>{
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[crypto] HMAC-SHA256 verification failed: ",
                        ""
                    ])), e);
                    return false;
                })).catch((e)=>{
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[crypto] HMAC-SHA256 key generation failed: ",
                    ""
                ])), e);
                return false;
            })).catch((e)=>{
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[crypto] HMAC-SHA256: ",
                ""
            ])), e);
            return false;
        });
    }
    function k() {
        return L().then((e)=>e.generateKey(R, false, [
                "encrypt",
                "decrypt"
            ]).then((t)=>(C || (C = n("Promise"))).resolve(self.crypto).then((e)=>{
                    const t = e.getRandomValues(new Uint8Array(16));
                    const n = {
                        name: "AES-CBC",
                        iv: t
                    };
                    return n;
                }).then((n)=>e.encrypt(n, t, v).then((r)=>e.decrypt(n, t, r)).catch((e)=>{
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[crypto] AES-CBC encryption failed: ",
                            ""
                        ])), e);
                        return false;
                    }).then((e)=>{
                        const t = new Uint8Array(e);
                        if (T(t) === b) {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[crypto] AES-CBC encryption/decryption is correct"
                            ])));
                            return true;
                        }
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[crypto] AES-CBC encryption/decryption is incorrect"
                        ])));
                        return false;
                    }).catch((e)=>{
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[crypto] AES-CBC decryption failed: ",
                            ""
                        ])), e);
                        return false;
                    }))).catch((e)=>{
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[crypto] AES-CBC key generation failed: ",
                    ""
                ])), e);
                return false;
            })).catch((e)=>{
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[crypto] AES-CBC: ",
                ""
            ])), e);
            return false;
        });
    }
    function I(e) {
        return new Uint8Array(e.split("").map((e)=>e.charCodeAt(0)));
    }
    function T(e) {
        const t = Array.prototype.slice.call(e);
        return t.map((e)=>String.fromCharCode(e)).join("");
    }
    l.supportsHmacSha256 = E;
    l.supportsAesCbc = k;
}, 98);